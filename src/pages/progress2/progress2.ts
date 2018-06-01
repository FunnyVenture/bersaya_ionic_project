import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the Progress2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-progress2',
  templateUrl: 'progress2.html',
})
export class Progress2Page {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  saveButton(){
    let alert = this.alertCtrl.create({
      title: 'Complete progress',
      message: 'Confirm save progress?',
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
    console.log('ionViewDidLoad Progress2Page');
  }

}
