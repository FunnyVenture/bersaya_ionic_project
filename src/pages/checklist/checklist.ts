import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams, LoadingController } from 'ionic-angular';
import { Checklist1Page } from '../checklist1/checklist1';
import { WorkTaskPage } from '../work-task/work-task';
import { ReportPage } from '../report/report';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-checklist',
  templateUrl: 'checklist.html',
})
export class ChecklistPage {
  arrData = []
  myInput
  workkey : any;
  userid : any;
  checklist = [];
  keys = [];
  desc: any;
  workpermitNo : any;
  name : any;
  constructor(public loadingCtrl: LoadingController, public af: AngularFireAuth, public navCtrl: NavController,public alertCtrl: AlertController, public navParams: NavParams, public fdb: AngularFireDatabase) {
    this.fdb.list("/items/").subscribe (_data=>{this.arrData=_data;
      console.log(this.arrData);
    });
  }

  openWorkTask(index) {
    this.navCtrl.push(WorkTaskPage,
      {
        safety : this.checklist[index].safety,
        cones : this.checklist[index].cones,
        barriers : this.checklist[index].barriers,
        signage : this.checklist[index].signage,
        blinkers : this.checklist[index].blinkers,
        flagman : this.checklist[index].flagman,
        comment : this.checklist[index].comment,
        images  : this.checklist[index].images,
        date : this.checklist[index].date,
      });
  }

  openReportPage() {
    this.navCtrl.push(ReportPage,{item:this.workkey});
  }

  addItem() {
    this.fdb.list("/items/").push(this.myInput);
  }

  openChecklist1Page(){
    this.navCtrl.push(Checklist1Page,{item:this.workkey});
  }

  openAlertPage(){
    let alert = this.alertCtrl.create({
      title: 'Submit Report?',
      buttons: [
        {
          text: 'Yes',
          role: 'Yes',
          handler: () => {
            console.log('Yes clicked');
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('No clicked');
          }
        }
      ]
    });
    alert.present();
  }

  deleteItem(i){
    this.fdb.list("/items/").remove(this.arrData[i]);
  }

  ionViewDidLoad() {
    let self = this;
    this.workkey=this.navParams.get('item');
    this.desc = this.navParams.get('desc');
    this.name = this.navParams.get('name');
    this.workpermitNo = this.navParams.get('workpermitNo');
    console.log(this.workkey)
    console.log('ionViewDidLoad ChecklistPage');
    this.af.authState.subscribe((user)=>{
      this.userid = user.uid;
      console.log(user);
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loading.present();
      firebase.database().ref('checklist/'+this.workkey+'/'+this.userid + '/').on('value',function(snap){
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
    });
  }

}
