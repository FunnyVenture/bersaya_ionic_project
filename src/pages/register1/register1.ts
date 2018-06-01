import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController, AlertController, ToastController  } from 'ionic-angular';
/**import { RegisterPage } from '../register/register';*/
import { Register2Page } from '../register2/register2';
import { AdminContractorPage } from '../admin-contractor/admin-contractor';
import { AngularFireDatabase } from 'angularfire2/database';
import { Register4Page } from '../register4/register4';
import { Slides } from 'ionic-angular';
import { ThrowStmt } from '@angular/compiler';
import * as firebase from 'firebase';



/**
 * Generated class for the Register1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register1',
  templateUrl: 'register1.html',
})
export class Register1Page {
  compname: any;
  subcontname: any;
  address: any;
  address_sc: any;
  cperson: any;
  cperson_sc: any;
  officenum: any;
  officenum_sc: any;
  mobilenum: any;
  mobilenum_sc: any;
  email: any;
  email_sc: any;
  pageNumber = 0;
  showSubCom = false;
  @ViewChild(Slides) slides: Slides;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private toastCtrl: ToastController, 
    public modal : ModalController) {
  }

  goToSlide(number) {
    this.pageNumber =  parseInt(number);
    this.slides.slideTo(this.pageNumber, 500);
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    
    console.log(this.showSubCom);
    if (this.showSubCom == false && currentIndex == 2) {
      currentIndex = 1;
    }
    this.pageNumber = currentIndex;
    console.log('Current index is', currentIndex);
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Contractor information was update successfully',
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  presentErrorToast() {
    let toast = this.toastCtrl.create({
      message: 'Contractor information was not update successfully. Please input all values',
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
  

  add(){
    let loading =this.loadingCtrl.create({
      duration: 3000
    });
    loading.present();

    let push = {
      compname : this.compname,
      address : this.address,
      cperson : this.cperson,
      officenum : this.officenum,
      mobilenum : this.mobilenum,
      email : this.email,
      
    }

    firebase.database().ref('contractor/').push(push);
      this.alertCtrl.create({
        title: 'Info',
        message: 'You have successfully registered a contractor!',
        buttons: [
          {
            text: "OK",
            handler: data => {
              this.navCtrl.setRoot(AdminContractorPage);
            }
          }
        ]
    }).present();
  }

  AddData() {
    let alert = this.alertCtrl.create({
      title: 'Confirm register sub contractor',
      message: 'Do you want to register sub contractor?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            let loading = this.loadingCtrl.create({
              content: 'Please wait...'
            });
            loading.present();
            let push = {
              compname : this.compname,
              address : this.address,
              cperson : this.cperson,
              officenum : this.officenum,
              mobilenum : this.mobilenum,
              email : this.email,
            }

            if(typeof(push.compname) == 'undefined' || typeof(push.address) == 'undefined' || typeof(push.cperson) == 'undefined' ||
                  typeof(push.officenum) == 'undefined' || typeof(push.mobilenum) == 'undefined' || typeof(push.mobilenum) == 'undefined') {
                    setTimeout(() => {
                      loading.dismiss();
                      this.presentErrorToast();
                    }, 500);
                    return;
            }
            firebase.database().ref('contractor/').push(push).then(resp=>{
              setTimeout(() => {
                loading.dismiss();
                this.presentToast();
                this.navCtrl.pop();
              }, 500);
            },err=>{
                console.log('error',err);
                setTimeout(() => {
                  loading.dismiss();
                  // this.navCtrl.pop();
                }, 500);
            });
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.showSubCom = true;
            setTimeout(() => {
              this.goToSlide('2');
            }, 500);
          }
        }
      ]
    });
    alert.present();
  }

  AddDataSub() {
    let alert = this.alertCtrl.create({
      title: 'Confirm register sub contractor',
      message: 'Do you want to register sub contractor?',
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
            let push = {
              compname: this.compname,
              subcontname: this.subcontname,
              address: this.address,
              address_sc: this.address_sc,
              cperson: this.cperson,
              cperson_sc: this.cperson_sc,
              officenum: this.officenum,
              officenum_sc: this.officenum_sc,
              mobilenum: this.mobilenum,
              mobilenum_sc: this.mobilenum_sc,
              email: this.email,
              email_sc: this.email_sc
            }
            if(typeof(push.compname) == 'undefined' || typeof(push.subcontname) == 'undefined' || typeof(push.address) == 'undefined' ||
                  typeof(push.address_sc) == 'undefined' || typeof(push.cperson) == 'undefined' || typeof(push.cperson_sc) == 'undefined' ||
                  typeof(push.officenum) == 'undefined' || typeof(push.officenum_sc) == 'undefined' || typeof(push.mobilenum) == 'undefined' ||
                  typeof(push.mobilenum_sc) == 'undefined' || typeof(push.email) == 'undefined' || typeof(push.email_sc) == 'undefined') {
                    setTimeout(() => {
                      loading.dismiss();
                      this.presentErrorToast();
                    }, 500);
                    return;
            }
            firebase.database().ref('contractor/').push(push).then(resp=>{
              setTimeout(() => {
                loading.dismiss();
                this.presentToast();
                this.navCtrl.pop();
              }, 500);
            },err=>{
                console.log('error',err);
                setTimeout(() => {
                  loading.dismiss();
                  // this.navCtrl.pop();
                }, 500);
            });
          }
        }
      ]
    });
    alert.present();
  }

 
  next(){   
  this.modal.create(Register2Page, {
      compname : this.compname,
      address: this.address,
     
     
  }).present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Register1Page');
    
  }

}
