import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController, NavParams } from 'ionic-angular';
import { AdminstaffPage } from '../adminstaff/adminstaff';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-companies',
  templateUrl: 'companies.html',
})
export class CompaniesPage {

  companies: any;
  name : any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController,
    public fdb: AngularFireDatabase,
    public af: AngularFireAuth, 
    public load: LoadingController) {
  }

/* addItem(){
    let loading=this.load.create({
    duration: 4000});
    loading.present();

    let push ={
     companies: this.companies,
    }

    firebase.database().ref('companies/').push(push);
    this.alertCtrl.create({
      title: 'Successful',
      message: 'You have submitted',
      buttons: [
        {
          text: 'OK',
          handler: data => {
          this.navCtrl.setRoot(AdminstaffPage);
        }
      }
      ]
    }).present();
  }*/

  openStaff(){
    console.log(this.companies);
    this.navCtrl.push(AdminstaffPage,{item:this.companies,name:this.name});
  }

  //buat satu function utk dia pegi page lg satu. tp push dlu

  ionViewDidLoad() {
    this.name = this.navParams.get('name');
    console.log('ionViewDidLoad CompaniesPage');
  }

  logout(){
    this.af.auth.signOut();
    this.navCtrl.setRoot(HomePage);
  }

}
