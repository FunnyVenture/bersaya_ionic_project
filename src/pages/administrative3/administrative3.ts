import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController,LoadingController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

import * as firebase from 'firebase';
import { AdminPage } from '../admin/admin';


/**
 * Generated class for the Administrative3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-administrative3',
  templateUrl: 'administrative3.html',
})
export class Administrative3Page {
name : any;
staffid : any;
username : any;
password : any;
email : any;
name1 : any;
staffid1 : any;
username1 : any;
password1 : any;
email1 : any;

  constructor(public navCtrl: NavController,public alertCtrl: AlertController, public navParams: NavParams, public fdb : AngularFireDatabase, public load: LoadingController) {
  }


  add(){
    let loading = this.load.create({

      duration: 4000
    });
    loading.present();

      let push ={
        name : this.name,
        staffid : this.staffid,
        username : this.username,
        password : this.password,
        email : this.email,
        name1 : this.name1,
        staffid1 : this.staffid1,
        username1 : this.username1,
        password1 : this.password1,
        email1 : this.email
      }

      firebase.database().ref('staff/').push(push);
      this.alertCtrl.create({
        title: 'Confirm Save?',
        message: 'You have successfully edit . Redirect To Home',
        buttons: [
          {
            text: 'OK',
            handler: data => {
              this.navCtrl.setRoot(AdminPage);
            }
          }
        ]
      }).present();
      

  }


 /** openAlertPage(){
    let alert = this.alertCtrl.create({
      title: 'Confirm Delete?',
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
  }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad Administrative3Page');
  }

}
