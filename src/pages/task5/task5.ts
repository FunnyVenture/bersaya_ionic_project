import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { TaskPage } from '../task/task';


/**
 * Generated class for the Task5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task5',
  templateUrl: 'task5.html',
})
export class Task5Page {

  id: any;

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
  contractor: any;
  contractors:any = []
  consession: any;
  email: any;
  password: any;
  role: any;
  images: any = [];

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController, 
    public navParams: NavParams,
    public fdb: AngularFireDatabase,
    public af: AngularFireAuth,
    public load: LoadingController) {


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
    this.images = navParams.get('images');
    this.contractor = "";
    this.consession = "";
    this.email = "";
    this.password = "";
   
    this.role="contractor"; 
  }

  register(){
    let loading =this.load.create({
      duration: 4000
    });
    loading.present();

    this.af.auth.createUserWithEmailAndPassword(this.email, this.password)
    .then (data  =>{
      this.id = data.uid;
      console.log(this.id);

      let post = {
        id: this.id,
        start : this.start,
        finish : this.finish,
        workpermitNo : this.workpermitNo,
        desc : this.desc,
        appletter : this.appletter,
        drawing : this.drawing,
        work : this.work,
        statement : this.statement,
        insletter : this.insletter,
        trafficplan : this.trafficplan,
        depo : this.depo,
        charges : this.charges,
        permit : "true",
        contractor : this.contractor,
        consession : this.consession,
        email : this.email,
        password : this.password,
        role : "contractor",
        images : this.images,
        progress: [],
        checklist: [],
      }

      if  (typeof(post.appletter) == 'undefined') {
        post.appletter = false;
      }
      if  (typeof(post.drawing) == 'undefined') {
        post.drawing = false;
      }
      if  (typeof(post.work) == 'undefined') {
        post.work = false;
      }if  (typeof(post.statement) == 'undefined') {
        post.statement = false;
      }
      if  (typeof(post.insletter) == 'undefined') {
        post.insletter = false;
      }
      if  (typeof(post.trafficplan) == 'undefined') {
        post.trafficplan = false;
      }
      if  (typeof(post.depo) == 'undefined') {
        post.depo = false;
      }
      if  (typeof(post.charges) == 'undefined') {
        post.charges = false;
      }

      firebase.database().ref('staff/'+this.id).set(post);
      firebase.database().ref('workpermit/'+this.id).set(post);
      this.navCtrl.pop();
     
      this.alertCtrl.create({
        title: 'Info',
        message: 'You have successfully registered a work permit!',
        buttons: [
          {
            text: "OK",
            handler: data => {
              this.navCtrl.pop();
              
            }
          }
        ]
      }).present();
  
    })  
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad Task5Page');
    this.af.authState.subscribe((user)=>{
      console.log(user);
      this.fdb.list('/contractor/').subscribe((data)=>{
          
        console.log("The Data-->",data);
        this.contractors=data;

        });

    });


  }

}
