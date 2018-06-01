import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
})
export class UpdatePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams) {
  }

  openAlertPage(){
    let alert = this.alertCtrl.create({
      title: 'Confirm Save?',
      message: '',
      cssClass:'alertColor',
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatePage');
  }

}
