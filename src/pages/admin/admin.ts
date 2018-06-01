import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { AdminContractorPage } from '../admin-contractor/admin-contractor';
import { AdminAstaffPage } from '../admin-astaff/admin-astaff';
import { AdministrativePage } from '../administrative/administrative';
import { TaskPage } from '../task/task';
import { HomePage } from '../home/home';

/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public fdb: AngularFireDatabase,
    public af: AngularFireAuth) {
  }



  openTask(){
    this.navCtrl.push(TaskPage);
  }

  openAdminContractor(){
    this.navCtrl.push(AdminContractorPage);
  }

  openAdminAstaff(){
    this.navCtrl.push(AdminAstaffPage);
  }

  openAdministrative(){
    this.navCtrl.push(AdministrativePage);
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
    this.af.authState.subscribe((user)=>{
      console.log(user);
    });
  }

  logout(){
    this.af.auth.signOut();
    this.navCtrl.setRoot(HomePage);
  }

}
