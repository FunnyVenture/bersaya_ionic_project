import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController,LoadingController, NavParams, ModalController } from 'ionic-angular';
import { Register1Page } from '../register1/register1';
import { AdminContractorPage } from '../admin-contractor/admin-contractor';
import { AngularFireDatabase } from 'angularfire2/database';
import { Register4Page } from '../register4/register4';

import * as firebase from 'firebase';



/**
 * Generated class for the Register2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register2',
  templateUrl: 'register2.html',
})
export class Register2Page {
  compname: any;
  address: any;
  cperson: any;
  officenum: any;
  mobilenum: any;
  email: any;

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public load: LoadingController, 
    public navParams: NavParams,
    public fdb : AngularFireDatabase,
    public modal: ModalController) {

    this.compname = navParams.get('compname');
    this.address = navParams.get('address');
    this.cperson = "";
    this.officenum = "";
    this.mobilenum = "";
    this.email = "";
  
  }

  openRegister1Page(){
    this.navCtrl.push(Register1Page);
  }

  add(){
    let loading =this.load.create({
      duration: 3000
    });
    loading.present();

    let push = {
      compname : this.compname,
      address : this.address,
      cperson : this.cperson,
      officenum : this.officenum,
      mobilenum : this.mobilenum,
      email : this.email,
      
    }

    firebase.database().ref('contractor/').push(push);
      this.alertCtrl.create({
        title: 'Info',
        message: 'You have successfully registered a contractor!',
        buttons: [
          {
            text: "OK",
            handler: data => {
              this.navCtrl.setRoot(AdminContractorPage);
            }
          }
        ]
    }).present();
  }
  
  subcont(){
    this.modal.create(Register4Page, {
      compname : this.compname,
      address: this.address,
      cperson: this.cperson,
      officenum: this.officenum,
      mobilenum: this.mobilenum,
      email: this.email
     
    }).present();  
  }

  
  

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad Register2Page');
  }

}
