import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { WorkPermitPage } from '../work-permit/work-permit';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
@IonicPage()
@Component({
  selector: 'page-site-staff',
  templateUrl: 'site-staff.html',
})
export class SiteStaffPage {
  workpermit : any = [];
  keys : any = [];
  company : any;
  name : any[];
  constructor(public loadingCtrl: LoadingController, public af: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  openWorkPermit(index) {
    let path = String(this.workpermit[index].id)
    this.navCtrl.push(WorkPermitPage,{item:path,desc:this.workpermit[index].desc,workpermitNo:this.workpermit[index].workpermitNo,name:this.name});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Task6Page');
    let self = this;
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.company=this.navParams.get('item');
    this.name = this.navParams.get('name');
      firebase.database().ref('workpermit/').on('value',function(snap){
        setTimeout(() => {
          loading.dismiss();
          // this.navCtrl.pop();
        }, 500);
        if (snap.val() != null) {
        let values = Object.keys(snap.val()).map(key => snap.val()[key]);
        let keys = Object.keys(snap.val());
        self.keys = keys;
        
        self.workpermit= values.filter(
          value => value.consession == self.company);
        self.workpermit= self.workpermit.filter(
          value => value.finished == "true");
        }

      });

  }

}
