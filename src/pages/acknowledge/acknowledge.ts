import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import * as firebase from 'firebase';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';

/**
 * Generated class for the AcknowledgePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acknowledge',
  templateUrl: 'acknowledge.html',
})
export class AcknowledgePage {
  agree: any;
  disp : any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public af: AngularFireAuth,
    public viewCtrl: ViewController) {
  }
  workpermit: any =[];
  userid : any;
  ionViewDidLoad() {
    this.workpermit = this.navParams.get('workpermit');
    this.userid = this.navParams.get('userid');
    this.disp = this.navParams.get('disp');
    console.log('ionViewDidLoad AcknowledgePage');
  }

  PressAgree () {
    if (this.agree == true) {
      let datecurrent = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
      this.workpermit.agree = new String();
      this.workpermit.agree = "true";
      this.workpermit.agreeDate = new String();
      this.workpermit.agreeDate = datecurrent;
      firebase.database().ref('workpermit/'+this.userid).update(this.workpermit).then(a=>{
        this.viewCtrl.dismiss();
        this.toastCtrl.create({
          message: "You agreed Appendix " + datecurrent,
          duration: 5000
        }).present();
      })
      
    } else {
      this.toastCtrl.create({
        message: "Please agree Appendix",
        duration: 5000
      }).present();
    }
  }
  NoPressAgree () {
    this.af.auth.signOut();
    this.navCtrl.setRoot(HomePage);
  }

  close()
  {
    this.viewCtrl.dismiss();
  }

}
