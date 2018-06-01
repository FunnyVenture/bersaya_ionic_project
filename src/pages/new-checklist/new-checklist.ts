import { Component } from '@angular/core';
import { IonicPage,  NavController, LoadingController, ActionSheetController,ToastController, AlertController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { WorkPermitPage } from '../work-permit/work-permit';

@IonicPage()
@Component({
  selector: 'page-new-checklist',
  templateUrl: 'new-checklist.html',
})
export class NewChecklistPage {

  pavement = "Need Repair";
  landscape = "Need Repair";
  road = "Need Repair";
  cleanliness = "Need Repair";
  others = "Need Repair";
  comment: any;

  workkey : any;
  userid : any;
  imageURI: any;
  images: any = [];
  loader : any;
  progress:any;

  constructor(public af: AngularFireAuth, private toastCtrl: ToastController,public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams, 
    public loadingCtrl: LoadingController, public camera: Camera, public action: ActionSheetController) {
    /**this.mypicref=firebase.storage().ref('/')**/
  }


  submit(){ //this is only temporary pop-up for UI preview purpose



    let self = this;
    let alert = this.alertCtrl.create({
      title: 'Save information',
      message: 'Do you want to save information?',
      buttons: [
        {
          text: 'Yes',
          role: 'Yes',
          
          handler: () => {
            console.log('Yes clicked');
            let displayDate = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
            if (self.comment == null || self.comment == '') {
              self.toastCtrl.create({
                message: 'Please type comment',
                duration: 3000,
                position: 'bottom'
              }).present();
              return;
            }
            
            let progress_cell= {
              pavement : self.pavement,
              landscape  : self.landscape,
              road  : self.road,
              cleanliness  : self.cleanliness,
              others  : self.others,
              comment  : self.comment,
              images : self.images,
              date: displayDate,
            }
            console.log(progress_cell);
            let loading = this.loadingCtrl.create({
              content: 'Please wait...'
            });

            loading.present();
            firebase.database().ref('newchecklist/'+this.workkey+'/'+this.userid + '/').push(progress_cell).then(resp=>{
              console.log('test',resp);
              setTimeout(() => {
                self.comment = "";
                self.images = [];
                loading.dismiss();
                this.presentToast();
                this.navCtrl.pop();
              }, 500);
            },err=>{
              console.log('error',err);
              setTimeout(() => {
                loading.dismiss();
                self.comment = "";
                self.images = [];
                // this.navCtrl.pop();
              }, 500);
            });
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
    console.log('ionViewDidLoad NewChecklistPage');
    this.workkey=this.navParams.get('item');
    this.af.authState.subscribe((user)=>{
      this.userid = user.uid;
    });
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
        setTimeout(() => {
          self.loader.dismiss();
          // this.navCtrl.pop();
        }, 500);
        console.log(err);
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

