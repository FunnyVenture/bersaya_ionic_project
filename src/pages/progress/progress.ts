import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Progress2Page } from '../progress2/progress2';
import { UpdatePage } from '../update/update';
import { ContractorPage } from '../contractor/contractor';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Camera, CameraOptions } from '@ionic-native/camera';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-progress',
  templateUrl: 'progress.html',
})
export class ProgressPage {

  workpermitNo: any;
  name: any;
  start: any;
  userid: any;
  id:any;
  progress:any = [];
  progressText : any;
  item:any=[];
  imageURI: any;
  images: any = [];
  loader : any;

  

 

  constructor(public navCtrl: NavController, 
    public alertCtrl: AlertController, 
    public navParams: NavParams,
    public fdb: AngularFireDatabase,
    public af: AngularFireAuth,
    private camera: Camera,
    private toastCtrl: ToastController,
    public loadingCtrl: LoadingController,) {
     
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

  openAlert(){
      
    let self = this;
    let alert_close = this.alertCtrl.create({
      title: 'Add progress',
      message: 'Confirm Save?',
      buttons: [
        {
          text: 'Yes',
          role: 'Yes',
          
          handler: () => {
            self.progress = [];
            let progress_cell= {
              text: self.progressText,
              images: self.images,
            }
            self.progress.push(progress_cell);
            console.log('Yes clicked');

            let displayDate = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
            let submit_cell= {
              cell: self.progress,
              date: displayDate,
            }
            let loading = this.loadingCtrl.create({
              content: 'Please wait...'
            });
            loading.present();
            firebase.database().ref('workprogress/'+'/'+this.userid + '/').push(submit_cell).then(resp=>{
              console.log('test',resp);
              setTimeout(() => {
                this.presentToast();
                this.navCtrl.pop();
                loading.dismiss();
              }, 500);
            },err=>{
              console.log('error',err);
              setTimeout(() => {
                loading.dismiss();
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
    alert_close.present();

  //   let self = this;
  //   let alert = this.alertCtrl.create({
  //     title: 'Add progress',
  //     message: 'Do you want to add more progress?',
  //     buttons: [
  //       {
  //         text: 'Yes',
  //         role: 'Yes',
          
  //         handler: () => {
  //           console.log('Yes clicked');
  //           let progress_cell= {
  //             text: self.progressText,
  //             images: self.images,
  //           }
  //           self.progress.push(progress_cell);
  //           self.images = [];
  //           self.progressText = [];
  //         }
  //       },
  //       {
  //         text: 'No',
  //         handler: () => {
            
  //           let alert_close = this.alertCtrl.create({
  //             title: 'Add progress',
  //             message: 'Confirm Save?',
  //             buttons: [
  //               {
  //                 text: 'Yes',
  //                 role: 'Yes',
                  
  //                 handler: () => {
  //                   console.log('Yes clicked');
  //                   let displayDate = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
  //                   let submit_cell= {
  //                     cell: self.progress,
  //                     date: displayDate,
  //                   }
  //                   let loading = this.loadingCtrl.create({
  //                     content: 'Please wait...'
  //                   });
  //                   loading.present();
  //                   firebase.database().ref('workprogress/'+'/'+this.userid + '/').push(submit_cell).then(resp=>{
  //                     console.log('test',resp);
  //                     setTimeout(() => {
  //                       this.presentToast();
  //                       this.navCtrl.pop();
  //                       loading.dismiss();
  //                     }, 500);
  //                   },err=>{
  //                     console.log('error',err);
  //                     setTimeout(() => {
  //                       loading.dismiss();
  //                     }, 500);
  //                   });

  //                 }
  //               },
  //               {
  //                 text: 'No',
  //                 handler: () => {
  //                   console.log('No clicked');
  //                 }
  //               }
  //             ]
              
  //           });
  //           alert_close.present();

  //         }
  //       }
  //     ]
      
  //   });
  //   alert.present();
  }

  /*openProgress2Page(){
    this.navCtrl.push(Progress2Page);
  }*/

  openUpdatePage(){
    this.navCtrl.push(UpdatePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgressPage');
    this.af.authState.subscribe((user)=>{
      this.userid = user.uid;
      console.log(user);
      let self = this;
      // firebase.database().ref('workpermit/' + this.userid).on('value',function(snap){
      //   let value = Object.keys(snap.val()).map(key => snap.val()[key]);
      //   let keys = Object.keys(snap.val());
      //   // let data = Object.value(snap.val());
      //   let data = {
      //     id: "",
      //     start : "",
      //     finish : "",
      //     workpermitNo : "",
      //     desc : "",
      //     appletter : "",
      //     drawing : "",
      //     work : "",
      //     statement : "",
      //     insletter : "",
      //     trafficplan : "",
      //     depo : "",
      //     charges : "",
      //     permit : "true",
      //     contractor : "",
      //     consession : "",
      //     email : "",
      //     password : "",
      //     role : "",
      //     progress: [],
      //   }
      //   for (let i = 0; i <  keys.length; i++) {
      //     data[keys[i]] = value[i];
      //   }
      //   self.item = data;
        
      //   console.log("The Data-->",data);
      //   self.start = data.start;
      //   self.workpermitNo = data.workpermitNo;
      //   self.progress = data.progress;
      // });
    });

    //this.item=this.navParams.get('item');//untuk display kat page progress
    //this.id=this.item.id;
  }

}
