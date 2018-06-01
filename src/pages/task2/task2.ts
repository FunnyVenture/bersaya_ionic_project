import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Task3Page } from '../task3/task3';
import { UploadPage } from '../upload/upload';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

/**
 * Generated class for the Task2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task2',
  templateUrl: 'task2.html',
})
export class Task2Page {
  
  item:any=[];
  itemid: any;
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
  consession: any;
  contractor: any;
  contractors:any = []
  company: any;
  email: any;
  

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public fdb: AngularFireDatabase,
    public af: AngularFireAuth,
    public alertCtrl: AlertController) {

    this.start = navParams.get('start');
    this.finish = navParams.get('finish');
    this.workpermitNo = navParams.get('workpermitNo');
    this.desc = navParams.get('desc');
    this.appletter = navParams.get('appletter');
    this.drawing = navParams.get('drawing');
    this.work = navParams.get('work');
    this.statement = navParams.get('statement');
    this.insletter = navParams.get('insletter');
    this.trafficplan = navParams.get('trafficplan');
    this.depo = navParams.get('depo');
    this.charges = navParams.get('charges');
    this.permit = navParams.get('permit');
    this.contractor = "";
    this.consession = "";
    this.email = "";
     
  }

  openTask3Page(){
    this.navCtrl.push(Task3Page);
  }

  openUploadPage(){
    this.navCtrl.push(UploadPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Task2Page');
    this.af.authState.subscribe((user)=>{
      console.log(user);
      this.fdb.list('/contractor/').subscribe((data)=>{
          
        console.log("The Data-->",data);
        this.contractors=data;

        });

    });

    this.item=this.navParams.get('item');
    this.contractor=this.item.contractor;
    this.consession=this.item.charges;
    this.email=this.item.email;

  }

 
}
