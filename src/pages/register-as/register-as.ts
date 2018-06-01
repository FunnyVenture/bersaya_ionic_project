import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController, NavParams, ViewController } from 'ionic-angular';
import { Staff2Page } from '../staff2/staff2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

/**
 * Generated class for the RegisterAsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-as',
  templateUrl: 'register-as.html',
})
export class RegisterAsPage {

  userid : any ;
  name : any ;
  staffid : any ;
  username : any ;
  password : any ;
  email : any;

  item:any=[];

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,  
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public af: AngularFireAuth,
    public fdb: AngularFireDatabase) {
  }


  confirmEdit() {
    let alert = this.alertCtrl.create({
      title: 'Confirm update',
      message: 'Do you want to update this information?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Edit clicked');
            this.item.name=this.name;
            this.item.username=this.username;
            this.item.staffid=this.staffid;
            this.item.id=this.userid;

            firebase.database().ref('staff/'+this.item.id).update(this.item).then(resp=>{
              console.log('test',resp);
            },err=>{
              console.log('error',err);
            });

          }
        }
      ]
    });
    alert.present();
  }

  

  /*update(){
    // this.userid=this.item.userid;
    // this.name=this.item.name;
    // this.staffid=this.item.staffid;
    // this.username=this.item.username;

    this.item.name=this.name;
    this.item.username=this.username;
    this.item.staffid=this.staffid;
    this.item.id=this.userid;

    console.log('TEST',this.item);

      firebase.database().ref('staff/'+this.item.id).update(this.item).then(resp=>{
        console.log('test',resp);
      },err=>{
        console.log('error',err);
      });

        this.alertCtrl.create({
          title: 'Info',
          message: 'Your data has been successfully updated',
          buttons: [
            {
              text: 'OK',
              handler: data => {
                this.close();
              }
            }
          ]
        }).present();
  }*/
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterAsPage');
    this.item=this.navParams.get('item');
    this.userid=this.item.id;
    this.name=this.item.name;
    this.staffid=this.item.staffid;
    this.username=this.item.username;
    this.password=this.item.password;
    this.email=this.item.email;

  }

  close(){
    this.viewCtrl.dismiss();
  }

}
