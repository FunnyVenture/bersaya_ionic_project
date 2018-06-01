import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController, LoadingController, NavParams } from 'ionic-angular';
import { Register4Page } from '../register4/register4';
import { AdminPage } from '../admin/admin';
import { AdminContractorPage } from '../admin-contractor/admin-contractor';

import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';


/**
 * Generated class for the Register5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register5',
  templateUrl: 'register5.html',
})
export class Register5Page {
  compname: any;
  subcontname: any;
  address: any;
  address_sc: any;
  cperson: any;
  cperson_sc: any;
  officenum: any;
  officenum_sc: any;
  mobilenum: any;
  mobilenum_sc: any;
  email: any;
  email_sc: any;

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController, 
    public navParams: NavParams, 
    public load: LoadingController,
    public fdb: AngularFireDatabase) {

    this.compname = navParams.get('compname');
    this.subcontname = navParams.get('subcontname');
    this.address = navParams.get('address');
    this.address_sc = navParams.get('address_sc');
    this.cperson = navParams.get('cperson');
    this.cperson_sc = "";
    this.officenum = navParams.get('officenum');
    this.officenum_sc = "";
    this.mobilenum = navParams.get('mobilenum');
    this.mobilenum_sc = "";
    this.email = navParams.get('email');
    this.email_sc = "";
  }

  
  add(){
    let loading =this.load.create({duration: 4000});
    loading.present();

    let push={
      compname: this.compname,
      subcontname: this.subcontname,
      address: this.address,
      address_sc: this.address_sc,
      cperson: this.cperson,
      cperson_sc: this.cperson_sc,
      officenum: this.officenum,
      officenum_sc: this.officenum_sc,
      mobilenum: this.mobilenum,
      mobilenum_sc: this.mobilenum_sc,
      email: this.email,
      email_sc: this.email_sc
      
    }

    firebase.database().ref('contractor/').push(push);
      this.alertCtrl.create({
        title: 'Info',
        message: 'You have successfully registered a contractor!',
        buttons:[
          {
            text: "OK",
            handler: data => {
            this.navCtrl.push(AdminContractorPage);
            }
          }
        ]
      }).present();
    }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad Register5Page');
  }

}
