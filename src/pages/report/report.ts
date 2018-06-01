import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HistoryPage } from '../history/history';
import { InfoPage } from '../info/info';
import * as firebase from 'firebase';
@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {
  workkey : any;
  contract : any;
  progress : any = [];
  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
  }

  openHistory(index) {
    this.navCtrl.push(InfoPage,{item:this.progress[index]});
  }

  ionViewDidLoad() {
    let self = this;
    console.log('ionViewDidLoad ReportPage');
    this.workkey=this.navParams.get('item');
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    firebase.database().ref('workprogress/'+'/'+this.workkey + '/').on('value',function(snap){
      if( snap.val() != null) {
        let value = Object.keys(snap.val()).map(key => snap.val()[key]);
        let keys = Object.keys(snap.val());
        self.progress = value;
        console.log(value);
      }
      setTimeout(() => {
        loading.dismiss();
        // this.navCtrl.pop();
      }, 500);
    });
    firebase.database().ref('/workpermit/').on('value',function(snap){
      let values = Object.keys(snap.val()).map(key => snap.val()[key]);
      let keys = Object.keys(snap.val());
      let index = keys.indexOf(self.workkey);
      if (index != -1) {
        self.contract = values[index].email;
        self.contract = String(self.contract).split('@')[0];
      }
      console.log(values);
    });
  }

}
