import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { Register1Page } from '../register1/register1';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

/**
 * Generated class for the AdminContractorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-contractor',
  templateUrl: 'admin-contractor.html',
})
export class AdminContractorPage {
  userid : any ;
  contractors : any = []

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public fdb: AngularFireDatabase,
    public af: AngularFireAuth,
    public alertCtrl: AlertController,
    public modal: ModalController) {
  }

  

  openRegister1Page(){ //add
    this.navCtrl.push(Register1Page);
  }

  openSelected(item){
    console.log(item);
    // let abc=this.modal.create(RegisterPage, {item:item})
    // abc.onDidDismiss(_=>{this.ionViewDidLoad();});
    // abc.present();  
    this.navCtrl.push(RegisterPage,{item:item});
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
            handler: () => {
             this.fdb.object('contractor/'+data.key).remove();
            }
          }
        ]
      });
      alert.present();

  }

  ionViewDidLoad() {
    let self = this;
    console.log('ionViewDidLoad AdminContractorPage');
    firebase.database().ref('/contractor/').on('value',function(snap){
      let values = Object.keys(snap.val()).map(key => snap.val()[key]);
      let keys = Object.keys(snap.val());
      self.contractors = [];
      self.contractors = values;
      for (let i = 0; i < keys.length; i++) {
        self.contractors[i].key = new String();
        self.contractors[i].key = keys[i];
      }
      console.log(values);
    });

    // this.af.authState.subscribe((user)=>{
    //   console.log(user);
    //   this.fdb.list('/contractor/').subscribe((data)=>{
          
    //     console.log("The Data-->",data);
    //     this.contractors=data;

    //     });

    // });
  }

}
