import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WorkTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-work-task',
  templateUrl: 'work-task.html',
})
export class WorkTaskPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  safety = "fail";
  cones = "fail";
  barriers = "fail";
  signage = "fail";
  blinkers = "fail";
  flagman = "fail";
  comment: any;
  images: any = [];
  date = "";
  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkTaskPage');
    this.safety=this.navParams.get('safety');
    this.cones=this.navParams.get('cones');
    this.barriers=this.navParams.get('barriers');
    this.signage=this.navParams.get('signage');
    this.blinkers=this.navParams.get('blinkers');
    this.flagman=this.navParams.get('flagman');
    this.comment=this.navParams.get('comment');
    this.images=this.navParams.get('images');
    this.date=this.navParams.get('date');
  }

}
