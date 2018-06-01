import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Task6Page } from '../task6/task6';
import { SiteStaffPage } from '../site-staff/site-staff';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-adminstaff',
  templateUrl: 'adminstaff.html',
})
export class AdminstaffPage {
  company: any;
  name: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public af: AngularFireAuth) {
  }

  openTask6Page(){
    this.navCtrl.push(Task6Page,{item:this.company,name:this.name});
    }

  openSiteStaffPage(){
    this.navCtrl.push(SiteStaffPage,{item:this.company,name:this.name});
    }

  ionViewDidLoad() {
    let self = this;
    this.company=this.navParams.get('item');
    this.name = this.navParams.get('name');
  }

}
