import { Component } from '@angular/core';
import { IonicPage, NavController,LoadingController,ToastController, AlertController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { Task2Page } from '../task2/task2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

/**
 * Generated class for the Task1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task1',
  templateUrl: 'task1.html',
})
export class Task1Page {
  
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
  itemid: any;
  contractor: any;
  consession: any;
  email: any;
  images : any = [];
  editAdmin = false;
  editBtnTitle = "EDIT";
  
  contractors:any=[];
  item:any=[];
  mindate : any;
  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController, 
    public navParams: NavParams,
    public modal: ModalController,
    public viewCtrl: ViewController,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public fdb: AngularFireDatabase,
    public af: AngularFireAuth) {
      this.mindate =  new Date().toISOString();
    
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Work information was update successfully',
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  confirmEdit() {
    if (this.editAdmin == true) {
      let alert = this.alertCtrl.create({
        title: 'Confirm update',
        message: 'Do you want to update this information?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Yes',
            handler: () => {
              console.log('Edit clicked');
              this.item.start=this.start;
              this.item.finish=this.finish;
              this.item.workpermitNo=this.workpermitNo;
              this.item.desc=this.desc;
              this.item.appletter=this.appletter;
              this.item.drawing=this.drawing;
              this.item.work=this.work;
              this.item.statement=this.statement;
              this.item.insletter=this.insletter;
              this.item.trafficplan=this.trafficplan;
              this.item.depo=this.depo;
              this.item.charges=this.charges;
              this.item.permit=this.permit;
              this.item.contractor=this.contractor;
              this.item.consession=this.consession;
              this.item.email=this.email;
              
              let loading = this.loadingCtrl.create({
                content: 'Please wait...'
              });
              loading.present();
              firebase.database().ref('workpermit/'+this.item.key).update(this.item).then(resp=>{
                console.log('test',resp);
                setTimeout(() => {
                  loading.dismiss();
                  this.presentToast();
                  this.editAdmin = false;
                  this.editBtnTitle = "EDIT";
                  // this.navCtrl.pop();
                }, 500);
              },err=>{
                console.log('error',err);
                setTimeout(() => {
                  loading.dismiss();
                  this.editAdmin = true;
                  this.editBtnTitle = "EDIT";
                  // this.navCtrl.pop();
                }, 500);
              });
  
            }
          }
        ]
      });
      alert.present();
    } else {
      let alert = this.alertCtrl.create({
        title: 'Confirm update',
        message: 'Do you want to edit this information?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Yes',
            handler: () => {
              console.log('Edit clicked');
              this.editAdmin = true;
              this.editBtnTitle = "SAVE";
            }
          }
        ]
      });
      alert.present();
    }
  }

  /*update(){
    this.item.start=this.start;
    this.item.finish=this.finish;
    this.item.workpermitNo=this.workpermitNo;
    this.item.desc=this.desc;
    this.item.appletter=this.appletter;
    this.item.drawing=this.drawing;
    this.item.work=this.work;
    this.item.statement=this.statement;
    this.item.insletter=this.insletter;
    this.item.trafficplan=this.trafficplan;
    this.item.depo=this.depo;
    this.item.charges=this.charges;
    this.item.permit=this.permit;
    this.item.contractor=this.contractor;
    this.item.consession=this.consession;
    this.item.email=this.email;
    
    console.log('TEST',this.item);

      firebase.database().ref('workpermit/'+this.item.$key).update(this.item).then(resp=>{
        console.log('test',resp);
      },err=>{
        console.log('error',err);
      });

        this.alertCtrl.create({
          title: 'Info',
          message: 'Your data has been successfully updated',
          buttons: [
            {
              text: 'OK',
              handler: data => {
                this.close();
              }
            }
          ]
        }).present();
    }*/


  
  ionViewDidLoad() {
    console.log('ionViewDidLoad Task1Page');
    console.log('ionViewDidLoad Task5Page');
    this.af.authState.subscribe((user)=>{
      console.log(user);
      this.fdb.list('/contractor/').subscribe((data)=>{
          
        console.log("The Data-->",data);
        this.contractors=data;

        });

    });




    this.item=this.navParams.get('item');//untuk display kat page task1
    this.start=this.item.start;
    this.finish=this.item.finish;
    this.workpermitNo=this.item.workpermitNo;
    this.desc=this.item.desc;
    this.appletter=this.item.appletter;
    this.drawing=this.item.drawing;
    this.work=this.item.work;
    this.statement=this.item.statement;
    this.insletter=this.item.insletter;
    this.trafficplan=this.item.trafficplan;
    this.depo=this.item.depo;
    this.charges=this.item.charges;
    this.permit=this.item.permit;
    this.consession=this.item.consession;
    this.contractor=this.item.contractor;
    this.email=this.item.email;
    this.images = this.item.images;
  
    
  }

  close(){
    // this.viewCtrl.dismiss();
  }

}
