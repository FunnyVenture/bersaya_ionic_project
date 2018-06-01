import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Task3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task3',
  templateUrl: 'task3.html',
})
export class Task3Page {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController, public navParams: NavParams) {
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
    console.log('ionViewDidLoad Task3Page');
  }

}
