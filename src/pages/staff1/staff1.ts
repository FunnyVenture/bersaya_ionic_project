import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { AdminAstaffPage } from '../admin-astaff/admin-astaff';
import * as firebase from 'firebase';

/**
 * Generated class for the Staff1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-staff1',
  templateUrl: 'staff1.html',
})
export class Staff1Page {
 userid : any;
 name : any;
 staffid : any;
 username : any;
 password : any;
 email : any;
 consession = "Besraya";

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController, 
    public navParams: NavParams,
    public fdb: AngularFireDatabase,
    public af: AngularFireAuth,
    public modal: ModalController,
    public loadingCtrl: LoadingController
     ) {
  }
  runTimeChange(event) {
    this.name = String(this.email).split('@')[0];
    this.username = this.name;
    console.log(this.name);
  }

  
 add(){

  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();
  this.af.auth.createUserWithEmailAndPassword(this.email, this.password)
    .then (data  =>{
      this.userid = data.uid;
      console.log(this.userid);

      let post = {
        id: this.userid,
        name : this.name,
        staffid : this.staffid,
        username : this.username,
        password : this.password,
        email : this.email,
        role : "staff",
        isAdmin : "false",
        consession : this.consession,
      }
      let self = this;
      firebase.database().ref('staff/' + this.userid).set(post).then(function(e){
        setTimeout(() => {
          loading.dismiss();
          self.alertCtrl.create({
            title: 'Info',
            message: 'You have successfully registered an staff!',
            buttons: [
              {
                text: "OK",
                handler: data => {
                  // this.navCtrl.setRoot(AdministrativePage);
                  self.navCtrl.pop();
                }
              }
            ]
          }).present();
        }, 500);
      }).catch(e=> {
        setTimeout(() => {
          loading.dismiss();
        }, 500);
      });

      // firebase.database().ref('/workpermit/').on('value',function(snap){
      //   if (snap.val() != null) {
      //     let values = Object.keys(snap.val()).map(key => snap.val()[key]);
      //     let keys = Object.keys(snap.val());
      //     for (let i = 0; i < values.length; i++) {
      //       self.consessions.push(values[i].consession);
      //     }
      //     console.log(values);
      //   }
      // });
  
    }).catch(e=>{
      setTimeout(() => {
        loading.dismiss();
      }, 500);
    })
  

 }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Staff1Page');
  }

}
