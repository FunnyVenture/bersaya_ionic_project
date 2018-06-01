import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
import { AdminPage } from '../admin/admin';
import { AdminstaffPage } from '../adminstaff/adminstaff';
import { ContractorPage } from '../contractor/contractor';
import { CompaniesPage } from '../companies/companies';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

///import * as firebase from 'firebase';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //@ViewChild('useremail') useremail;
  //@ViewChild('password') password;

  useremail : any;
  password : any;

  role : any;

    constructor(public navCtrl: NavController, 
    public fdb : AngularFireDatabase, 
    public af: AngularFireAuth,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController) {

  }

  openAdminPage() {
  this.navCtrl.push(AdminPage);
  }

  openCompaniesPage(){
    this.navCtrl.push(CompaniesPage);
  }
  
  openContractorPage(){
    this.navCtrl.push(ContractorPage);

  }

    login(){
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
    
      loading.present();
    this.af.auth.signInWithEmailAndPassword(this.useremail, this.password)
    .then( data =>{
    console.log(data.uid);
    setTimeout(() => {
      loading.dismiss();
    }, 500);
    this.fdb.object('staff/'+data.uid).subscribe(user=>{
    
        if (user.role == "admin"){
          this.navCtrl.setRoot(AdminPage);
          console.log("ID",user)

        }else if(user.role == "staff"){
          let name = user.email;
          name = String(name).split('@')[0];
          this.navCtrl.setRoot(CompaniesPage,{name:name});
          console.log("ID"+user.role)

        }else if(user.role == "contractor"){
          this.navCtrl.setRoot(ContractorPage);
          console.log("ID"+user.role)

        }else{
        (err) =>{
        console.log(err);
        this.toastCtrl.create({
        message: "Wrong email or password",
        duration: 5000
        }).present();
        this.navCtrl.setRoot(HomePage);
            
        }
        }//tutup else
        
      });//object tutup
    
    }).catch(e=>{
      setTimeout(() => {
        loading.dismiss();
      }, 500);
    })
  
  }
  /*
  login(){
    this.af.auth.signInWithEmailAndPassword(this.useremail,this.password).then(data=>{
      console.log(data);
      this.fdb.object('staff/'+data.uid).subscribe(user=>{
        if (user.isAdmin == true) {
          this.navCtrl.setRoot(AdminPage);
        } else if (user.isAdmin == false) {
          this.navCtrl.setRoot(CompaniesPage);
        }
      })
      
    })
  }*/
}
  
    


