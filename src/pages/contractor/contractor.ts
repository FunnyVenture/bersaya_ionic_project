import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams,LoadingController, ModalController, ViewController, ToastController, Platform } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { HomePage } from '../home/home';
import { ProgressPage } from '../progress/progress';
import { AcknowledgePage } from '../acknowledge/acknowledge';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
// import { EmailComposer } from '@ionic-native/email-composer';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-contractor',
  templateUrl: 'contractor.html',
})
export class ContractorPage {
  workpermitNo: any;
  name: any;
  start: any;
  userid: any;
  progress: any = [];
  desc: any;
  workpermit : any = [];
  contract : any;
  company : any = [];
  companyemail :any;
  constructor(public navCtrl: NavController, 
    public alertCtrl: AlertController, 
    public navParams: NavParams,
    public modal: ModalController,
    public viewCtrl: ViewController,
    public fdb: AngularFireDatabase,
    public loadingCtrl: LoadingController,
    // public emailComposer: EmailComposer,
    public toastCtrl: ToastController,
    public platform : Platform,
    public af: AngularFireAuth) {
  }

  openInfoPage(index) {
    this.navCtrl.push(InfoPage,{item:this.progress[index]});
  }


  openProgressPage(item){
    console.log(item);
    // let abc=this.modal.create(ProgressPage, {
    //  item:item    
    // })

    // abc.onDidDismiss(_=>{
    //   this.ionViewDidLoad();
    // });
    // abc.present(); 
    this.navCtrl.push(ProgressPage, {
      item:item    
     });
  }

  openAppendixPage(){
    let append = this.modal.create(AcknowledgePage,{workpermit:this.workpermit,userid:this.userid,disp:"false"});
    append.present();
  }
  openAppendixPageShow(){
    let append = this.modal.create(AcknowledgePage,{workpermit:this.workpermit,userid:this.userid,disp:"true"});
    append.present();
  }

  ionViewDidLoad() {
    let self =this;
    this.platform.ready().then(function(ready){
      
      console.log('ionViewDidLoad ContractorPage');
      self.af.authState.subscribe((user)=>{
        self.userid = user.uid;
        console.log(user);
        let loading = self.loadingCtrl.create({
          content: 'Please wait...'
        });
        loading.present();

        firebase.database().ref('contractor/').on('value',function(snap){
          if (snap.val() != null) {
            let value = Object.keys(snap.val()).map(key => snap.val()[key]);
            let keys = Object.keys(snap.val());
            self.company = value;
            for (let m = 0; m < self.company.length; m++) {
              if (String(self.company[m].compname).toUpperCase == String(self.workpermit.contractor).toUpperCase ) {
                self.companyemail = self.company[m].email;
              }
            }
            console.log(self.companyemail);
            console.log(value);
          }
        });

        firebase.database().ref('workprogress/'+'/'+self.userid + '/').on('value',function(snap){
          if (snap.val() != null) {
            let value = Object.keys(snap.val()).map(key => snap.val()[key]);
            let keys = Object.keys(snap.val());
            self.progress = value;
            console.log(value);
          }
          setTimeout(() => {
            loading.dismiss();
          }, 500);
        });
        self.fdb.object('workpermit/'+self.userid).subscribe(data=>{
            console.log("The Data-->",data);
            self.start = data.start;
            self.name = data.name;
            self.workpermitNo = data.workpermitNo;
            self.desc = data.desc;
            self.workpermit = data;
            self.contract = data.email;
            self.contract = String(self.contract).split('@')[0];
  
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            let upper1 = "";
            let upper2 = "";
            if (month < 10) {
              upper1 = "0"
            }
            if (day < 10) {
              upper2 = "0"
            }
            
            let string_date = year.toString() + "-" + upper1 + month.toString() + "-" +  upper2 + day.toString();
            let finished_day = String(data.finish).split('T')[0];
            if (string_date > finished_day) {
              let alert = self.alertCtrl.create({
                title: 'Close Work Permit',
                message: 'Expired Data is passed',
                buttons: [
                  {
                    text: 'OK',
                    role: 'ok',
                    handler: () => {
                      self.af.auth.signOut();
                      self.navCtrl.setRoot(HomePage);
                    }
                  }
                ]
                
              });
              alert.present();
            } else {
              if (typeof(data.finished) != undefined && data.finished == "true") {
                let alert = self.alertCtrl.create({
                  title: 'Close Work Permit',
                  message: 'Work is closed',
                  buttons: [
                    {
                      text: 'OK',
                      role: 'ok',
                      handler: () => {
                        self.af.auth.signOut();
                        self.navCtrl.setRoot(HomePage);
                      }
                    }
                  ]
                  
                });
                alert.present();
              }  else {
                if (typeof(data.agree) != undefined && data.agree == "true") {
  
                } else {
                  self.openAppendixPage();
                }
                
              }
            }
            
          });
      });
    })
  }

