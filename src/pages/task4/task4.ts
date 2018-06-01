import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, AlertController, ToastController, ActionSheetController, ModalController } from 'ionic-angular';
import { Task5Page } from '../task5/task5';
import { UploadPage } from '../upload/upload';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the Task4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task4',
  templateUrl: 'task4.html',
})
export class Task4Page {
  start: any;
  finish: any;
  workpermitNo: any;
  desc: any;
  appletter: boolean;
  drawing: boolean;
  work: boolean;
  statement: boolean;
  insletter: boolean;
  trafficplan: boolean; //yg ni yg kena upload something
  depo: boolean;
  charges: boolean;
  permit: boolean;

  imageURI: any;
  images: any = [];
  loader : any;
  mindate: any;
  maxdate: any;

  constructor(public navCtrl: NavController, 
   public navParams: NavParams,
   public fdb: AngularFireDatabase,
   public af: AngularFireDatabase,
   public alertCtrl: AlertController,
   private toastCtrl: ToastController,
   public action: ActionSheetController,
   public loadingCtrl: LoadingController,
   public camera: Camera,
   public modal: ModalController) {

    // let date = new Date();
    // let year = date.getFullYear();
    // let month = date.getMonth() + 1;
    // let str_month: any;
    // if (month < 10) {
    //   str_month = String('0') + String(month);
    // }
    // var ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    // let day = date.getDate();
    this.mindate =  new Date().toISOString();
    
  }

  openTask5Page(){
  //   this.modal.create(Task5Page, {
  //     start : this.start,
  //     finish: this.finish,
  //     workpermitNo: this.workpermitNo,
  //     desc: this.desc,
  //     appletter: this.appletter,
  //     drawing: this.drawing,
  //     work: this.work,
  //     statement: this.statement,
  //     insletter: this.insletter,
  //     trafficplan: this.trafficplan,
  //     depo: this.depo,
  //     charges: this.charges,
  //     permit: this.permit,
     
  // }).present(); 

  this.navCtrl.push(Task5Page, {
    start : this.start,
    finish: this.finish,
    workpermitNo: this.workpermitNo,
    desc: this.desc,
    appletter: this.appletter,
    drawing: this.drawing,
    work: this.work,
    statement: this.statement,
    insletter: this.insletter,
    trafficplan: this.trafficplan,
    depo: this.depo,
    charges: this.charges,
    permit: this.permit,
    images: this.images,
    });
  }

  openUploadPage(){
    this.navCtrl.push(UploadPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Task4Page');
    
  }


  captureProfile() {
    this.action.create({
      title: " Choose Image Source",
      buttons: [
        {
          text: "Choose From Gallery",
          handler: () => {
            this.AddImagefromGallery("");
          }
        },
        {
          text: "Take Picture",
          handler: () => {
            this.AddImagefromCamera("");
          }
        }
      ]
    }).present();
  }

    resizeImage(url, width, height) {
      var sourceImage = new Image();
      let self = this;
      sourceImage.onload = function() {
          // Create a canvas with the desired dimensions
          var canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;

          // Scale and draw the source image to the canvas
          canvas.getContext("2d").drawImage(sourceImage, 0, 0, width, height);

          // Convert the canvas to a data URL in PNG format
          self.imageURI = canvas.toDataURL();
          self.images.push(self.imageURI);
          setTimeout(() => {
            self.loader.dismiss();
            // this.navCtrl.pop();
          }, 500);
          console.log(self.images)
      }

      sourceImage.src = url;
    }

    AddImagefromGallery (event) {
      let self = this;
        var options: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.PNG,
          mediaType: this.camera.MediaType.PICTURE,
          sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        }
        self.loader = this.loadingCtrl.create({
          content: 'Please wait...',
        });
        self.loader.present();
        this.camera.getPicture(options).then((imageData) => {
          self.resizeImage('data:image/png;base64,' + imageData,256,216);
        }, (err) => {
          console.log(err);
          setTimeout(() => {
            self.loader.dismiss();
            // this.navCtrl.pop();
          }, 500);
        });
    }
    AddImagefromCamera(event) {
        let self = this;
        var options: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.PNG,
          mediaType: this.camera.MediaType.PICTURE,
        }
        self.loader = this.loadingCtrl.create({
          content: 'Please wait...',
        });
        self.loader.present();
        this.camera.getPicture(options).then((imageData) => {
          self.resizeImage('data:image/png;base64,' + imageData,256,216);
        }, (err) => {
          setTimeout(() => {
            self.loader.dismiss();
            // this.navCtrl.pop();
          }, 500);
          console.log(err);
        });
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

}
