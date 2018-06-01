import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';



@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  workpermitNo: any;
  name: any;
  start: any;
  userid: any;
  progress:any;
  date : any;
  item:any=[];
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public fdb: AngularFireDatabase,
    public af: AngularFireAuth) {
  }

  ionViewDidLoad() {
    let value = this.navParams.get("item");
    this.progress = value.cell;
    this.date = value.date;
    console.log('ionViewDidLoad ProgressPage');
    this.af.authState.subscribe((user)=>{
      this.userid = user.uid;
      console.log(user);
      
    });
  }

}
