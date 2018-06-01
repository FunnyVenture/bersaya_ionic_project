import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController, NavParams } from 'ionic-angular';
import { Register2Page } from '../register2/register2';
import { Register4Page } from '../register4/register4';

/**
 * Generated class for the Register3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register3',
  templateUrl: 'register3.html',
})
export class Register3Page {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams) {
  }

  openRegister2Page(){
    this.navCtrl.push(Register2Page);
  }

  openRegister4Page(){
    this.navCtrl.push(Register4Page);
  }

  openAlertPage(){
    let alert = this.alertCtrl.create({
      title: 'Confirm Save?',
      cssClass:'alertColor',
      buttons: [
        {
          text: 'Yes',
          role: 'Save',
          
          handler: () => {
            console.log('Save clicked');
    
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
      
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register3Page');
  }

}
