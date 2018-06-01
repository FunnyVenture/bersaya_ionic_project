import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController, AlertController } from 'ionic-angular';
import { Task1Page } from '../task1/task1';
import { Task4Page } from '../task4/task4';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
/**
 * Generated class for the TaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage {
  works: any;
  

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public fdb: AngularFireDatabase,
    public af: AngularFireAuth,
    public modal:ModalController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {
  }

  openSelected(item){
    
    console.log(item);

    if (item.finished == "true") {
      let alert = this.alertCtrl.create({
        title: 'Confirm Edit',
        message: 'Are you sure to edit finished workpermit?',
        buttons: [
          {
            text: 'No',
            role: 'no',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Yes',
            handler: () => {
              this.navCtrl.push(Task1Page,{item:item});
            }
          }
        ]
      });
      alert.present();
    } else {
      this.navCtrl.push(Task1Page,{item:item});
    }
     
    // let abc=this.modal.create(Task1Page, {
    //  item:item    
    // })

    // abc.onDidDismiss(_=>{
    //   this.ionViewDidLoad();
    // });
    // abc.present();
    
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
             this.fdb.object('workpermit/'+data.key).remove();
            }
          }
        ]
      });
      alert.present();

  }

  openTask4Page() {
    this.navCtrl.push(Task4Page);
  }

  ionViewDidLoad() {

    let self = this;
    console.log('ionViewDidLoad TaskPage');
    this.af.authState.subscribe((user)=>{
      console.log(user);
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loading.present();
      firebase.database().ref('/workpermit/').on('value',function(snap){
        let values = Object.keys(snap.val()).map(key => snap.val()[key]);
        let keys = Object.keys(snap.val());
        self.works = [];
        self.works = values;
        for (let i = 0; i < keys.length; i++) {
          self.works[i].key = new String();
          self.works[i].key = keys[i];
          self.works[i].finshString = new String();
          if (typeof(self.works[i].finished) != 'undefined' && self.works[i].finished == "true") {
            self.works[i].finshString = "[Finished]";
          } else {
            self.works[i].finshString = "";
          }
        }
        setTimeout(() => {
          loading.dismiss();
          // this.navCtrl.pop();
        }, 500);
        console.log(values);
      },err =>{
        console.log(err);
        setTimeout(() => {
          loading.dismiss();
          // this.navCtrl.pop();
        }, 500);
      });
      
      // this.fdb.list('/workpermit/').subscribe((data)=>{
      //     console.log("The Data-->",data);
      //     this.works=data;

      //   });

    });

  }

}
