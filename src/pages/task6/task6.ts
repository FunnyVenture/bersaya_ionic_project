import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ChecklistPage } from '../checklist/checklist';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-task6',
  templateUrl: 'task6.html',
})
export class Task6Page {
  workpermit : any = [];
  keys : any = [];
  company : any;
  name : any;
  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
  }

  openChecklistPage(index){
    this.navCtrl.push(ChecklistPage,{item:this.workpermit[index].id,desc:this.workpermit[index].desc,workpermitNo:this.workpermit[index].workpermitNo,name:this.name});
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
          value => value.finished != "true");
        }
      });
  }

}
