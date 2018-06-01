import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { Administrative2Page } from '../administrative2/administrative2';
import { Administrative1Page } from '../administrative1/administrative1';
import { ViewAdminPage } from '../view-admin/view-admin';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
/**
 * Generated class for the AdministrativePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-administrative',
  templateUrl: 'administrative.html',
})
export class AdministrativePage {
  admins : any = [];
  userid : any ;
 
  name : any;
  staffid : any;
  username : any;
  password : any;
  email : any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public modal: ModalController,
    public fdb: AngularFireDatabase,
    public af: AngularFireAuth) {

    // af.authState.subscribe((user)=>{
    //     this.userid = user.uid;
    //     fdb.list('/staff/').subscribe((data)=>{
    //       this.admins=user;
    //       console.log("THIS ADMIN",this.admins);
    //       // this.admins.length = 0;
    //       // for(var a=0; a<data.length; a++){
    //       //   if(data[a].role=="admin"){
    //       //     this.admins.push({
    //       //       name:data[a].name,
    //       //       email:data[a].email
    //       //     });
    //       //   }
    //       // }
    //     });
    //   // }
    // });

    //this.adminss = fdb.list('/staff/');
    /*---------------------------------CODE AZRI------------------------------- */


  /*  af.authState.subscribe(user=>{
      this.userid = user.uid;
      console.log("AngularfireAuth data:"+this.userid);

    fdb.object('staff/'+this.userid).subscribe(data=>{
      this.userid = user.uid;
      console.log("Firebase object:"+this.userid);

    fdb.list('staff/').subscribe(data=> {
      this.admins = data;
      console.log(this.admins)

    })//tutup fdb list
   }); //tutup fdb.object
  })//tutup auth */

  }


  openAdministrative1(){
    this.navCtrl.push(Administrative1Page);
  }


  openSelected(item){
  console.log(item);
    // let abc=this.modal.create(Administrative2Page, {item:item})
    
    // abc.onDidDismiss(_=>{ //idk what for
    //   this.ionViewDidLoad();
    // });

    // abc.present();
    this.navCtrl.push(Administrative2Page,{item:item});
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
    this.af.authState.subscribe((user)=>{
      console.log(user);
      // this.userid = user.uid;
      firebase.database().ref('/staff/').on('value',function(snap){
        let values = Object.keys(snap.val()).map(key => snap.val()[key]);
        self.admins = [];
        self.admins = values;
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
      //     this.admins=data;

      //   });

    });


}





}
