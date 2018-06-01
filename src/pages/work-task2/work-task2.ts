import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WorkTask2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-work-task2',
  templateUrl: 'work-task2.html',
})
export class WorkTask2Page {
  pavement = "Need Repair";
  landscape = "Need Repair";
  road = "Need Repair";
  cleanliness = "Need Repair";
  others = "Need Repair";
  comment: any;
  images: any = [];
  date = "";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkTask2Page');
    this.pavement=this.navParams.get('pavement');
    this.landscape=this.navParams.get('landscape');
    this.road=this.navParams.get('road');
    this.cleanliness=this.navParams.get('cleanliness');
    this.others=this.navParams.get('others');
    this.comment=this.navParams.get('comment');
    this.images=this.navParams.get('images');
    this.date=this.navParams.get('date');
  }

}
