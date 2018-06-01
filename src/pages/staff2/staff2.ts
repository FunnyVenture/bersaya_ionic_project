

import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController, LoadingController, NavParams,ViewController,ToastController  } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AdministrativePage } from '../administrative/administrative';
import * as firebase from 'firebase';



/**
 * Generated class for the Administrative2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-staff2',
  templateUrl: 'staff2.html',
})
export class Staff2Page {
 userid : any ;
 name : any ;
 staffid : any ;
 username : any ;
 password : any ;
 email : any;
 editAdmin = false;
 editBtnTitle = "EDIT";
 consession : any;

 item:any=[];

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public fdb : AngularFireDatabase,
    public af: AngularFireAuth,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private viewCtrl:ViewController,
    private toastCtrl: ToastController
  ) {}

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'User information was update successfully',
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
  
  confirmEdit() {
    if (this.editAdmin == true) {
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
              this.item.consession=this.consession;
              
              let loading = this.loadingCtrl.create({
                content: 'Please wait...'
              });
              loading.present();
              firebase.database().ref('staff/'+this.item.id).update(this.item).then(resp=>{
                console.log('test',resp);
                setTimeout(() => {
                  loading.dismiss();
                  this.presentToast();
                  this.editAdmin = false;
                  this.editBtnTitle = "EDIT";
                  // this.navCtrl.pop();
                }, 500);
              },err=>{
                console.log('error',err);
                setTimeout(() => {
                  loading.dismiss();
                  this.editAdmin = true;
                  this.editBtnTitle = "EDIT";
                  // this.navCtrl.pop();
                }, 500);
              });
  
            }
          }
        ]
      });
      alert.present();
    } else {
      let alert = this.alertCtrl.create({
        title: 'Confirm update',
        message: 'Do you want to edit this information?',
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
              this.editAdmin = true;
              this.editBtnTitle = "SAVE";
            }
          }
        ]
      });
      alert.present();
    }
    
  }
  
 
  ionViewDidLoad() {
    this.item=this.navParams.get('item');
    this.userid=this.item.id;
    this.name=this.item.name;
    this.staffid=this.item.staffid;
    this.username=this.item.username;
    this.email=this.item.email;
    this.password=this.item.password;
    this.consession = this.item.consession;

  }

  close()
  {
    // this.viewCtrl.dismiss();
  }

}
