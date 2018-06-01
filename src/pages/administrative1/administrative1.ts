import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController, NavParams , ModalController, LoadingController } from 'ionic-angular';
import { AdministrativePage } from '../administrative/administrative';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

/**
 * Generated class for the Administrative1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-administrative1',
  templateUrl: 'administrative1.html',
})
export class Administrative1Page {
userid : any;
name : any;
staffid : any;
username : any;
password : any;
email : any;
isAdmin : "true";

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController, 
    public navParams: NavParams,
    public modal : ModalController,
    public loadingCtrl: LoadingController,
    public fdb: AngularFireDatabase,
    public af: AngularFireAuth) {
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

    let self = this;
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
        role : "admin",
        isAdmin : "true",
      }

      firebase.database().ref('staff/' + this.userid).set(post);
      setTimeout(() => {
        loading.dismiss();
        this.alertCtrl.create({
          title: 'Info',
          message: 'You have successfully registered an administrative!',
          buttons: [
            {
              text: "OK",
              handler: data => {
                // this.navCtrl.setRoot(AdministrativePage);
                this.navCtrl.pop();
              }
            }
          ]
        }).present();
      }, 500);
    }).catch(e=>{
      setTimeout(() => {
        loading.dismiss();
      }, 500);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Administrative1Page');
  }

}
