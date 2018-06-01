import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { RegisterAsPage } from '../register-as/register-as';
import { Staff1Page } from '../staff1/staff1';
import { Staff2Page } from '../staff2/staff2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
/**
 * Generated class for the AdminAstaffPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-astaff',
  templateUrl: 'admin-astaff.html',
})
export class AdminAstaffPage {

  staffs : any = [];
  userid : any ;
  role : any ; 
  

  

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public fdb: AngularFireDatabase,
    public af: AngularFireAuth,
    public modal: ModalController,
    public alertCtrl: AlertController) {

    /*af.authState.subscribe((user)=>{
        this.userid = user.uid;
        fdb.list('/staff/').subscribe((data)=>{ 
          
            for(var a=0; a<data.length; a++){
              this.staffs.length = 0;
              if(data[a].role=="staff"){
                this.staffs.push({
                  name:data[a].name,
                  email:data[a].email
                });
              }
            }
          });
        
      });*/
  
     
  }

  /*openRegisterAsPage(){
    this.navCtrl.push(RegisterAsPage);
  }*/

  openSelected(item){
    console.log(item);
  
  // let abc=this.modal.create(RegisterAsPage, {item:item})
  // abc.onDidDismiss(_=>{
  //   this.ionViewDidLoad();
  // });

  // abc.present();
  this.navCtrl.push(Staff2Page, {item:item});
  }


  openStaff1Page(){
    this.navCtrl.push(Staff1Page);
  }
  

  deleteSelected(data){
   console.log("THE DATA",data);

      let alert = this.alertCtrl.create({
        title: 'Confirm delete',
        message: 'Are you sure to delete?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Delete',
            //role: 'destructive',
            handler: () => {
             this.fdb.object('staff/'+data.id).remove();
            }
          }
        ]
      });
      alert.present();
  }

  ionViewDidLoad() {

    let self = this;
    console.log('ionViewDidLoad AdminAstaffPage');
    this.af.authState.subscribe((user)=>{
      console.log(user);
      // this.userid = user.uid;
      firebase.database().ref('/staff/').on('value',function(snap){
        let values = Object.keys(snap.val()).map(key => snap.val()[key]);
        self.staffs = [];
        self.staffs = values;
        console.log(values);
      });
      // this.fdb.list('/staff/').subscribe((data)=>{
      //     // for(var a=0; a<data.length; a++){
      //     //   this.admins.length = 0;
      //     //   if(data[a].role=="staff"){
      //     //     this.admins.push({
      //     //       name:data[a].name,
      //     //       email:data[a].email
      //     //     });
      //     //     console.log("DATA:",data[a])
      //     //   }
      //     // }
      //     console.log("The Data-->",data);
      //     this.staffs=data;

      //   });

    });

  }

}
