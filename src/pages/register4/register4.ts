import { Component } from '@angular/core';
import { IonicPage, NavController,  NavParams,  ModalController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Register5Page } from '../register5/register5';
import * as firebase from 'firebase';

/**
 * Generated class for the Register4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register4',
  templateUrl: 'register4.html',
})
export class Register4Page {
  compname: any;
  subcontname: any;
  address: any;
  address_sc: any;
  cperson: any;
  officenum: any;
  mobilenum: any;
  email: any;

  constructor(public navCtrl: NavController,
    public fdb: AngularFireDatabase,  
    public navParams: NavParams,
    public modal : ModalController) {

    this.compname = navParams.get('compname');
    this.subcontname = "";
    this.address = navParams.get('address');
    this.address_sc = "";
    this.cperson = navParams.get('cperson');
    this.officenum = navParams.get('officenum');
    this.mobilenum = navParams.get('mobilenum');
    this.email = navParams.get('email');
  
  }
  
  
  next(){  
    this.modal.create(Register5Page, {
      compname : this.compname,
      subcontname: this.subcontname,
      address: this.address,
      address_sc: this.address_sc,
      cperson : this.cperson,
      officenum : this.officenum,
      mobilenum : this.mobilenum,
      email : this.email
      
    }).present();
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad Register4Page');
  }

}
