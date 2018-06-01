import { Component } from '@angular/core';
import { IonicPage, NavController,ActionSheetController,AlertController, NavParams, LoadingController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { Task4Page } from '../task4/task4';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the UploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {
  captureDataUrl2: string = "";

  constructor(public navCtrl: NavController,public load: LoadingController, public afauth: AngularFireAuth,public alertCtrl: AlertController,public action: ActionSheetController,public Camera: Camera,  public navParams: NavParams) {
  }

  captureProfile(){
    this.action.create({
      title: "Choose Image Source",
      buttons: [
        {
          text: "Choose From Gallery",
          handler: () => {
            this.takePictureProfile(this.Camera.PictureSourceType.PHOTOLIBRARY);

          }
        },
        {
          text: "Take Picture",
          handler: () => {
            this.takePictureProfile(this.Camera.PictureSourceType.CAMERA);

          }
        }
      ]
    }).present();
  }

  takePictureProfile(img) {
    var options = {
      quality: 100,
      sourceType: img,
      saveToPhotoAlbum: false,
      correctOrientation: true,
      destinationType: this.Camera.DestinationType.DATA_URL,
      encodingType: this.Camera.EncodingType.JPEG,
      mediaType: this.Camera.MediaType.PICTURE,
    }

    this.Camera.getPicture(options).then((image) => {
      this.captureDataUrl2 = 'data:image/jpeg;base64,' + image;
    }, (err) => {
          console.log(err);
    });
  }

  edit(){
    let loading = this.load.create({
      duration: 6000
    });
    
    loading.present();

    this.afauth.authState.subscribe((user) => {

      let storage = firebase.storage().ref();

      const filename = Math.floor(Date.now() / 1000);
      const imageRef = storage.child('images/' + '/' + filename + '.jpg');
      imageRef.putString(this.captureDataUrl2, firebase.storage.StringFormat.DATA_URL).then((data) => {
        let post = {
          profilePhoto: data.downloadURL
        };
        firebase.database().ref().update(post);
        this.alertCtrl.create({
          title: 'Update Successfull',
          message: 'Your Data has been successfully updated',
          buttons: [
            {
              text: 'Ok',
              handler: data => {
                this.navCtrl.setRoot(Task4Page);
              }
            }
          ]
        }).present();
      });
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadPage');
  }

}
