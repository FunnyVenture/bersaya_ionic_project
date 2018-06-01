import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController, NavParams, ViewController, ModalController, LoadingController, ToastController } from 'ionic-angular';
import { Register3Page } from '../register3/register3';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  item:any=[];
  itemid: any;
  compname: any;
  address: any;
  cperson: any;
  officenum: any;
  mobilenum: any;
  email: any;
  editCon = false;
  editBtnTitle = "EDIT";

  constructor(public navCtrl: NavController, 
    public alertCtrl: AlertController, 
    public navParams: NavParams,
    public fdb: AngularFireDatabase,
    public af: AngularFireAuth,
    public loadingCtrl: LoadingController,
    public viewCtrl: ViewController,
    private toastCtrl: ToastController,
    public modal: ModalController) {
  }

  openRegister3Page(){
    this.navCtrl.push(Register3Page);
  }

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
    if (this.editCon == true) {
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

              let loading = this.loadingCtrl.create({
                content: 'Please wait...'
              });
              loading.present();

              this.item.compname=this.compname;
              this.item.address1=this.address;
              this.item.cperson=this.cperson;
              this.item.officenum=this.officenum;
              this.item.mobilenum=this.mobilenum;
              this.item.email=this.email;

              console.log('TEST',this.item);

              firebase.database().ref('contractor/'+this.item.key).update(this.item).then(resp=>{
                setTimeout(() => {
                  loading.dismiss();
                  this.presentToast();
                  this.editCon = false;
                  this.editBtnTitle = "EDIT";
                  // this.navCtrl.pop();
                }, 500);
              },err=>{
                  console.log('error',err);
                  setTimeout(() => {
                    loading.dismiss();
                    this.editCon = true;
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
                this.editCon = true;
                this.editBtnTitle = "SAVE";
              }
            }
          ]
        });
        alert.present();
    }
  }

  /*update(){
    this.item.compname=this.compname;
    this.item.address1=this.address1;
    this.item.address2=this.address2;
    this.item.cperson=this.cperson;
    this.item.officenum=this.officenum;
    this.item.mobilenum=this.mobilenum;
    this.item.email=this.email;

    console.log('TEST',this.item);

      firebase.database().ref('contractor/'+this.item.$key).update(this.item).then(resp=>{
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
    console.log('ionViewDidLoad RegisterPage');
    this.item=this.navParams.get('item');
    this.compname=this.item.compname;
    this.address=this.item.address;
    this.cperson=this.item.cperson;
    this.officenum=this.item.officenum;
    this.mobilenum=this.item.mobilenum;
    this.email=this.item.email;

  }

  close(){
    // this.viewCtrl.dismiss();
  }

}
