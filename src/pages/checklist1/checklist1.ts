import { Component } from '@angular/core';
import { IonicPage,  NavController, LoadingController, ActionSheetController, ToastController, AlertController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { ChecklistPage } from '../checklist/checklist';


@IonicPage()
@Component({
  selector: 'page-checklist1',
  templateUrl: 'checklist1.html',
})
export class Checklist1Page {

  safety = "fail";
  cones = "fail";
  barriers = "fail";
  signage = "fail";
  blinkers = "fail";
  flagman = "fail";
  comment: any;
  captureDataUrl2: string = "";
  workkey : any;
  userid : any;
  imageURI: any;
  images: any = [];
  loader : any;
  progress:any;
 
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams, public af: AngularFireAuth, 
    public loadingCtrl: LoadingController, private toastCtrl: ToastController, public camera: Camera, public action: ActionSheetController) {
    /**this.mypicref=firebase.storage().ref('/')**/
  }

/*  addChecklist1(){
    let loading=this.load.create({
      duration: 4000
    });
    loading.present();

    let push ={
      safety: this.safety,
      cones: this.cones,
      barriers: this.barriers,
      signage: this.signage,
      blinkers: this.blinkers,
      flagman: this.flagman,
      comment: this.comment
    }

    firebase.database().ref('checklist/').push(push);
    this.alertCtrl.create({
      title: 'Successful',
      message: 'You have submitted',
      buttons: [
        {
          text: 'OK',
          handler: data => {
          this.navCtrl.setRoot(ChecklistPage);
          }
      }
      ]
    }).present();
  }*/

  submit(){ //this is only temporary pop-up for UI preview purpose



    let self = this;
    let alert = this.alertCtrl.create({
      title: 'Confirm',
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
              images: self.images,
              safety: self.safety,
              cones: self.cones,
              barriers: self.barriers,
              signage: self.signage,
              blinkers: self.blinkers,
              flagman: self.flagman,
              comment: self.comment,
              date: displayDate,
            }

            let loading = this.loadingCtrl.create({
              content: 'Please wait...'
            });
            loading.present();
            
            firebase.database().ref('checklist/'+this.workkey+'/'+this.userid + '/').push(progress_cell).then(resp=>{
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
    console.log('ionViewDidLoad Checklist1Page');
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

  edit(){

  }

}