import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Administrative2Page } from '../administrative2/administrative2';
import * as firebase from 'firebase';



@IonicPage()
@Component({
  selector: 'page-view-admin',
  templateUrl: 'view-admin.html',
})
export class ViewAdminPage {

  userid : any ;
  name : any ;
  staffid : any ;
  username : any ;
  password : any ;
  email : any;

  item:any=[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public fdb:AngularFireDatabase,
    public af: AngularFireAuth,
    public viewCtrl: ViewController,
    public modal: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewAdminPage');
    this.item=this.navParams.get('item');
    this.userid=this.item.id;
    this.name=this.item.name;
    this.staffid=this.item.staffid;
    this.username=this.item.username;
    this.email=this.item.email;
  }

  edit(item){
      console.log(item);
      let abc=this.modal.create(Administrative2Page, {item:item})
         
      abc.onDidDismiss(_=>{
        this.ionViewDidLoad();
      });
    
      abc.present();
  }


  close()
  {
    this.viewCtrl.dismiss();
  }

}