  submit(){
    let self = this;
    this.platform.ready().then(function(ready){
      let imagearray = [];
      let alert = self.alertCtrl.create({
        title: 'Close Work Permit',
        message: 'Consessionare will be notify and the works status cannot be undo.',
        buttons: [
          {
            text: 'Yes',
            role: '',          
            handler: () => {
              console.log('Yes clicked');
              self.workpermit.finished = new String();
              self.workpermit.finished = "true";
              console.log("start")
              try {
                let html: any;
                if (self.progress != null) {
                  html = "<div align='center'>";
                  for(let i = 0; i < self.progress.length; i++ ) {
                    let htmlcell : any;
                    
                    let cell = self.progress[i].cell[0];
                    htmlcell = "<div align='center'>";
                    htmlcell += '<h4> Report In ' + self.progress[i].date +'</h4>'
                    if (typeof(cell.text) != 'undefined') {
                      htmlcell += '<h6>' + cell.text + ' ' + '</h6>'
                    }
                    if (typeof(cell.images) != 'undefined') {
                      let image_count = 0;
                       for (let k = 0; k < cell.images.length; k++) {
                          let imagecell = cell.images[k];
                          imagearray.push(imagecell);
                          // htmlcell += '<img src="' + imagecell + '"/>';
                          image_count ++;
                      }
                      htmlcell += '<h6> (' + image_count + ' images are attached.)</h6>'
                    }

                    htmlcell += "</div>";
                    html += htmlcell;
                  }
                }

                
                console.log(html);
                html += "<div align='center'>";
                html += "<br></br>";
                html += "<br></br>";
                html += "<h2> Thank you.</h2>";
                // html += '<img src="https://firebasestorage.googleapis.com/v0/b/besraya-ca9e2.appspot.com/o/warning-sign-3D-person.jpg?alt=media&token=896cc875-df2a-4473-96a8-e0581820d69a" />';
                html += "<h4> TPaDS Team. </h4>";
                html += "<h6> This is a computer generated letter and no signature is required. Please do not reply to this message. </h6>";
                html += "</div>";
                

                (<any>window).cordova.plugins.email.isAvailable(
                  function (isAvailable) {
                    console.log("available: "+ isAvailable)
                  
                    if(isAvailable == true) {
                      console.log("available")
                      self.fdb.list('/staff/').subscribe((data)=>{
                        let emails = [];
                        for(let i = 0; i < data.length; i++){
                          if(data[i].role=="staff" && self.workpermit.consession == data[i].consession) {
                            emails.push(data[i].email);
                          }
                        }
                        emails.push(self.workpermit.email);
                        emails.push(self.companyemail);
                        console.log(emails);
                          let emailname = String(self.workpermit.email).split('@')[0];
                            console.log(emailname)
                          let email = {
                            to: emails,
                            subject: 'Job is finished',
                            cc: null,
                            bcc: null,
                            attachments: imagearray,
                            body: "<div align='center' ><h2> WorkPermitNo :  " + self.workpermit.workpermitNo + " is finished by " + emailname + "</h2>" + html + "</div>" ,
                            isHtml: true
                          };
                         
                          console.log(email.body);
                          // Send a text message using default options
                          (<any>window).cordova.plugins.email.open(email);
                        firebase.database().ref('workpermit/'+self.userid).update(self.workpermit).then(a=>{
    
                        })
                        self.af.auth.signOut();
                        self.navCtrl.setRoot(HomePage);
                      });
                    }
                  }
              );
              } catch (error) {
                console.log("allerr " + error);
              }
            }
          },
          {
            text: 'No',
            handler: () => {
              console.log('No clicked');
            }
          }
        ]
        
      });
      alert.present();
    })
  }

  logout(){
    this.af.auth.signOut();
    this.navCtrl.setRoot(HomePage);
  }


}
