import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { NewChecklistPage } from '../new-checklist/new-checklist';
import { WorkTask2Page } from '../work-task2/work-task2';
import { AngularFireAuth } from 'angularfire2/auth';
import { ReportPage } from '../report/report';
import { AngularFireDatabase } from 'angularfire2/database';

import * as firebase from 'firebase';
@IonicPage()
@Component({
  selector: 'page-work-permit',
  templateUrl: 'work-permit.html',
})
export class WorkPermitPage {

  staffid: any;
  name: any;
  safety: any;
  cones: any;
  barriers: any;
  signage: any;
  blinkers: any;
  flagman: any;
  comment: any;
  date: any;

  workkey : any;
  userid : any;
  checklist = [];
  keys = [];
  desc : any;
  workpermitNo : any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public loadingCtrl: LoadingController, 
    public af: AngularFireAuth,  ) {
    this.staffid="";
    this.name="";
    this.date="";      
  }

  

  openNewChecklistPage() {
    this.navCtrl.push(NewChecklistPage,{item:this.workkey});
  }
  openReportPage() {
    this.navCtrl.push(ReportPage,{item:this.workkey});
  }

  openWorkTask2(index) {
    this.navCtrl.push(WorkTask2Page,
      {
        pavement : this.checklist[index].pavement,
        landscape  : this.checklist[index].landscape,
        road  : this.checklist[index].road,
        cleanliness  : this.checklist[index].cleanliness,
        others  : this.checklist[index].others,
        comment  : this.checklist[index].comment,
        images  : this.checklist[index].images,
        date: this.checklist[index].date,
      });
  }

  ionViewDidLoad() {
    let self = this;
    this.workkey=this.navParams.get('item');
    this.desc = this.navParams.get('desc');
    this.workpermitNo = this.navParams.get('workpermitNo');
    this.name = this.navParams.get('name');
    console.log(this.workkey)
    console.log('ionViewDidLoad ChecklistPage');
    this.af.authState.subscribe((user)=>{
      this.userid = user.uid;
      console.log(user);
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loading.present();
      try {
        firebase.database().ref('newchecklist/'+this.workkey+'/'+this.userid + '/').on('value',function(snap){
          console.log(snap.val());
          setTimeout(() => {
            loading.dismiss();
            // this.navCtrl.pop();
          }, 500);
          if (snap.val() != null) {
            let value = Object.keys(snap.val()).map(key => snap.val()[key]);
            let keys = Object.keys(snap.val());
            console.log(value);
            console.log(keys);
            // let data = Object.value(snap.val());
            self.checklist = value;
            self.keys = keys;
          }
        });
      } catch (error) {
        setTimeout(() => {
          loading.dismiss();
          // this.navCtrl.pop();
        }, 500);
      }
      
    });
  }

}
