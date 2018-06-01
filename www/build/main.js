webpackJsonp([43],{

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcknowledgePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AcknowledgePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AcknowledgePage = (function () {
    function AcknowledgePage(navCtrl, navParams, toastCtrl, af, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.af = af;
        this.viewCtrl = viewCtrl;
        this.workpermit = [];
    }
    AcknowledgePage.prototype.ionViewDidLoad = function () {
        this.workpermit = this.navParams.get('workpermit');
        this.userid = this.navParams.get('userid');
        this.disp = this.navParams.get('disp');
        console.log('ionViewDidLoad AcknowledgePage');
    };
    AcknowledgePage.prototype.PressAgree = function () {
        var _this = this;
        if (this.agree == true) {
            var datecurrent_1 = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
            this.workpermit.agree = new String();
            this.workpermit.agree = "true";
            this.workpermit.agreeDate = new String();
            this.workpermit.agreeDate = datecurrent_1;
            __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('workpermit/' + this.userid).update(this.workpermit).then(function (a) {
                _this.viewCtrl.dismiss();
                _this.toastCtrl.create({
                    message: "You agreed Appendix " + datecurrent_1,
                    duration: 5000
                }).present();
            });
        }
        else {
            this.toastCtrl.create({
                message: "Please agree Appendix",
                duration: 5000
            }).present();
        }
    };
    AcknowledgePage.prototype.NoPressAgree = function () {
        this.af.auth.signOut();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    AcknowledgePage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    AcknowledgePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-acknowledge',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/acknowledge/acknowledge.html"*/'\n<ion-header>\n\n    <ion-navbar color="turquoise">\n    \n    <ion-title> APPENDIX </ion-title>\n    <ion-buttons end>\n      <button *ngIf = "disp == \'true\'" ion-button (click)="close()" >CLOSE</button>\n    </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content>\n    <ion-card>\n        <ion-card-header class="ion-card-header" style="background-color: #e7e7e7">\n          <h2 class="h2" style="color: black">Appendix 1</h2>\n        </ion-card-header>\n        \n      <ion-card-content class="ion-card-content">\n          <p>\n              1, This Work permit is valid only for the type of works as described in this form. For other type of works, separate application must be made..\n          </p>\n          <p>\n              2, This work permit is valid only for the date and time mentioned. For works outside the permitted date and time,separate application must be made.\n          </p>\n          <p>\n              3, This application(s) shall comply to all tracffic safety requirements as proposed in the drawings/sketch\n          </p>\n          <p>\n              4, BESRAYA is to conduct site inspection before, during as and when required and after the completion of the said works.\n          </p>\n          <p>\n              5, You are to take all the necessary precautionary measures to ensure that accidents do not occur. You are fully responsible and liable for any accident which may occur due to your work.  \n          </p>\n          <p>\n              6, You are to comply with any other conditions which we may so imposed should that need arises in the course of carrying out the said works.\n          </p>\n          <p>\n              7, BESRAYA reserves the right to withdraw this work permit and order the termination of the said works at any time.\n          </p>\n          <p>\n              8, A Deposit of RM1,000.00 in Bank Draft or company\'s cheque under BESRAYA (M) SDN BHD is required. The original Work Permit shall be returrned back within 1 week after the works completed. Failure which the deposit will be forfeited.\n          </p>\n          <p>\n              9, Any change in contractors, third party must notify to BESRAYA.\n          </p>\n\n          <ion-item *ngIf = "disp == \'false\'" item-end style="width: 220px;margin-left: calc(100% - 220px); background-color: #e7e7e7">\n              <ion-label>Read and Understand</ion-label>\n              <ion-checkbox [(ngModel)]="agree" item-end></ion-checkbox>\n          </ion-item>\n\n      </ion-card-content>  \n\n    </ion-card>\n\n    <br>\n\n    <ion-card>\n        <ion-card-header class="ion-card-header" style="background-color: #e7e7e7">\n          <h2 class="h2" style="color: black">Acknowledge</h2>\n        </ion-card-header>\n        \n        <ion-card-content class="ion-card-content">\n          <p>\n            We understand that in the course of carrying out the works, safety precautions must be observed at all times. We will comply with all conditions, as listed in Appendix 1, imposed upon us during the execution of works. if we faill to do so, BESRAYA reserves the right to stop our works immediatelly.\n          </p>\n\n        <div *ngIf = "disp == \'false\'" text-center>\n          <button ion-button color="turquoise" (click) = "PressAgree()" >Yes, I Agree</button>\n          <button ion-button color="danger" (click) = "NoPressAgree()" >Not Agree</button>\n        </div>\n        </ion-card-content>\n\n        \n        \n    </ion-card>\n      \n\n</ion-content>\n'/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/acknowledge/acknowledge.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* ViewController */]])
    ], AcknowledgePage);
    return AcknowledgePage;
}());

//# sourceMappingURL=acknowledge.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register3_register3__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, alertCtrl, navParams, fdb, af, loadingCtrl, viewCtrl, toastCtrl, modal) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.fdb = fdb;
        this.af = af;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.modal = modal;
        this.item = [];
        this.editCon = false;
        this.editBtnTitle = "EDIT";
    }
    RegisterPage.prototype.openRegister3Page = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register3_register3__["a" /* Register3Page */]);
    };
    RegisterPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'User information was update successfully',
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    RegisterPage.prototype.confirmEdit = function () {
        var _this = this;
        if (this.editCon == true) {
            var alert_1 = this.alertCtrl.create({
                title: 'Confirm update',
                message: 'Do you want to update this information?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Yes',
                        handler: function () {
                            var loading = _this.loadingCtrl.create({
                                content: 'Please wait...'
                            });
                            loading.present();
                            _this.item.compname = _this.compname;
                            _this.item.address1 = _this.address;
                            _this.item.cperson = _this.cperson;
                            _this.item.officenum = _this.officenum;
                            _this.item.mobilenum = _this.mobilenum;
                            _this.item.email = _this.email;
                            console.log('TEST', _this.item);
                            __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref('contractor/' + _this.item.key).update(_this.item).then(function (resp) {
                                setTimeout(function () {
                                    loading.dismiss();
                                    _this.presentToast();
                                    _this.editCon = false;
                                    _this.editBtnTitle = "EDIT";
                                    // this.navCtrl.pop();
                                }, 500);
                            }, function (err) {
                                console.log('error', err);
                                setTimeout(function () {
                                    loading.dismiss();
                                    _this.editCon = true;
                                    _this.editBtnTitle = "EDIT";
                                    // this.navCtrl.pop();
                                }, 500);
                            });
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: 'Confirm update',
                message: 'Do you want to edit this information?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Yes',
                        handler: function () {
                            console.log('Edit clicked');
                            _this.editCon = true;
                            _this.editBtnTitle = "SAVE";
                        }
                    }
                ]
            });
            alert_2.present();
        }
    };
    /*update(){
      this.item.compname=this.compname;
      this.item.address1=this.address1;
      this.item.address2=this.address2;
      this.item.cperson=this.cperson;
      this.item.officenum=this.officenum;
      this.item.mobilenum=this.mobilenum;
      this.item.email=this.email;
  
      console.log('TEST',this.item);
  
        firebase.database().ref('contractor/'+this.item.$key).update(this.item).then(resp=>{
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
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
        this.item = this.navParams.get('item');
        this.compname = this.item.compname;
        this.address = this.item.address;
        this.cperson = this.item.cperson;
        this.officenum = this.item.officenum;
        this.mobilenum = this.item.mobilenum;
        this.email = this.item.email;
    };
    RegisterPage.prototype.close = function () {
        // this.viewCtrl.dismiss();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="turquoise">\n    <ion-title>Update Contractor</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="background">  \n    <ion-card class = "style">\n        <ion-card-content>\n        Company\n         <ion-item>\n         <ion-input [(ngModel)]="compname" type="text" disabled = "{{!editCon}}"></ion-input>\n         </ion-item>\n      \n        Address\n        <ion-item>\n          <ion-textarea rows="4" cols="60" type="text" [(ngModel)]="address" placeholder="Full address..." disabled = "{{!editCon}}"></ion-textarea>\n        </ion-item>\n       \n        Contact Person\n        <ion-item>\n          <ion-input [(ngModel)]="cperson" type="text" disabled = "{{!editCon}}"></ion-input>\n        </ion-item>\n\n        Telephone Office\n        <ion-item>\n          <ion-input [(ngModel)]="officenum" type="text" disabled = "{{!editCon}}"></ion-input>\n        </ion-item>\n\n        Telephone Mobile\n        <ion-item>\n          <ion-input [(ngModel)]="mobilenum" type="text" disabled = "{{!editCon}}"></ion-input>\n        </ion-item>\n\n        Email\n        <ion-item>\n          <ion-input [(ngModel)]="email" type="email" disabled = "{{!editCon}}" ></ion-input>\n        </ion-item>\n      \n        </ion-card-content>\n      </ion-card>\n      \n      <div text-right>\n        <!-- <button (click)="close()" color="turquoise" ion-button>CLOSE</button> -->\n        <button (click)="confirmEdit()" color="turquoise" ion-button>{{editBtnTitle}}</button>\n      </div>\n      \n\n\n<!--<ion-list>\n  \n  \n  <ion-item>\n      <ion-input style="background-color:gainsboro" type="text" placeholder="Phone Number (Office)"></ion-input>\n  </ion-item>\n\n  <ion-item>\n      <ion-input style="background-color:gainsboro" type="text" placeholder="Phone Number (Mobile)"></ion-input>\n  </ion-item>\n\n  <ion-item>\n      <ion-input style="background-color:gainsboro" type="text" placeholder="Phone Number (Mobile)"></ion-input>\n  </ion-item>\n\n  <ion-item>\n      <ion-input style="background-color:gainsboro" type="email" placeholder="Email"></ion-input>\n  </ion-item>\n</ion-list>\n-->\n    \n</ion-content>\n'/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register2_register2__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register4_register4__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the Register3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Register3Page = (function () {
    function Register3Page(navCtrl, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
    }
    Register3Page.prototype.openRegister2Page = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register2_register2__["a" /* Register2Page */]);
    };
    Register3Page.prototype.openRegister4Page = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register4_register4__["a" /* Register4Page */]);
    };
    Register3Page.prototype.openAlertPage = function () {
        var alert = this.alertCtrl.create({
            title: 'Confirm Save?',
            cssClass: 'alertColor',
            buttons: [
                {
                    text: 'Yes',
                    role: 'Save',
                    handler: function () {
                        console.log('Save clicked');
                    }
                },
                {
                    text: 'No',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    Register3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Register3Page');
    };
    Register3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register3',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/register3/register3.html"*/'<!--\n  Generated template for the Register3Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n--><!--\n  Generated template for the Register1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="turquoise">\n      <ion-title>Register Contractor</ion-title>\n  \n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content class="background" no-padding>  \n  <ion-card>\n    <ion-input style="background-color:gainsboro" type="text" placeholder="Company"></ion-input>\n  </ion-card>  \n    \n  <ion-card>\n    <ion-input style="background-color:gainsboro" type="text" placeholder="Address"></ion-input>\n  </ion-card>\n  \n  <ion-card>\n    <ion-input style="background-color:gainsboro" type="number" placeholder="Contact Person"></ion-input>\n  </ion-card>\n  \n  <ion-card>\n    <ion-input style="background-color:gainsboro" type="text" placeholder="Phone Number (Office)"></ion-input>\n  </ion-card>\n  \n  <ion-card>\n    <ion-input style="background-color:gainsboro" type="text" placeholder="Phone Number (Mobile)"></ion-input>\n  </ion-card>\n  \n  <ion-card>\n    <ion-input style="background-color:gainsboro" type="email" placeholder="Email"></ion-input>\n  </ion-card>\n      \n        <div text-right>\n            <button (click)="openAlertPage()" color="turquoise" ion-button>SAVE</button>\n        </div>\n         \n  </ion-content>\n\n'/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/register3/register3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], Register3Page);
    return Register3Page;
}());

//# sourceMappingURL=register3.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_contractor_admin_contractor__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the Register5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Register5Page = (function () {
    function Register5Page(navCtrl, alertCtrl, navParams, load, fdb) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.load = load;
        this.fdb = fdb;
        this.compname = navParams.get('compname');
        this.subcontname = navParams.get('subcontname');
        this.address = navParams.get('address');
        this.address_sc = navParams.get('address_sc');
        this.cperson = navParams.get('cperson');
        this.cperson_sc = "";
        this.officenum = navParams.get('officenum');
        this.officenum_sc = "";
        this.mobilenum = navParams.get('mobilenum');
        this.mobilenum_sc = "";
        this.email = navParams.get('email');
        this.email_sc = "";
    }
    Register5Page.prototype.add = function () {
        var _this = this;
        var loading = this.load.create({ duration: 4000 });
        loading.present();
        var push = {
            compname: this.compname,
            subcontname: this.subcontname,
            address: this.address,
            address_sc: this.address_sc,
            cperson: this.cperson,
            cperson_sc: this.cperson_sc,
            officenum: this.officenum,
            officenum_sc: this.officenum_sc,
            mobilenum: this.mobilenum,
            mobilenum_sc: this.mobilenum_sc,
            email: this.email,
            email_sc: this.email_sc
        };
        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('contractor/').push(push);
        this.alertCtrl.create({
            title: 'Info',
            message: 'You have successfully registered a contractor!',
            buttons: [
                {
                    text: "OK",
                    handler: function (data) {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__admin_contractor_admin_contractor__["a" /* AdminContractorPage */]);
                    }
                }
            ]
        }).present();
    };
    Register5Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Register5Page');
    };
    Register5Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register5',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/register5/register5.html"*/'<!--\n  Generated template for the Register5Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="turquoise">\n      <ion-title>Register Sub-Contractor</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n  <ion-card class = "style" >\n    <ion-card-content>\n      Contact Person\n      <ion-item>\n      <ion-input [(ngModel)]="cperson_sc" type="text" ></ion-input>\n     </ion-item>\n     \n      Telephone Office\n     <ion-item>\n      <ion-input [(ngModel)]="officenum_sc" type="text" ></ion-input>\n    </ion-item>\n    \n      Telephone Mobile\n      <ion-item>\n        <ion-input [(ngModel)]="mobilenum_sc" type="text" ></ion-input>\n      </ion-item>\n       \n      Email\n      <ion-item>\n        <ion-input [(ngModel)]="email_sc" type="email" ></ion-input>\n      </ion-item>\n    \n    </ion-card-content>\n  </ion-card>\n  \n  <div text-center>\n      <button > \n          <ion-icon (click)="openRegister4Page()"  name="arrow-back"> </ion-icon>\n        </button> \n       \n      <button > \n          <ion-icon name="radio-button-off"> </ion-icon>\n        </button>\n  \n      <button >\n          <ion-icon name="radio-button-on"></ion-icon>\n        </button>\n        \n        <button (click)="add()" color="turquoise" ion-button>REGISTER</button>\n  \n    </div>\n  </ion-content>\n  '/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/register5/register5.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], Register5Page);
    return Register5Page;
}());

//# sourceMappingURL=register5.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAstaffPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff1_staff1__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__staff2_staff2__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the AdminAstaffPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminAstaffPage = (function () {
    function AdminAstaffPage(navCtrl, navParams, fdb, af, modal, alertCtrl) {
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
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fdb = fdb;
        this.af = af;
        this.modal = modal;
        this.alertCtrl = alertCtrl;
        this.staffs = [];
    }
    /*openRegisterAsPage(){
      this.navCtrl.push(RegisterAsPage);
    }*/
    AdminAstaffPage.prototype.openSelected = function (item) {
        console.log(item);
        // let abc=this.modal.create(RegisterAsPage, {item:item})
        // abc.onDidDismiss(_=>{
        //   this.ionViewDidLoad();
        // });
        // abc.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__staff2_staff2__["a" /* Staff2Page */], { item: item });
    };
    AdminAstaffPage.prototype.openStaff1Page = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__staff1_staff1__["a" /* Staff1Page */]);
    };
    AdminAstaffPage.prototype.deleteSelected = function (data) {
        var _this = this;
        console.log("THE DATA", data);
        var alert = this.alertCtrl.create({
            title: 'Confirm delete',
            message: 'Are you sure to delete?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Delete',
                    //role: 'destructive',
                    handler: function () {
                        _this.fdb.object('staff/' + data.id).remove();
                    }
                }
            ]
        });
        alert.present();
    };
    AdminAstaffPage.prototype.ionViewDidLoad = function () {
        var self = this;
        console.log('ionViewDidLoad AdminAstaffPage');
        this.af.authState.subscribe(function (user) {
            console.log(user);
            // this.userid = user.uid;
            __WEBPACK_IMPORTED_MODULE_6_firebase__["database"]().ref('/staff/').on('value', function (snap) {
                var values = Object.keys(snap.val()).map(function (key) { return snap.val()[key]; });
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
    };
    AdminAstaffPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-astaff',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/admin-astaff/admin-astaff.html"*/'<!--\n  Generated template for the AdminContractorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="turquoise">\n     <ion-title>Staff</ion-title>\n    <!-- <img src="./assets/imgs/imagess.png" style="width:100%;"/>  \n    -->\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="background" no-padding>\n  <ion-card>\n    <ion-card-header text-center class="ion-card-header">\n    Staff List \n    </ion-card-header>\n\n    <ion-list>\n    <div *ngFor ="let staff of staffs">\n      <ion-item *ngIf=\'staff.role=="staff"\'>\n        <p (click)="openSelected(staff)">{{staff.name}}, {{staff.email}}</p>\n        <button ion-button color="dark" item-end (click)="deleteSelected(staff)">X</button>  \n      </ion-item>\n    </div>\n    </ion-list>\n\n  </ion-card>\n  \n  <div text-right>\n    New Staff\n  <button class="ion-icon"> \n    <ion-icon name="add-circle" (click)="openStaff1Page()"> </ion-icon>\n  </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/admin-astaff/admin-astaff.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AdminAstaffPage);
    return AdminAstaffPage;
}());

//# sourceMappingURL=admin-astaff.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Staff1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the Staff1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Staff1Page = (function () {
    function Staff1Page(navCtrl, alertCtrl, navParams, fdb, af, modal, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.fdb = fdb;
        this.af = af;
        this.modal = modal;
        this.loadingCtrl = loadingCtrl;
        this.consession = "Besraya";
    }
    Staff1Page.prototype.runTimeChange = function (event) {
        this.name = String(this.email).split('@')[0];
        this.username = this.name;
        console.log(this.name);
    };
    Staff1Page.prototype.add = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.af.auth.createUserWithEmailAndPassword(this.email, this.password)
            .then(function (data) {
            _this.userid = data.uid;
            console.log(_this.userid);
            var post = {
                id: _this.userid,
                name: _this.name,
                staffid: _this.staffid,
                username: _this.username,
                password: _this.password,
                email: _this.email,
                role: "staff",
                isAdmin: "false",
                consession: _this.consession,
            };
            var self = _this;
            __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('staff/' + _this.userid).set(post).then(function (e) {
                setTimeout(function () {
                    loading.dismiss();
                    self.alertCtrl.create({
                        title: 'Info',
                        message: 'You have successfully registered an staff!',
                        buttons: [
                            {
                                text: "OK",
                                handler: function (data) {
                                    // this.navCtrl.setRoot(AdministrativePage);
                                    self.navCtrl.pop();
                                }
                            }
                        ]
                    }).present();
                }, 500);
            }).catch(function (e) {
                setTimeout(function () {
                    loading.dismiss();
                }, 500);
            });
            // firebase.database().ref('/workpermit/').on('value',function(snap){
            //   if (snap.val() != null) {
            //     let values = Object.keys(snap.val()).map(key => snap.val()[key]);
            //     let keys = Object.keys(snap.val());
            //     for (let i = 0; i < values.length; i++) {
            //       self.consessions.push(values[i].consession);
            //     }
            //     console.log(values);
            //   }
            // });
        }).catch(function (e) {
            setTimeout(function () {
                loading.dismiss();
            }, 500);
        });
    };
    Staff1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Staff1Page');
    };
    Staff1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-staff1',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/staff1/staff1.html"*/'<!--\n  Generated template for the Staff1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="turquoise">\n    <ion-title>Register Staff</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card class = "style" >\n        <ion-card-content>\n\n        Email:\n          <ion-item>\n            <ion-input [(ngModel)]="email" type="email" (input)="runTimeChange($event)" ></ion-input>\n          </ion-item>\n\n        Password :\n          <ion-item>\n            <ion-input [(ngModel)]="password" type="password" ></ion-input>\n          </ion-item>\n\n        Name :\n        <ion-item>\n        <ion-input disabled = "true" [(ngModel)]="name" type="text" ></ion-input>\n        </ion-item>\n    \n        Staff ID :\n        <ion-item>\n        <ion-input [(ngModel)]="staffid" type="text" ></ion-input>\n        </ion-item>\n\n        Consession :\n        <ion-item>\n          <ion-select [(ngModel)]="consession">\n            <ion-option>Besraya</ion-option>\n            <ion-option>Lekas</ion-option>\n            <ion-option>NPE</ion-option>\n          </ion-select>\n        </ion-item>\n      \n        <!-- Username :\n        <ion-item>\n        <ion-input [(ngModel)]="username" type="text" ></ion-input>\n        </ion-item> -->\n      \n        \n\n        \n    \n          \n        </ion-card-content>\n      </ion-card>\n\n      <div text-right>\n          <div text-right>\n              <button (click)="add()" color="turquoise" ion-button>REGISTER</button>\n          </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/staff1/staff1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], Staff1Page);
    return Staff1Page;
}());

//# sourceMappingURL=staff1.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Staff2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the Administrative2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Staff2Page = (function () {
    function Staff2Page(navCtrl, alertCtrl, fdb, af, navParams, loadingCtrl, viewCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.fdb = fdb;
        this.af = af;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.editAdmin = false;
        this.editBtnTitle = "EDIT";
        this.item = [];
    }
    Staff2Page.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'User information was update successfully',
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    Staff2Page.prototype.confirmEdit = function () {
        var _this = this;
        if (this.editAdmin == true) {
            var alert_1 = this.alertCtrl.create({
                title: 'Confirm update',
                message: 'Do you want to update this information?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Yes',
                        handler: function () {
                            console.log('Edit clicked');
                            _this.item.name = _this.name;
                            _this.item.username = _this.username;
                            _this.item.staffid = _this.staffid;
                            _this.item.id = _this.userid;
                            _this.item.consession = _this.consession;
                            var loading = _this.loadingCtrl.create({
                                content: 'Please wait...'
                            });
                            loading.present();
                            __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('staff/' + _this.item.id).update(_this.item).then(function (resp) {
                                console.log('test', resp);
                                setTimeout(function () {
                                    loading.dismiss();
                                    _this.presentToast();
                                    _this.editAdmin = false;
                                    _this.editBtnTitle = "EDIT";
                                    // this.navCtrl.pop();
                                }, 500);
                            }, function (err) {
                                console.log('error', err);
                                setTimeout(function () {
                                    loading.dismiss();
                                    _this.editAdmin = true;
                                    _this.editBtnTitle = "EDIT";
                                    // this.navCtrl.pop();
                                }, 500);
                            });
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: 'Confirm update',
                message: 'Do you want to edit this information?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Yes',
                        handler: function () {
                            console.log('Edit clicked');
                            _this.editAdmin = true;
                            _this.editBtnTitle = "SAVE";
                        }
                    }
                ]
            });
            alert_2.present();
        }
    };
    Staff2Page.prototype.ionViewDidLoad = function () {
        this.item = this.navParams.get('item');
        this.userid = this.item.id;
        this.name = this.item.name;
        this.staffid = this.item.staffid;
        this.username = this.item.username;
        this.email = this.item.email;
        this.password = this.item.password;
        this.consession = this.item.consession;
    };
    Staff2Page.prototype.close = function () {
        // this.viewCtrl.dismiss();
    };
    Staff2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-staff2',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/staff2/staff2.html"*/'<!--\n  Generated template for the Staff2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="turquoise">\n    <ion-title>Staff 1</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card class = "style" >\n        <ion-card-content>\n          Email\n          <ion-item>\n            <ion-input [(ngModel)]="email" type="email" [disabled]="true"></ion-input>\n          </ion-item>\n\n          Password\n          <ion-item>\n            <ion-input [(ngModel)]="password" type="password" [disabled]="true"></ion-input>\n          </ion-item>\n\n          Name\n          <ion-item>\n          <ion-input [(ngModel)]="name" type="text" disabled = "true"></ion-input>\n         </ion-item>\n      \n          Staff ID\n         <ion-item>\n          <ion-input  [(ngModel)]="staffid" type="text" disabled = "{{!editAdmin}}"></ion-input>\n        </ion-item>\n\n        Consession :\n        <ion-item>\n          <ion-select disabled = "{{!editAdmin}}"  [(ngModel)]="consession">\n            <ion-option>Besraya</ion-option>\n            <ion-option>Lekas</ion-option>\n            <ion-option>NPE</ion-option>\n          </ion-select>\n        </ion-item>\n      \n        <!-- Username\n          <ion-item>\n          <ion-input [(ngModel)]="username" type="text" disabled = "{{!editAdmin}}"></ion-input>\n        </ion-item>\n       -->\n        \n      \n        \n      \n        </ion-card-content>\n      </ion-card>\n\n      <div text-right>\n          <div text-right>\n              <button (click)="confirmEdit()" color="turquoise" ion-button> {{editBtnTitle}}</button>\n          </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/staff2/staff2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], Staff2Page);
    return Staff2Page;
}());

//# sourceMappingURL=staff2.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdministrativePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__administrative2_administrative2__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__administrative1_administrative1__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the AdministrativePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdministrativePage = (function () {
    function AdministrativePage(navCtrl, navParams, alertCtrl, modal, fdb, af) {
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
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.modal = modal;
        this.fdb = fdb;
        this.af = af;
        this.admins = [];
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
    AdministrativePage.prototype.openAdministrative1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__administrative1_administrative1__["a" /* Administrative1Page */]);
    };
    AdministrativePage.prototype.openSelected = function (item) {
        console.log(item);
        // let abc=this.modal.create(Administrative2Page, {item:item})
        // abc.onDidDismiss(_=>{ //idk what for
        //   this.ionViewDidLoad();
        // });
        // abc.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__administrative2_administrative2__["a" /* Administrative2Page */], { item: item });
    };
    AdministrativePage.prototype.deleteSelected = function (data) {
        var _this = this;
        console.log("THE DATA", data);
        var alert = this.alertCtrl.create({
            title: 'Confirm delete',
            message: 'Are you sure to delete?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Delete',
                    //role: 'destructive',
                    handler: function () {
                        _this.fdb.object('staff/' + data.id).remove();
                    }
                }
            ]
        });
        alert.present();
    };
    AdministrativePage.prototype.ionViewDidLoad = function () {
        var self = this;
        this.af.authState.subscribe(function (user) {
            console.log(user);
            // this.userid = user.uid;
            __WEBPACK_IMPORTED_MODULE_6_firebase__["database"]().ref('/staff/').on('value', function (snap) {
                var values = Object.keys(snap.val()).map(function (key) { return snap.val()[key]; });
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
    };
    AdministrativePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-administrative',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/administrative/administrative.html"*/'<!--\n  Generated template for the AdministrativePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="turquoise">\n    <ion-title> Administrative</ion-title>\n\n   <!-- <img src="./assets/imgs/imagess.png" style="width:100%;"/>\n   -->\n </ion-navbar>\n\n</ion-header>\n\n<ion-content class="background" no-padding>\n   <ion-card>\n   <ion-card-header text-center class="ion-card-header">\n   Administrative List\n   </ion-card-header>\n\n   <ion-list>\n     <div *ngFor ="let admin of admins">\n     <ion-item *ngIf=\'admin.role=="admin"\'>\n     \n       <p (click)="openSelected(admin)">{{admin.name}}, {{admin.email}}</p>\n       <button ion-button color="dark" item-end (click)="deleteSelected(admin)">X</button>\n       \n     </ion-item>\n   </div>\n   </ion-list>\n   \n   </ion-card>\n\n   <div text-right>\n    New Administrative\n   <button class="ion-icon">\n     <ion-icon name="add-circle" (click)="openAdministrative1()" > </ion-icon>\n   </button>\n   </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/administrative/administrative.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AdministrativePage);
    return AdministrativePage;
}());

//# sourceMappingURL=administrative.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Administrative1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the Administrative1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Administrative1Page = (function () {
    function Administrative1Page(navCtrl, alertCtrl, navParams, modal, loadingCtrl, fdb, af) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.loadingCtrl = loadingCtrl;
        this.fdb = fdb;
        this.af = af;
    }
    Administrative1Page.prototype.runTimeChange = function (event) {
        this.name = String(this.email).split('@')[0];
        this.username = this.name;
        console.log(this.name);
    };
    Administrative1Page.prototype.add = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var self = this;
        this.af.auth.createUserWithEmailAndPassword(this.email, this.password)
            .then(function (data) {
            _this.userid = data.uid;
            console.log(_this.userid);
            var post = {
                id: _this.userid,
                name: _this.name,
                staffid: _this.staffid,
                username: _this.username,
                password: _this.password,
                email: _this.email,
                role: "admin",
                isAdmin: "true",
            };
            __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('staff/' + _this.userid).set(post);
            setTimeout(function () {
                loading.dismiss();
                _this.alertCtrl.create({
                    title: 'Info',
                    message: 'You have successfully registered an administrative!',
                    buttons: [
                        {
                            text: "OK",
                            handler: function (data) {
                                // this.navCtrl.setRoot(AdministrativePage);
                                _this.navCtrl.pop();
                            }
                        }
                    ]
                }).present();
            }, 500);
        }).catch(function (e) {
            setTimeout(function () {
                loading.dismiss();
            }, 500);
        });
    };
    Administrative1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Administrative1Page');
    };
    Administrative1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-administrative1',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/administrative1/administrative1.html"*/'<!--\n  Generated template for the Administrative1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="turquoise">  \n    <ion-title>Register Administrative</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-card class="style" >\n    <ion-card-content>\n      Email\n        <ion-item>\n          <ion-input [(ngModel)]="email" type="email" (input)="runTimeChange($event)" ></ion-input>\n        </ion-item>\n\n      Password\n        <ion-item>\n          <ion-input [(ngModel)]="password" type="password" ></ion-input>  \n        </ion-item>\n\n      Name\n        <ion-item>\n        <ion-input disabled = "true" [(ngModel)]="name" type="text" ></ion-input>\n       </ion-item>\n      \n      Staff ID\n       <ion-item>\n        <ion-input  [(ngModel)]="staffid" type="text" ></ion-input>\n      </ion-item>\n     \n      <!-- Username\n        <ion-item>\n        <ion-input [(ngModel)]="username" type="text" ></ion-input>\n      </ion-item>\n     -->\n      \n    \n      \n        \n      </ion-card-content>\n    </ion-card>\n\n<div text-right>\n  <button (click)="add()" color="turquoise" ion-button>REGISTER</button>\n  \n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/administrative1/administrative1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], Administrative1Page);
    return Administrative1Page;
}());

//# sourceMappingURL=administrative1.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task1_task1__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task4_task4__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the TaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TaskPage = (function () {
    function TaskPage(navCtrl, navParams, fdb, af, modal, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fdb = fdb;
        this.af = af;
        this.modal = modal;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    TaskPage.prototype.openSelected = function (item) {
        var _this = this;
        console.log(item);
        if (item.finished == "true") {
            var alert_1 = this.alertCtrl.create({
                title: 'Confirm Edit',
                message: 'Are you sure to edit finished workpermit?',
                buttons: [
                    {
                        text: 'No',
                        role: 'no',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Yes',
                        handler: function () {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__task1_task1__["a" /* Task1Page */], { item: item });
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__task1_task1__["a" /* Task1Page */], { item: item });
        }
        // let abc=this.modal.create(Task1Page, {
        //  item:item    
        // })
        // abc.onDidDismiss(_=>{
        //   this.ionViewDidLoad();
        // });
        // abc.present();
    };
    TaskPage.prototype.deleteSelected = function (data) {
        var _this = this;
        console.log("THE DATA", data);
        var alert = this.alertCtrl.create({
            title: 'Confirm delete',
            message: 'Are you sure to delete?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.fdb.object('workpermit/' + data.key).remove();
                    }
                }
            ]
        });
        alert.present();
    };
    TaskPage.prototype.openTask4Page = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__task4_task4__["a" /* Task4Page */]);
    };
    TaskPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var self = this;
        console.log('ionViewDidLoad TaskPage');
        this.af.authState.subscribe(function (user) {
            console.log(user);
            var loading = _this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading.present();
            __WEBPACK_IMPORTED_MODULE_6_firebase__["database"]().ref('/workpermit/').on('value', function (snap) {
                var values = Object.keys(snap.val()).map(function (key) { return snap.val()[key]; });
                var keys = Object.keys(snap.val());
                self.works = [];
                self.works = values;
                for (var i = 0; i < keys.length; i++) {
                    self.works[i].key = new String();
                    self.works[i].key = keys[i];
                    self.works[i].finshString = new String();
                    if (typeof (self.works[i].finished) != 'undefined' && self.works[i].finished == "true") {
                        self.works[i].finshString = "[Finished]";
                    }
                    else {
                        self.works[i].finshString = "";
                    }
                }
                setTimeout(function () {
                    loading.dismiss();
                    // this.navCtrl.pop();
                }, 500);
                console.log(values);
            }, function (err) {
                console.log(err);
                setTimeout(function () {
                    loading.dismiss();
                    // this.navCtrl.pop();
                }, 500);
            });
            // this.fdb.list('/workpermit/').subscribe((data)=>{
            //     console.log("The Data-->",data);
            //     this.works=data;
            //   });
        });
    };
    TaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-task',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/task/task.html"*/'<!--\n  Generated template for the TaskPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="turquoise">\n    <ion-title>Work Permit</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="background" no-padding>\n    <ion-card>\n      <ion-card-header text-center class="ion-card-header">Work Permit List</ion-card-header>\n         \n      <ion-list>\n      <div >\n        <ion-item *ngFor ="let work of works; let i = index;">\n          <p (click)="openSelected(work)"><b>Consession:</b> {{work.consession}} | {{work.workpermitNo}}  {{work.finshString}} </p>\n          <button ion-button color="dark" item-end (click)="deleteSelected(work)">X</button>\n        </ion-item>\n      </div>\n      </ion-list> \n\n    </ion-card>\n  \n  <div text-right>New Work Permit\n  <button class="ion-icon"> \n  <ion-icon name="add-circle" (click)="openTask4Page()"> </ion-icon>\n  </button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/task/task.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], TaskPage);
    return TaskPage;
}());

//# sourceMappingURL=task.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the Task1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Task1Page = (function () {
    function Task1Page(navCtrl, alertCtrl, navParams, modal, viewCtrl, loadingCtrl, toastCtrl, fdb, af) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.fdb = fdb;
        this.af = af;
        this.images = [];
        this.editAdmin = false;
        this.editBtnTitle = "EDIT";
        this.contractors = [];
        this.item = [];
        this.mindate = new Date().toISOString();
    }
    Task1Page.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Work information was update successfully',
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    Task1Page.prototype.confirmEdit = function () {
        var _this = this;
        if (this.editAdmin == true) {
            var alert_1 = this.alertCtrl.create({
                title: 'Confirm update',
                message: 'Do you want to update this information?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Yes',
                        handler: function () {
                            console.log('Edit clicked');
                            _this.item.start = _this.start;
                            _this.item.finish = _this.finish;
                            _this.item.workpermitNo = _this.workpermitNo;
                            _this.item.desc = _this.desc;
                            _this.item.appletter = _this.appletter;
                            _this.item.drawing = _this.drawing;
                            _this.item.work = _this.work;
                            _this.item.statement = _this.statement;
                            _this.item.insletter = _this.insletter;
                            _this.item.trafficplan = _this.trafficplan;
                            _this.item.depo = _this.depo;
                            _this.item.charges = _this.charges;
                            _this.item.permit = _this.permit;
                            _this.item.contractor = _this.contractor;
                            _this.item.consession = _this.consession;
                            _this.item.email = _this.email;
                            var loading = _this.loadingCtrl.create({
                                content: 'Please wait...'
                            });
                            loading.present();
                            __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('workpermit/' + _this.item.key).update(_this.item).then(function (resp) {
                                console.log('test', resp);
                                setTimeout(function () {
                                    loading.dismiss();
                                    _this.presentToast();
                                    _this.editAdmin = false;
                                    _this.editBtnTitle = "EDIT";
                                    // this.navCtrl.pop();
                                }, 500);
                            }, function (err) {
                                console.log('error', err);
                                setTimeout(function () {
                                    loading.dismiss();
                                    _this.editAdmin = true;
                                    _this.editBtnTitle = "EDIT";
                                    // this.navCtrl.pop();
                                }, 500);
                            });
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: 'Confirm update',
                message: 'Do you want to edit this information?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Yes',
                        handler: function () {
                            console.log('Edit clicked');
                            _this.editAdmin = true;
                            _this.editBtnTitle = "SAVE";
                        }
                    }
                ]
            });
            alert_2.present();
        }
    };
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
    Task1Page.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad Task1Page');
        console.log('ionViewDidLoad Task5Page');
        this.af.authState.subscribe(function (user) {
            console.log(user);
            _this.fdb.list('/contractor/').subscribe(function (data) {
                console.log("The Data-->", data);
                _this.contractors = data;
            });
        });
        this.item = this.navParams.get('item'); //untuk display kat page task1
        this.start = this.item.start;
        this.finish = this.item.finish;
        this.workpermitNo = this.item.workpermitNo;
        this.desc = this.item.desc;
        this.appletter = this.item.appletter;
        this.drawing = this.item.drawing;
        this.work = this.item.work;
        this.statement = this.item.statement;
        this.insletter = this.item.insletter;
        this.trafficplan = this.item.trafficplan;
        this.depo = this.item.depo;
        this.charges = this.item.charges;
        this.permit = this.item.permit;
        this.consession = this.item.consession;
        this.contractor = this.item.contractor;
        this.email = this.item.email;
        this.images = this.item.images;
    };
    Task1Page.prototype.close = function () {
        // this.viewCtrl.dismiss();
    };
    Task1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-task1',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/task1/task1.html"*/'<!--\n  Generated template for the Task1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="turquoise">\n    <ion-title>Update Work Permit</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="background" no-padding>\n    <ion-list>\n    \n      <ion-card class="date">\n        <ion-card-header text-center><b><small>Start Date and Time </small></b></ion-card-header>\n        <ion-item class="inputdate">\n              <ion-datetime [min] = "mindate" max = "2028-01-01T18:00:00.618Z" disabled = "{{!editAdmin}}" displayFormat="DD MMM, YYYY h:mm A" pickerFormat="DD MMM YYYY h mm A" [(ngModel)]="start"></ion-datetime>\n      \n        </ion-item>     \n      </ion-card>\n  \n    \n      <ion-card class="date">\n          <ion-card-header text-center><b><small>Finish Date and Time </small></b></ion-card-header>\n          <ion-item class="inputdate">\n            <ion-datetime [min] = "mindate" max = "2028-01-01T18:00:00.618Z" disabled = "{{!editAdmin}}" displayFormat="DD MMM, YYYY h:mm A" pickerFormat="DD MMM YYYY h mm A" [(ngModel)]="finish"></ion-datetime>\n          </ion-item>     \n      </ion-card>\n  \n      </ion-list> \n  \n    \n          <ion-card>\n          <ion-input disabled = "{{!editAdmin}}" style="background-color:gainsboro" type="text" [disabled]="true" [(ngModel)]="workpermitNo"></ion-input>\n          </ion-card>\n    \n          <ion-card>\n          <ion-input disabled = "{{!editAdmin}}" style="background-color:gainsboro" type="text" placeholder="Description Of Work" [(ngModel)]="desc"></ion-input>\n          </ion-card>\n          \n  \n        <ion-card >\n          <ion-grid>\n            <ion-row>\n              \n              <ion-col class="col-head" col-10><b>Document Submitted</b> </ion-col>\n              <ion-col class="col-head"><b>[Tick]</b></ion-col>\n            </ion-row>\n  \n            <ion-row>\n              <ion-col col-1>a)</ion-col>\n              <ion-col col-9> Application Letter </ion-col>\n              <ion-col><ion-checkbox  disabled = "{{!editAdmin}}" [(ngModel)]="appletter"></ion-checkbox></ion-col>\n            </ion-row>\n  \n            <ion-row>\n              <ion-col col-1>b)</ion-col>\n              <ion-col col-9>Drawing (s) Ref No </ion-col>\n              <ion-col><ion-checkbox  disabled = "{{!editAdmin}}" [(ngModel)]="drawing"></ion-checkbox></ion-col>\n            </ion-row>\n  \n            <ion-row>\n              <ion-col col-1>c)</ion-col>\n              <ion-col col-9>Work Programme </ion-col>\n              <ion-col><ion-checkbox disabled = "{{!editAdmin}}"  [(ngModel)]="work"></ion-checkbox></ion-col>\n            </ion-row>\n     \n            <ion-row>\n              <ion-col col-1>d)</ion-col>\n              <ion-col col-9>Method of Statement</ion-col>\n              <ion-col><ion-checkbox   disabled = "{{!editAdmin}}" [(ngModel)]="statement"></ion-checkbox></ion-col>\n            </ion-row>\n  \n            <ion-row>\n              <ion-col col-1>e)</ion-col>\n              <ion-col col-9>Insurance/BG/Undertaking Letter </ion-col>\n              <ion-col><ion-checkbox disabled = "{{!editAdmin}}"  [(ngModel)]="insletter"></ion-checkbox></ion-col>\n            </ion-row>\n     \n            <ion-row>\n              <ion-col col-1>f)</ion-col>\n              <ion-col col-9>Traffic Management Plan</ion-col>\n              <ion-col><ion-checkbox disabled = "{{!editAdmin}}" [(ngModel)]="trafficplan"></ion-checkbox></ion-col>\n            </ion-row>\n  \n            <ion-row>\n              <ion-col col-1>g)</ion-col>\n              <ion-col col-9>Deposit RM1,000.00 (Refundable) </ion-col>\n              <ion-col><ion-checkbox disabled = "{{!editAdmin}}" [(ngModel)]="depo"></ion-checkbox></ion-col>\n            </ion-row>\n     \n            <ion-row>\n              <ion-col col-1>h)</ion-col>\n              <ion-col col-9>Administration Charges </ion-col>\n              <ion-col><ion-checkbox disabled = "{{!editAdmin}}" [(ngModel)]="charges"></ion-checkbox></ion-col>\n            </ion-row>\n     \n            <ion-row>\n              <ion-col col-1>i)</ion-col>\n              <ion-col col-9>LLM\'s Permit (if any) </ion-col>\n              <ion-col><ion-checkbox disabled = "{{!editAdmin}}" [(ngModel)]="permit"></ion-checkbox></ion-col>\n            </ion-row>\n     \n  \n          </ion-grid>\n\n\n          <ion-list>\n              <ion-item>\n               <ion-label>Select Contractor</ion-label>\n                <ion-select disabled = "{{!editAdmin}}" [(ngModel)]="contractor">\n                  <ion-option *ngFor="let contractor of contractors" value="{{contractor.compname}}">{{contractor.compname}}</ion-option>  \n                </ion-select>\n              </ion-item>\n          </ion-list>\n\n          <ion-list>\n              <ion-item>\n                  <ion-label>Select Consession</ion-label>\n                  <ion-select disabled = "{{!editAdmin}}" [(ngModel)]="consession">\n                    <ion-option>Besraya</ion-option>\n                    <ion-option>Lekas</ion-option>\n                    <ion-option>NPE</ion-option>\n                  </ion-select>\n              </ion-item>\n            </ion-list>\n\n            <ion-item>\n                <ion-label>Email:</ion-label>\n                <ion-input [(ngModel)]="email" type="email" [disabled]="true"></ion-input>\n            </ion-item>\n\n            <ion-slides *ngIf = "images!= null && images.length != 0" slidesPerView = "3" pager = "ture" paginationType = "fraction">\n              <ion-slide *ngFor = "let image of images">\n                  <img style="padding: 8px" src="{{image}}">\n              </ion-slide>\n            </ion-slides>\n        </ion-card>\n  \n  \n        <div text-right>\n            <button (click)="openUploadPage()" color="turquoise" ion-button>Upload Doc F</button>\n            <button (click)="confirmEdit()" color="turquoise" ion-button>{{editBtnTitle}}</button>\n            <!-- <button (click)="close()" color="turquoise" ion-button>Close</button> -->\n        </div>\n  </ion-content>\n  '/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/task1/task1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], Task1Page);
    return Task1Page;
}());

//# sourceMappingURL=task1.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the Task5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Task5Page = (function () {
    function Task5Page(navCtrl, alertCtrl, navParams, fdb, af, load) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.fdb = fdb;
        this.af = af;
        this.load = load;
        this.contractors = [];
        this.images = [];
        this.start = navParams.get('start');
        this.finish = navParams.get('finish');
        this.workpermitNo = navParams.get('workpermitNo');
        this.desc = navParams.get('desc');
        this.appletter = navParams.get('appletter');
        this.drawing = navParams.get('drawing');
        this.work = navParams.get('work');
        this.statement = navParams.get('statement');
        this.insletter = navParams.get('insletter');
        this.trafficplan = navParams.get('trafficplan');
        this.depo = navParams.get('depo');
        this.charges = navParams.get('charges');
        this.permit = navParams.get('permit');
        this.images = navParams.get('images');
        this.contractor = "";
        this.consession = "";
        this.email = "";
        this.password = "";
        this.role = "contractor";
    }
    Task5Page.prototype.register = function () {
        var _this = this;
        var loading = this.load.create({
            duration: 4000
        });
        loading.present();
        this.af.auth.createUserWithEmailAndPassword(this.email, this.password)
            .then(function (data) {
            _this.id = data.uid;
            console.log(_this.id);
            var post = {
                id: _this.id,
                start: _this.start,
                finish: _this.finish,
                workpermitNo: _this.workpermitNo,
                desc: _this.desc,
                appletter: _this.appletter,
                drawing: _this.drawing,
                work: _this.work,
                statement: _this.statement,
                insletter: _this.insletter,
                trafficplan: _this.trafficplan,
                depo: _this.depo,
                charges: _this.charges,
                permit: "true",
                contractor: _this.contractor,
                consession: _this.consession,
                email: _this.email,
                password: _this.password,
                role: "contractor",
                images: _this.images,
                progress: [],
                checklist: [],
            };
            if (typeof (post.appletter) == 'undefined') {
                post.appletter = false;
            }
            if (typeof (post.drawing) == 'undefined') {
                post.drawing = false;
            }
            if (typeof (post.work) == 'undefined') {
                post.work = false;
            }
            if (typeof (post.statement) == 'undefined') {
                post.statement = false;
            }
            if (typeof (post.insletter) == 'undefined') {
                post.insletter = false;
            }
            if (typeof (post.trafficplan) == 'undefined') {
                post.trafficplan = false;
            }
            if (typeof (post.depo) == 'undefined') {
                post.depo = false;
            }
            if (typeof (post.charges) == 'undefined') {
                post.charges = false;
            }
            __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('staff/' + _this.id).set(post);
            __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('workpermit/' + _this.id).set(post);
            _this.navCtrl.pop();
            _this.alertCtrl.create({
                title: 'Info',
                message: 'You have successfully registered a work permit!',
                buttons: [
                    {
                        text: "OK",
                        handler: function (data) {
                            _this.navCtrl.pop();
                        }
                    }
                ]
            }).present();
        });
    };
    Task5Page.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad Task5Page');
        this.af.authState.subscribe(function (user) {
            console.log(user);
            _this.fdb.list('/contractor/').subscribe(function (data) {
                console.log("The Data-->", data);
                _this.contractors = data;
            });
        });
    };
    Task5Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-task5',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/task5/task5.html"*/'<!--\n  Generated template for the Task5Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="turquoise">\n    <ion-title>Create Work Permit </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-content>\n        <ion-list>\n            <ion-item>\n             <ion-label>Select Contractor</ion-label>\n              <ion-select [(ngModel)]="contractor"  >\n                <ion-option *ngFor="let contractor of contractors" value="{{contractor.compname}}">{{contractor.compname}}</ion-option>  \n              </ion-select>\n            </ion-item>\n            <br>\n            <ion-item>\n                <ion-label>Select Consession</ion-label>\n                <ion-select [(ngModel)]="consession">\n                  <ion-option>Besraya</ion-option>\n                  <ion-option>Lekas</ion-option>\n                  <ion-option>NPE</ion-option>\n                </ion-select>\n            </ion-item>\n        </ion-list>\n        <br>\n       \n          <h5 text-center><b>CREDENTIALS FOR CONTRACTOR </b></h5>\n        <br>\n\n          <ion-list>\n              <ion-item>\n                <ion-input [(ngModel)]="email" type="email" placeholder="EMAIL"></ion-input>\n              </ion-item>\n          <br>\n              <ion-item>\n                <ion-input [(ngModel)]="password" type="password" placeholder="PASSWORD"></ion-input>\n              </ion-item>\n          </ion-list>  \n\n            <br>\n           \n            <ion-grid>\n                <ion-row>\n                <ion-col col-1><ion-checkbox [(ngModel)]="role" value="contractor" ></ion-checkbox></ion-col>\n                <ion-col col-10><small>I confirm that the information given in this form is true, complete and accurate.</small></ion-col>\n                </ion-row>       \n            </ion-grid>\n\n    </ion-card-content>\n\n  </ion-card>\n    \n\n    <div text-right>\n      <button (click)="register()" color="turquoise" ion-button>REGISTER</button>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/task5/task5.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], Task5Page);
    return Task5Page;
}());

//# sourceMappingURL=task5.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_info__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_progress__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__acknowledge_acknowledge__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { EmailComposer } from '@ionic-native/email-composer';

var ContractorPage = (function () {
    function ContractorPage(navCtrl, alertCtrl, navParams, modal, viewCtrl, fdb, loadingCtrl, 
        // public emailComposer: EmailComposer,
        toastCtrl, platform, af) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.viewCtrl = viewCtrl;
        this.fdb = fdb;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.af = af;
        this.progress = [];
        this.workpermit = [];
        this.company = [];
    }
    ContractorPage.prototype.openInfoPage = function (index) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__info_info__["a" /* InfoPage */], { item: this.progress[index] });
    };
    ContractorPage.prototype.openProgressPage = function (item) {
        console.log(item);
        // let abc=this.modal.create(ProgressPage, {
        //  item:item    
        // })
        // abc.onDidDismiss(_=>{
        //   this.ionViewDidLoad();
        // });
        // abc.present(); 
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__progress_progress__["a" /* ProgressPage */], {
            item: item
        });
    };
    ContractorPage.prototype.openAppendixPage = function () {
        var append = this.modal.create(__WEBPACK_IMPORTED_MODULE_5__acknowledge_acknowledge__["a" /* AcknowledgePage */], { workpermit: this.workpermit, userid: this.userid, disp: "false" });
        append.present();
    };
    ContractorPage.prototype.openAppendixPageShow = function () {
        var append = this.modal.create(__WEBPACK_IMPORTED_MODULE_5__acknowledge_acknowledge__["a" /* AcknowledgePage */], { workpermit: this.workpermit, userid: this.userid, disp: "true" });
        append.present();
    };
    ContractorPage.prototype.ionViewDidLoad = function () {
        var self = this;
        this.platform.ready().then(function (ready) {
            console.log('ionViewDidLoad ContractorPage');
            self.af.authState.subscribe(function (user) {
                self.userid = user.uid;
                console.log(user);
                var loading = self.loadingCtrl.create({
                    content: 'Please wait...'
                });
                loading.present();
                __WEBPACK_IMPORTED_MODULE_8_firebase__["database"]().ref('contractor/').on('value', function (snap) {
                    if (snap.val() != null) {
                        var value = Object.keys(snap.val()).map(function (key) { return snap.val()[key]; });
                        var keys = Object.keys(snap.val());
                        self.company = value;
                        for (var m = 0; m < self.company.length; m++) {
                            if (String(self.company[m].compname).toUpperCase == String(self.workpermit.contractor).toUpperCase) {
                                self.companyemail = self.company[m].email;
                            }
                        }
                        console.log(self.companyemail);
                        console.log(value);
                    }
                });
                __WEBPACK_IMPORTED_MODULE_8_firebase__["database"]().ref('workprogress/' + '/' + self.userid + '/').on('value', function (snap) {
                    if (snap.val() != null) {
                        var value = Object.keys(snap.val()).map(function (key) { return snap.val()[key]; });
                        var keys = Object.keys(snap.val());
                        self.progress = value;
                        console.log(value);
                    }
                    setTimeout(function () {
                        loading.dismiss();
                    }, 500);
                });
                self.fdb.object('workpermit/' + self.userid).subscribe(function (data) {
                    console.log("The Data-->", data);
                    self.start = data.start;
                    self.name = data.name;
                    self.workpermitNo = data.workpermitNo;
                    self.desc = data.desc;
                    self.workpermit = data;
                    self.contract = data.email;
                    self.contract = String(self.contract).split('@')[0];
                    var date = new Date();
                    var year = date.getFullYear();
                    var month = date.getMonth() + 1;
                    var day = date.getDate();
                    var upper1 = "";
                    var upper2 = "";
                    if (month < 10) {
                        upper1 = "0";
                    }
                    if (day < 10) {
                        upper2 = "0";
                    }
                    var string_date = year.toString() + "-" + upper1 + month.toString() + "-" + upper2 + day.toString();
                    var finished_day = String(data.finish).split('T')[0];
                    if (string_date > finished_day) {
                        var alert_1 = self.alertCtrl.create({
                            title: 'Close Work Permit',
                            message: 'Expired Data is passed',
                            buttons: [
                                {
                                    text: 'OK',
                                    role: 'ok',
                                    handler: function () {
                                        self.af.auth.signOut();
                                        self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                                    }
                                }
                            ]
                        });
                        alert_1.present();
                    }
                    else {
                        if (typeof (data.finished) != undefined && data.finished == "true") {
                            var alert_2 = self.alertCtrl.create({
                                title: 'Close Work Permit',
                                message: 'Work is closed',
                                buttons: [
                                    {
                                        text: 'OK',
                                        role: 'ok',
                                        handler: function () {
                                            self.af.auth.signOut();
                                            self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                                        }
                                    }
                                ]
                            });
                            alert_2.present();
                        }
                        else {
                            if (typeof (data.agree) != undefined && data.agree == "true") {
                            }
                            else {
                                self.openAppendixPage();
                            }
                        }
                    }
                });
            });
        });
    };
    ContractorPage.prototype.submit = function () {
        var self = this;
        this.platform.ready().then(function (ready) {
            var imagearray = [];
            var alert = self.alertCtrl.create({
                title: 'Close Work Permit',
                message: 'Consessionare will be notify and the works status cannot be undo.',
                buttons: [
                    {
                        text: 'Yes',
                        role: '',
                        handler: function () {
                            console.log('Yes clicked');
                            self.workpermit.finished = new String();
                            self.workpermit.finished = "true";
                            console.log("start");
                            try {
                                var html_1;
                                if (self.progress != null) {
                                    html_1 = "<div align='center'>";
                                    for (var i = 0; i < self.progress.length; i++) {
                                        var htmlcell = void 0;
                                        var cell = self.progress[i].cell[0];
                                        htmlcell = "<div align='center'>";
                                        htmlcell += '<h4> Report In ' + self.progress[i].date + '</h4>';
                                        if (typeof (cell.text) != 'undefined') {
                                            htmlcell += '<h6>' + cell.text + ' ' + '</h6>';
                                        }
                                        if (typeof (cell.images) != 'undefined') {
                                            var image_count = 0;
                                            for (var k = 0; k < cell.images.length; k++) {
                                                var imagecell = cell.images[k];
                                                imagearray.push(imagecell);
                                                // htmlcell += '<img src="' + imagecell + '"/>';
                                                image_count++;
                                            }
                                            htmlcell += '<h6> (' + image_count + ' images are attached.)</h6>';
                                        }
                                        htmlcell += "</div>";
                                        html_1 += htmlcell;
                                    }
                                }
                                console.log(html_1);
                                html_1 += "<div align='center'>";
                                html_1 += "<br></br>";
                                html_1 += "<br></br>";
                                html_1 += "<h2> Thank you.</h2>";
                                // html += '<img src="https://firebasestorage.googleapis.com/v0/b/besraya-ca9e2.appspot.com/o/warning-sign-3D-person.jpg?alt=media&token=896cc875-df2a-4473-96a8-e0581820d69a" />';
                                html_1 += "<h4> TPaDS Team. </h4>";
                                html_1 += "<h6> This is a computer generated letter and no signature is required. Please do not reply to this message. </h6>";
                                html_1 += "</div>";
                                window.cordova.plugins.email.isAvailable(function (isAvailable) {
                                    console.log("available: " + isAvailable);
                                    if (isAvailable == true) {
                                        console.log("available");
                                        self.fdb.list('/staff/').subscribe(function (data) {
                                            var emails = [];
                                            for (var i = 0; i < data.length; i++) {
                                                if (data[i].role == "staff" && self.workpermit.consession == data[i].consession) {
                                                    emails.push(data[i].email);
                                                }
                                            }
                                            emails.push(self.workpermit.email);
                                            emails.push(self.companyemail);
                                            console.log(emails);
                                            var emailname = String(self.workpermit.email).split('@')[0];
                                            console.log(emailname);
                                            var email = {
                                                to: emails,
                                                subject: 'Job is finished',
                                                cc: null,
                                                bcc: null,
                                                attachments: imagearray,
                                                body: "<div align='center' ><h2> WorkPermitNo :  " + self.workpermit.workpermitNo + " is finished by " + emailname + "</h2>" + html_1 + "</div>",
                                                isHtml: true
                                            };
                                            console.log(email.body);
                                            // Send a text message using default options
                                            window.cordova.plugins.email.open(email);
                                            __WEBPACK_IMPORTED_MODULE_8_firebase__["database"]().ref('workpermit/' + self.userid).update(self.workpermit).then(function (a) {
                                            });
                                            self.af.auth.signOut();
                                            self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                                        });
                                    }
                                });
                            }
                            catch (error) {
                                console.log("allerr " + error);
                            }
                        }
                    },
                    {
                        text: 'No',
                        handler: function () {
                            console.log('No clicked');
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    ContractorPage.prototype.logout = function () {
        this.af.auth.signOut();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    ContractorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contractor',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/contractor/contractor.html"*/'\n<ion-header>\n    <ion-navbar color="turquoise">\n    <ion-title class><marquee>Work Permit {{workpermitNo}}</marquee> </ion-title>\n    </ion-navbar> \n</ion-header>\n\n  <ion-content>\n    <ion-card>\n      <ion-card-header class="ion-card-header">\n        <h2 class="h2">Report Summary</h2>\n      </ion-card-header>\n      \n      <ion-card-content class="ion-card-content">\n        <br>\n        <p>{{desc}}</p>\n      </ion-card-content>\n    </ion-card>\n\n    <div text-right>\n    <button class="ion-icon">\n      <ion-icon name="add-circle" (click)="openProgressPage()"></ion-icon>\n    </button>\n    </div>\n\n      <ion-card>\n          <ion-card-header class="ion-card-header">\n            <h2 class="h2">Progress Report</h2>\n          </ion-card-header>\n\n          <ion-card-content class="bg">\n\n          \n                  <button *ngFor = "let part of progress; let i = index;" ion-item block class="bg" (click)="openInfoPage(i)"> \n                    <ion-icon name="document" item-start ></ion-icon>\n                    <marquee>\n                      Report of {{part.date}} by {{contract}}\n                    </marquee>\n                  </button>\n                 \n          \n              \n        </ion-card-content>   \n      </ion-card>\n\n     <div text-center>\n        <button ion-button color="turquoise" (click)="submit()">CLOSE WORK PERMIT</button>\n        <button ion-button color="turquoise" (click)="logout()">LOGOUT</button>\n        <button ion-button color="turquoise" (click)="openAppendixPageShow()">Appendix</button>\n     </div>\n      \n      \n  </ion-content>\n'/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/contractor/contractor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], ContractorPage);
    return ContractorPage;
}());

//# sourceMappingURL=contractor.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_update__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProgressPage = (function () {
    function ProgressPage(navCtrl, alertCtrl, navParams, fdb, af, camera, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.fdb = fdb;
        this.af = af;
        this.camera = camera;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.progress = [];
        this.item = [];
        this.images = [];
    }
    ProgressPage.prototype.resizeImage = function (url, width, height) {
        var sourceImage = new Image();
        var self = this;
        sourceImage.onload = function () {
            // Create a canvas with the desired dimensions
            var canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;
            // Scale and draw the source image to the canvas
            canvas.getContext("2d").drawImage(sourceImage, 0, 0, width, height);
            // Convert the canvas to a data URL in PNG format
            self.imageURI = canvas.toDataURL();
            self.images.push(self.imageURI);
            setTimeout(function () {
                self.loader.dismiss();
                // this.navCtrl.pop();
            }, 500);
            console.log(self.images);
        };
        sourceImage.src = url;
    };
    ProgressPage.prototype.AddImagefromGallery = function (event) {
        var self = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        self.loader = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        self.loader.present();
        this.camera.getPicture(options).then(function (imageData) {
            self.resizeImage('data:image/png;base64,' + imageData, 256, 216);
        }, function (err) {
            setTimeout(function () {
                self.loader.dismiss();
                // this.navCtrl.pop();
            }, 500);
            console.log(err);
        });
    };
    ProgressPage.prototype.AddImagefromCamera = function (event) {
        var self = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        self.loader = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        self.loader.present();
        this.camera.getPicture(options).then(function (imageData) {
            self.resizeImage('data:image/png;base64,' + imageData, 256, 216);
        }, function (err) {
            setTimeout(function () {
                self.loader.dismiss();
                // this.navCtrl.pop();
            }, 500);
            console.log(err);
        });
    };
    ProgressPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'User information was update successfully',
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ProgressPage.prototype.openAlert = function () {
        var _this = this;
        var self = this;
        var alert_close = this.alertCtrl.create({
            title: 'Add progress',
            message: 'Confirm Save?',
            buttons: [
                {
                    text: 'Yes',
                    role: 'Yes',
                    handler: function () {
                        self.progress = [];
                        var progress_cell = {
                            text: self.progressText,
                            images: self.images,
                        };
                        self.progress.push(progress_cell);
                        console.log('Yes clicked');
                        var displayDate = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
                        var submit_cell = {
                            cell: self.progress,
                            date: displayDate,
                        };
                        var loading = _this.loadingCtrl.create({
                            content: 'Please wait...'
                        });
                        loading.present();
                        __WEBPACK_IMPORTED_MODULE_6_firebase__["database"]().ref('workprogress/' + '/' + _this.userid + '/').push(submit_cell).then(function (resp) {
                            console.log('test', resp);
                            setTimeout(function () {
                                _this.presentToast();
                                _this.navCtrl.pop();
                                loading.dismiss();
                            }, 500);
                        }, function (err) {
                            console.log('error', err);
                            setTimeout(function () {
                                loading.dismiss();
                            }, 500);
                        });
                    }
                },
                {
                    text: 'No',
                    handler: function () {
                        console.log('No clicked');
                    }
                }
            ]
        });
        alert_close.present();
        //   let self = this;
        //   let alert = this.alertCtrl.create({
        //     title: 'Add progress',
        //     message: 'Do you want to add more progress?',
        //     buttons: [
        //       {
        //         text: 'Yes',
        //         role: 'Yes',
        //         handler: () => {
        //           console.log('Yes clicked');
        //           let progress_cell= {
        //             text: self.progressText,
        //             images: self.images,
        //           }
        //           self.progress.push(progress_cell);
        //           self.images = [];
        //           self.progressText = [];
        //         }
        //       },
        //       {
        //         text: 'No',
        //         handler: () => {
        //           let alert_close = this.alertCtrl.create({
        //             title: 'Add progress',
        //             message: 'Confirm Save?',
        //             buttons: [
        //               {
        //                 text: 'Yes',
        //                 role: 'Yes',
        //                 handler: () => {
        //                   console.log('Yes clicked');
        //                   let displayDate = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
        //                   let submit_cell= {
        //                     cell: self.progress,
        //                     date: displayDate,
        //                   }
        //                   let loading = this.loadingCtrl.create({
        //                     content: 'Please wait...'
        //                   });
        //                   loading.present();
        //                   firebase.database().ref('workprogress/'+'/'+this.userid + '/').push(submit_cell).then(resp=>{
        //                     console.log('test',resp);
        //                     setTimeout(() => {
        //                       this.presentToast();
        //                       this.navCtrl.pop();
        //                       loading.dismiss();
        //                     }, 500);
        //                   },err=>{
        //                     console.log('error',err);
        //                     setTimeout(() => {
        //                       loading.dismiss();
        //                     }, 500);
        //                   });
        //                 }
        //               },
        //               {
        //                 text: 'No',
        //                 handler: () => {
        //                   console.log('No clicked');
        //                 }
        //               }
        //             ]
        //           });
        //           alert_close.present();
        //         }
        //       }
        //     ]
        //   });
        //   alert.present();
    };
    /*openProgress2Page(){
      this.navCtrl.push(Progress2Page);
    }*/
    ProgressPage.prototype.openUpdatePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__update_update__["a" /* UpdatePage */]);
    };
    ProgressPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ProgressPage');
        this.af.authState.subscribe(function (user) {
            _this.userid = user.uid;
            console.log(user);
            var self = _this;
            // firebase.database().ref('workpermit/' + this.userid).on('value',function(snap){
            //   let value = Object.keys(snap.val()).map(key => snap.val()[key]);
            //   let keys = Object.keys(snap.val());
            //   // let data = Object.value(snap.val());
            //   let data = {
            //     id: "",
            //     start : "",
            //     finish : "",
            //     workpermitNo : "",
            //     desc : "",
            //     appletter : "",
            //     drawing : "",
            //     work : "",
            //     statement : "",
            //     insletter : "",
            //     trafficplan : "",
            //     depo : "",
            //     charges : "",
            //     permit : "true",
            //     contractor : "",
            //     consession : "",
            //     email : "",
            //     password : "",
            //     role : "",
            //     progress: [],
            //   }
            //   for (let i = 0; i <  keys.length; i++) {
            //     data[keys[i]] = value[i];
            //   }
            //   self.item = data;
            //   console.log("The Data-->",data);
            //   self.start = data.start;
            //   self.workpermitNo = data.workpermitNo;
            //   self.progress = data.progress;
            // });
        });
        //this.item=this.navParams.get('item');//untuk display kat page progress
        //this.id=this.item.id;
    };
    ProgressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-progress',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/progress/progress.html"*/'\n\n<ion-header>\n\n        <ion-navbar color="turquoise">\n        \n        <ion-title class>Progress Update</ion-title>\n        </ion-navbar>\n      </ion-header>\n    \n    \n    <ion-content>\n        <ion-list>\n        <ion-card style="background-color:rgb(231, 231, 231)">\n          <ion-card-header class="ion-card-header">\n          <h2 class="h2">Progress</h2> \n          </ion-card-header>\n          <!-- <ion-card-content style="border-bottom: 1px solid white" *ngFor = "let cell of progress">\n              <ion-textarea disabled = "true" rows="2" cols="50"  placeholder="Add progress.." [(ngModel)]="cell.text"></ion-textarea>\n              <ion-slides *ngIf = "cell.images.length != 0" slidesPerView = "3" pager = "ture" paginationType = "fraction">\n                <ion-slide *ngFor = "let image of cell.images">\n                    <img style="padding: 8px" src="{{image}}">\n                </ion-slide>\n              </ion-slides>\n          </ion-card-content> -->\n        </ion-card>\n        </ion-list>\n\n        <ion-list> \n        <ion-card style="background-color:rgb(231, 231, 231)">\n            <ion-card-header><b>Upload Form</b></ion-card-header>\n            <ion-card-content>\n                <ion-textarea style="background-color: white;" rows="4" cols="50"  placeholder="Add progress.." [(ngModel)]="progressText"></ion-textarea>\n                <!-- <ion-scroll scrollX="true">\n                  <div class="image-slide">\n                      <div class="image-cell">\n                          <img class="image" src="https://s0.2mdn.net/8049270/Brand_Refresh_GDN_Vlogger_728_x_90.png" alt="Flowers in Chania">\n                      </div>\n\n                      \n                  </div>\n                  \n                    \n                </ion-scroll> -->\n                <ion-slides *ngIf = "images.length != 0" slidesPerView = "3" pager = "ture" paginationType = "fraction">\n                  <ion-slide *ngFor = "let image of images">\n                      <img style="padding: 8px" src="{{image}}">\n                  </ion-slide>\n                </ion-slides>\n                <div text-right>\n                    <button ion-button color="turquoise" (click)="AddImagefromGallery()"><ion-icon name="images" item-start></ion-icon> </button>\n                    <button ion-button color="turquoise" (click)="AddImagefromCamera()"><ion-icon name="camera" item-start></ion-icon> </button>\n                </div>\n            </ion-card-content>\n          \n          </ion-card>\n          <div text-right>\n              <button ion-button color="turquoise" (click)="openAlert()">Complete</button>\n              <!-- <button ion-button color="turquoise" (click)="openUpdatePage()">DELETE</button> -->\n          </div>\n         \n        </ion-list>\n\n          \n           \n    </ion-content>\n    \n\n'/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/progress/progress.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ProgressPage);
    return ProgressPage;
}());

//# sourceMappingURL=progress.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the UpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpdatePage = (function () {
    function UpdatePage(navCtrl, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
    }
    UpdatePage.prototype.openAlertPage = function () {
        var alert = this.alertCtrl.create({
            title: 'Confirm Save?',
            message: '',
            cssClass: 'alertColor',
            buttons: [
                {
                    text: 'Yes',
                    role: 'Yes',
                    handler: function () {
                        console.log('Yes clicked');
                    }
                },
                {
                    text: 'No',
                    handler: function () {
                        console.log('No clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    UpdatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpdatePage');
    };
    UpdatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-update',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/update/update.html"*/'\n<ion-header>\n\n  <ion-navbar color="turquoise">\n  \n  <ion-title class>Progress Update</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n\n    <ion-card>\n      <ion-card-content class="ion-card-content">\n          <br>\n          <p>Safety Vest still on progress.................</p>\n          <br>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                  <img class="image" src="./assets/imgs/satu.jpg" style="width:100px;height:100px;"/>  \n              </ion-col>\n              <ion-col>\n                  <img class="image" src="./assets/imgs/dua.jpg" style="width:100px;height:100px;"/>  \n              </ion-col>\n              <ion-col>\n                  <img class="image" src="./assets/imgs/tiga.jpg" style="width:100px;height:100px;"/>  \n              </ion-col>\n            </ion-row>\n            </ion-grid>\n        </ion-card-content>\n      </ion-card>\n\n  <ion-card>\n      <ion-card-content class="ion-card-content">\n        <br>\n        <p>............................................................................................................................................................................................................</p>\n      </ion-card-content>\n    </ion-card>\n    \n    <ion-card>\n        <ion-card-content class="ion-card-content">\n      <ion-label text-center>Select upload picture</ion-label>\n\n          <div text-center>\n      <button color="turquoise" ion-button icon-right>\n          <ion-icon name="images"></ion-icon>  open gallery</button> \n        </div>\n    \n          <div text-center>\n        <button color="turquoise" ion-button icon-right>\n          <ion-icon name="camera" text-left></ion-icon>  camera</button> \n        </div>\n\n  </ion-card-content>\n    </ion-card>\n\n    <div text-right>\n          <button ion-button class="ion-button"><h3 class="h3" (click)="openAlertPage()">Save</h3></button>\n          </div>\n      </ion-card>\n</ion-content>\n\n\n\n'/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/update/update.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], UpdatePage);
    return UpdatePage;
}());

//# sourceMappingURL=update.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompaniesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adminstaff_adminstaff__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CompaniesPage = (function () {
    function CompaniesPage(navCtrl, navParams, alertCtrl, fdb, af, load) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.fdb = fdb;
        this.af = af;
        this.load = load;
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
    CompaniesPage.prototype.openStaff = function () {
        console.log(this.companies);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__adminstaff_adminstaff__["a" /* AdminstaffPage */], { item: this.companies, name: this.name });
    };
    //buat satu function utk dia pegi page lg satu. tp push dlu
    CompaniesPage.prototype.ionViewDidLoad = function () {
        this.name = this.navParams.get('name');
        console.log('ionViewDidLoad CompaniesPage');
    };
    CompaniesPage.prototype.logout = function () {
        this.af.auth.signOut();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    CompaniesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-companies',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/companies/companies.html"*/'\n<ion-header>\n\n    <ion-navbar color="turquoise">\n    \n    <ion-title class>{{name}}</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content >\n  <ion-card>\n    <ion-card-header class="ion-card-header">\n        <h2 class="h2">Please select concession companies</h2>\n      </ion-card-header>\n\n      <ion-list radio-group [(ngModel)]="companies">\n        <ion-item>\n          <ion-label><img class="image" src="./assets/imgs/Besraya.png" style="width:100px;height:100px;"/></ion-label>  \n          <ion-radio value="Besraya" checked></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label><img class="image" src="./assets/imgs/Lekas.jpg" style="width:100px;height:100px;"/>  </ion-label>\n          <ion-radio value="Lekas"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label><img class="image" src="./assets/imgs/Npe.png" style="width:150px;height:50px;"/> </ion-label>\n          <ion-radio value="NPE"></ion-radio>\n        </ion-item>\n      </ion-list>\n      <br>\n\n            <div text-right>\n              <button ion-button color="turquoise" (click)="logout()"><h3 class="h3">LogOut</h3></button>\n              <button ion-button class="ion-button" (click)="openStaff()"><h3 class="h3">Next</h3></button>\n            </div>\n                </ion-card>\n            \n</ion-content>\n'/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/companies/companies.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], CompaniesPage);
    return CompaniesPage;
}());

//# sourceMappingURL=companies.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminstaffPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task6_task6__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__site_staff_site_staff__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminstaffPage = (function () {
    function AdminstaffPage(navCtrl, navParams, af) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.af = af;
    }
    AdminstaffPage.prototype.openTask6Page = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__task6_task6__["a" /* Task6Page */], { item: this.company, name: this.name });
    };
    AdminstaffPage.prototype.openSiteStaffPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__site_staff_site_staff__["a" /* SiteStaffPage */], { item: this.company, name: this.name });
    };
    AdminstaffPage.prototype.ionViewDidLoad = function () {
        var self = this;
        this.company = this.navParams.get('item');
        this.name = this.navParams.get('name');
    };
    AdminstaffPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adminstaff',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/adminstaff/adminstaff.html"*/'\n<ion-header>\n\n  <ion-navbar color="turquoise">\n  \n  <ion-title class>{{name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card (tap)="openTask6Page()">\n    <img src="./assets/imgs/button2.png"/>\n    <div class="card1">Traffic / Site Safety <br> Checklist During Work</div>\n  </ion-card>\n\n  <ion-card (tap)="openSiteStaffPage()">\n      <img src="./assets/imgs/button1.png"/>\n      <div class="card2">Site Inspection Upon <br> Completion Of Work</div>\n  </ion-card>\n  \n</ion-content>'/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/adminstaff/adminstaff.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AdminstaffPage);
    return AdminstaffPage;
}());

//# sourceMappingURL=adminstaff.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task6Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checklist_checklist__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Task6Page = (function () {
    function Task6Page(loadingCtrl, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.workpermit = [];
        this.keys = [];
    }
    Task6Page.prototype.openChecklistPage = function (index) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__checklist_checklist__["a" /* ChecklistPage */], { item: this.workpermit[index].id, desc: this.workpermit[index].desc, workpermitNo: this.workpermit[index].workpermitNo, name: this.name });
    };
    Task6Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Task6Page');
        var self = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.company = this.navParams.get('item');
        this.name = this.navParams.get('name');
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('workpermit/').on('value', function (snap) {
            setTimeout(function () {
                loading.dismiss();
                // this.navCtrl.pop();
            }, 500);
            if (snap.val() != null) {
                var values = Object.keys(snap.val()).map(function (key) { return snap.val()[key]; });
                var keys = Object.keys(snap.val());
                self.keys = keys;
                self.workpermit = values.filter(function (value) { return value.consession == self.company; });
                self.workpermit = self.workpermit.filter(function (value) { return value.finished != "true"; });
            }
        });
    };
    Task6Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-task6',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/task6/task6.html"*/'\n<ion-header>\n  <ion-navbar color="turquoise">\n  \n  <ion-title>{{name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header text-center class="ion-card-header">\n    LIST OF TASK\n    </ion-card-header>\n \n    <ion-list>\n    <div text-center>\n      <ion-item *ngFor ="let work of workpermit let i = index" >\n        <ion-icon name="clipboard" item-start></ion-icon> \n        <p (click)="openChecklistPage(i)">WORK PERMIT {{work.workpermitNo}}</p>    \n      </ion-item>\n    </div>\n    </ion-list>\n    \n  </ion-card>\n\n   \n   \n</ion-content>\n'/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/task6/task6.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], Task6Page);
    return Task6Page;
}());

//# sourceMappingURL=task6.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChecklistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checklist1_checklist1__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__work_task_work_task__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__report_report__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ChecklistPage = (function () {
    function ChecklistPage(loadingCtrl, af, navCtrl, alertCtrl, navParams, fdb) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.af = af;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.fdb = fdb;
        this.arrData = [];
        this.checklist = [];
        this.keys = [];
        this.fdb.list("/items/").subscribe(function (_data) {
            _this.arrData = _data;
            console.log(_this.arrData);
        });
    }
    ChecklistPage.prototype.openWorkTask = function (index) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__work_task_work_task__["a" /* WorkTaskPage */], {
            safety: this.checklist[index].safety,
            cones: this.checklist[index].cones,
            barriers: this.checklist[index].barriers,
            signage: this.checklist[index].signage,
            blinkers: this.checklist[index].blinkers,
            flagman: this.checklist[index].flagman,
            comment: this.checklist[index].comment,
            images: this.checklist[index].images,
            date: this.checklist[index].date,
        });
    };
    ChecklistPage.prototype.openReportPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__report_report__["a" /* ReportPage */], { item: this.workkey });
    };
    ChecklistPage.prototype.addItem = function () {
        this.fdb.list("/items/").push(this.myInput);
    };
    ChecklistPage.prototype.openChecklist1Page = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__checklist1_checklist1__["a" /* Checklist1Page */], { item: this.workkey });
    };
    ChecklistPage.prototype.openAlertPage = function () {
        var alert = this.alertCtrl.create({
            title: 'Submit Report?',
            buttons: [
                {
                    text: 'Yes',
                    role: 'Yes',
                    handler: function () {
                        console.log('Yes clicked');
                    }
                },
                {
                    text: 'No',
                    handler: function () {
                        console.log('No clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    ChecklistPage.prototype.deleteItem = function (i) {
        this.fdb.list("/items/").remove(this.arrData[i]);
    };
    ChecklistPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var self = this;
        this.workkey = this.navParams.get('item');
        this.desc = this.navParams.get('desc');
        this.name = this.navParams.get('name');
        this.workpermitNo = this.navParams.get('workpermitNo');
        console.log(this.workkey);
        console.log('ionViewDidLoad ChecklistPage');
        this.af.authState.subscribe(function (user) {
            _this.userid = user.uid;
            console.log(user);
            var loading = _this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading.present();
            __WEBPACK_IMPORTED_MODULE_7_firebase__["database"]().ref('checklist/' + _this.workkey + '/' + _this.userid + '/').on('value', function (snap) {
                console.log(snap.val());
                setTimeout(function () {
                    loading.dismiss();
                    // this.navCtrl.pop();
                }, 500);
                if (snap.val() != null) {
                    var value = Object.keys(snap.val()).map(function (key) { return snap.val()[key]; });
                    var keys = Object.keys(snap.val());
                    console.log(value);
                    console.log(keys);
                    // let data = Object.value(snap.val());
                    self.checklist = value;
                    self.keys = keys;
                }
            });
        });
    };
    ChecklistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checklist',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/checklist/checklist.html"*/'<ion-header>\n    <ion-navbar color="turquoise">\n    <ion-title  > <marquee>Work Permit {{workpermitNo}}</marquee></ion-title>\n    </ion-navbar>\n</ion-header>\n  \n  <ion-content>\n      \n    <ion-card>\n      <ion-card-header class="ion-card-header">\n        <h2 class="h2">Work Permit Summary</h2>\n      </ion-card-header>\n      \n      <ion-card-content class="ion-card-content">\n        <br>\n        <p>{{desc}}</p>\n      </ion-card-content>\n    </ion-card>\n\n    <div text-right>\n      Checklist\n    <button class="ion-icon">\n    <ion-icon name="add-circle" (click)="openChecklist1Page()"></ion-icon>\n    </button>\n    </div>\n\n    <ion-card>\n        <ion-card-header class="ion-card-header">\n          <h2 class="h2">Checklist Report History</h2>\n        </ion-card-header>\n\n        <ion-card-content class="bg">\n        <ion-list>\n                <button *ngFor = "let cell of checklist; let i = index; " ion-item class="bg" (click)="openWorkTask(i)"> \n                  <ion-icon name="document" item-start ></ion-icon>\n                  <marquee>\n                    Report of {{cell.date}} by {{name}}\n                  </marquee>\n                </button>\n               \n        </ion-list>\n        </ion-card-content>   \n    </ion-card>\n\n          \n          <div text-center>\n          <button ion-button color="turquoise" (click)="openReportPage()">\n            View Progress Report\n          </button>\n          </div>\n      \n     \n\n  </ion-content>'/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/checklist/checklist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ChecklistPage);
    return ChecklistPage;
}());

//# sourceMappingURL=checklist.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Checklist1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Checklist1Page = (function () {
    function Checklist1Page(navCtrl, alertCtrl, navParams, af, loadingCtrl, toastCtrl, camera, action) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.af = af;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.action = action;
        this.safety = "fail";
        this.cones = "fail";
        this.barriers = "fail";
        this.signage = "fail";
        this.blinkers = "fail";
        this.flagman = "fail";
        this.captureDataUrl2 = "";
        this.images = [];
        /**this.mypicref=firebase.storage().ref('/')**/
    }
    /*  addChecklist1(){
        let loading=this.load.create({
          duration: 4000
        });
        loading.present();
    
        let push ={
          safety: this.safety,
          cones: this.cones,
          barriers: this.barriers,
          signage: this.signage,
          blinkers: this.blinkers,
          flagman: this.flagman,
          comment: this.comment
        }
    
        firebase.database().ref('checklist/').push(push);
        this.alertCtrl.create({
          title: 'Successful',
          message: 'You have submitted',
          buttons: [
            {
              text: 'OK',
              handler: data => {
              this.navCtrl.setRoot(ChecklistPage);
              }
          }
          ]
        }).present();
      }*/
    Checklist1Page.prototype.submit = function () {
        var _this = this;
        var self = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm',
            message: 'Do you want to save information?',
            buttons: [
                {
                    text: 'Yes',
                    role: 'Yes',
                    handler: function () {
                        console.log('Yes clicked');
                        var displayDate = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
                        if (self.comment == null || self.comment == '') {
                            self.toastCtrl.create({
                                message: 'Please type comment',
                                duration: 3000,
                                position: 'bottom'
                            }).present();
                            return;
                        }
                        var progress_cell = {
                            images: self.images,
                            safety: self.safety,
                            cones: self.cones,
                            barriers: self.barriers,
                            signage: self.signage,
                            blinkers: self.blinkers,
                            flagman: self.flagman,
                            comment: self.comment,
                            date: displayDate,
                        };
                        var loading = _this.loadingCtrl.create({
                            content: 'Please wait...'
                        });
                        loading.present();
                        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('checklist/' + _this.workkey + '/' + _this.userid + '/').push(progress_cell).then(function (resp) {
                            console.log('test', resp);
                            setTimeout(function () {
                                self.comment = "";
                                self.images = [];
                                loading.dismiss();
                                _this.presentToast();
                                _this.navCtrl.pop();
                            }, 500);
                        }, function (err) {
                            console.log('error', err);
                            setTimeout(function () {
                                loading.dismiss();
                                self.comment = "";
                                self.images = [];
                                // this.navCtrl.pop();
                            }, 500);
                        });
                    }
                },
                {
                    text: 'No',
                    handler: function () {
                        console.log('No clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    Checklist1Page.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad Checklist1Page');
        this.workkey = this.navParams.get('item');
        this.af.authState.subscribe(function (user) {
            _this.userid = user.uid;
        });
    };
    Checklist1Page.prototype.captureProfile = function () {
        var _this = this;
        this.action.create({
            title: " Choose Image Source",
            buttons: [
                {
                    text: "Choose From Gallery",
                    handler: function () {
                        _this.AddImagefromGallery("");
                    }
                },
                {
                    text: "Take Picture",
                    handler: function () {
                        _this.AddImagefromCamera("");
                    }
                }
            ]
        }).present();
    };
    Checklist1Page.prototype.resizeImage = function (url, width, height) {
        var sourceImage = new Image();
        var self = this;
        sourceImage.onload = function () {
            // Create a canvas with the desired dimensions
            var canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;
            // Scale and draw the source image to the canvas
            canvas.getContext("2d").drawImage(sourceImage, 0, 0, width, height);
            // Convert the canvas to a data URL in PNG format
            self.imageURI = canvas.toDataURL();
            self.images.push(self.imageURI);
            setTimeout(function () {
                self.loader.dismiss();
                // this.navCtrl.pop();
            }, 500);
            console.log(self.images);
        };
        sourceImage.src = url;
    };
    Checklist1Page.prototype.AddImagefromGallery = function (event) {
        var self = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        self.loader = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        self.loader.present();
        this.camera.getPicture(options).then(function (imageData) {
            self.resizeImage('data:image/png;base64,' + imageData, 256, 216);
        }, function (err) {
            setTimeout(function () {
                self.loader.dismiss();
                // this.navCtrl.pop();
            }, 500);
            console.log(err);
        });
    };
    Checklist1Page.prototype.AddImagefromCamera = function (event) {
        var self = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        self.loader = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        self.loader.present();
        this.camera.getPicture(options).then(function (imageData) {
            self.resizeImage('data:image/png;base64,' + imageData, 256, 216);
        }, function (err) {
            setTimeout(function () {
                self.loader.dismiss();
                // this.navCtrl.pop();
            }, 500);
            console.log(err);
        });
    };
    Checklist1Page.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'User information was update successfully',
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    Checklist1Page.prototype.edit = function () {
    };
    Checklist1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checklist1',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/checklist1/checklist1.html"*/'\n<ion-header>\n\n    <ion-navbar color="turquoise">\n    <ion-title class>New Checklist</ion-title>\n    </ion-navbar>\n    </ion-header>\n\n  <ion-content>\n    <ion-card>\n\n      <ion-grid>\n      <ion-row>\n        <ion-col col-8><b>CHECKLIST</b></ion-col>\n        <ion-col><b>PASS/FAIL</b></ion-col>\n      </ion-row>\n      </ion-grid>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>Safety Vest</ion-label>\n          <ion-select [(ngModel)]="safety">\n              <ion-option value="pass">Pass</ion-option>\n              <ion-option value="fail">Fail</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Traffic Cones</ion-label>\n          <ion-select [(ngModel)]="cones">\n              <ion-option value="pass">Pass</ion-option>\n              <ion-option value="fail">Fail</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Traffic Barriers</ion-label>\n          <ion-select [(ngModel)]="barriers">\n              <ion-option value="pass">Pass</ion-option>\n              <ion-option value="fail">Fail</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Traffic Signages</ion-label>\n          <ion-select [(ngModel)]="signage">\n              <ion-option value="pass">Pass</ion-option>\n              <ion-option value="fail">Fail</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Blinkers/Flashing</ion-label>\n          <ion-select [(ngModel)]="blinkers">\n              <ion-option value="pass">Pass</ion-option>\n              <ion-option value="fail">Fail</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Flagman</ion-label>\n          <ion-select [(ngModel)]="flagman">\n              <ion-option value="pass">Pass</ion-option>\n              <ion-option value="fail">Fail</ion-option>\n          </ion-select> \n        </ion-item>\n\n\n      </ion-list>\n    </ion-card>\n\n    <ion-card >\n      <ion-card-header class="ion-card-content">Comment/Others</ion-card-header>\n      <ion-card-content>\n        <ion-textarea rows="4" cols="60" class="textarea" [(ngModel)]="comment" placeholder="Comment here"></ion-textarea>\n        <ion-slides *ngIf = "images!= null && images.length != 0" slidesPerView = "3" pager = "ture" paginationType = "fraction">\n            <ion-slide *ngFor = "let image of images">\n                <img style="padding: 8px" src="{{image}}">\n            </ion-slide>\n        </ion-slides>\n      </ion-card-content>\n    </ion-card>\n\n      \n\n      <div text-right>\n      <button color="turquoise" ion-button icon-right  (click)="captureProfile()">Upload Image</button> \n      <button ion-button (click)="submit()">Submit Report</button>\n      </div>\n\n   \n  </ion-content>\n  \n\n   \n\n'/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/checklist1/checklist1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], Checklist1Page);
    return Checklist1Page;
}());

//# sourceMappingURL=checklist1.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkTaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the WorkTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WorkTaskPage = (function () {
    function WorkTaskPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.safety = "fail";
        this.cones = "fail";
        this.barriers = "fail";
        this.signage = "fail";
        this.blinkers = "fail";
        this.flagman = "fail";
        this.images = [];
        this.date = "";
    }
    WorkTaskPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WorkTaskPage');
        this.safety = this.navParams.get('safety');
        this.cones = this.navParams.get('cones');
        this.barriers = this.navParams.get('barriers');
        this.signage = this.navParams.get('signage');
        this.blinkers = this.navParams.get('blinkers');
        this.flagman = this.navParams.get('flagman');
        this.comment = this.navParams.get('comment');
        this.images = this.navParams.get('images');
        this.date = this.navParams.get('date');
    };
    WorkTaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-work-task',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/work-task/work-task.html"*/'<ion-header>\n  <ion-navbar color="turquoise">\n  <ion-title class>Checklist Report History</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div text-center>\n  <h5>Checklist report on {{date}}</h5>\n  </div>\n  \n    <ion-grid>\n      <ion-row>\n      <ion-col class="col-head" col-8 >WORK TASK</ion-col>\n      <ion-col class="col-head" col-4 >STATUS</ion-col>\n      </ion-row> \n\n      <ion-row>\n      <ion-col class="col-1" col-8>Safety Vest</ion-col>\n      <ion-col class="col-1">{{safety}}</ion-col>\n      </ion-row>\n\n      <ion-row>\n      <ion-col class="col-1" col-8>Traffic Cones</ion-col>\n      <ion-col class="col-1">{{cones}}</ion-col>\n      </ion-row>\n\n      <ion-row>\n      <ion-col class="col-1" col-8>Traffic Barriers</ion-col>\n      <ion-col class="col-1">{{barriers}}</ion-col>\n      </ion-row>\n\n      <ion-row>\n      <ion-col class="col-1" col-8>Traffic Signages</ion-col>\n      <ion-col class="col-1">{{signage}}</ion-col>\n      </ion-row>\n\n      <ion-row>\n      <ion-col class="col-1" col-8>Blinkers/Flashing</ion-col>\n      <ion-col class="col-1">{{blinkers}}</ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="col-1" col-8>Flagman</ion-col>\n        <ion-col class="col-1">{{flagman}}</ion-col>\n      </ion-row>\n\n    </ion-grid>\n  \n\n  <ion-card >\n      <ion-card-header class="ion-card-content">Comment/Others</ion-card-header>\n      <ion-card-content>\n        <ion-textarea disabled = "true" rows="4" cols="60" [(ngModel)]="comment" class="textarea" placeholder="Comment here"></ion-textarea>\n        <ion-slides *ngIf = "images != null && images.length != 0" slidesPerView = "3" pager = "ture" paginationType = "fraction">\n          <ion-slide *ngFor = "let image of images">\n              <img style="padding: 8px" src="{{image}}">\n          </ion-slide>\n        </ion-slides>\n      </ion-card-content>\n        \n  </ion-card>\n  \n  </ion-content>\n'/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/work-task/work-task.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], WorkTaskPage);
    return WorkTaskPage;
}());

//# sourceMappingURL=work-task.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_info__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportPage = (function () {
    function ReportPage(loadingCtrl, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.progress = [];
    }
    ReportPage.prototype.openHistory = function (index) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__info_info__["a" /* InfoPage */], { item: this.progress[index] });
    };
    ReportPage.prototype.ionViewDidLoad = function () {
        var self = this;
        console.log('ionViewDidLoad ReportPage');
        this.workkey = this.navParams.get('item');
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('workprogress/' + '/' + this.workkey + '/').on('value', function (snap) {
            if (snap.val() != null) {
                var value = Object.keys(snap.val()).map(function (key) { return snap.val()[key]; });
                var keys = Object.keys(snap.val());
                self.progress = value;
                console.log(value);
            }
            setTimeout(function () {
                loading.dismiss();
                // this.navCtrl.pop();
            }, 500);
        });
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/workpermit/').on('value', function (snap) {
            var values = Object.keys(snap.val()).map(function (key) { return snap.val()[key]; });
            var keys = Object.keys(snap.val());
            var index = keys.indexOf(self.workkey);
            if (index != -1) {
                self.contract = values[index].email;
                self.contract = String(self.contract).split('@')[0];
            }
            console.log(values);
        });
    };
    ReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-report',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/report/report.html"*/'<ion-header>\n\n  <ion-navbar color="turquoise">\n  \n  <ion-title class>Progress Report History</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <ion-card>\n        <ion-card-header class="ion-card-header">\n          <h2 class="h2">Report History</h2>\n        </ion-card-header>\n\n        <ion-card-content class="bg">\n        <ion-list>\n            <button *ngFor = "let part of progress; let i = index;" ion-item block class="bg" (click)="openHistory(i)"> \n              <ion-icon name="document" item-start ></ion-icon>\n              <marquee>\n                Report of {{part.date}} by {{contract}}\n              </marquee>\n            </button>\n        </ion-list>\n        </ion-card-content>   \n    </ion-card>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/report/report.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ReportPage);
    return ReportPage;
}());

//# sourceMappingURL=report.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteStaffPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__work_permit_work_permit__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SiteStaffPage = (function () {
    function SiteStaffPage(loadingCtrl, af, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.af = af;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.workpermit = [];
        this.keys = [];
    }
    SiteStaffPage.prototype.openWorkPermit = function (index) {
        var path = String(this.workpermit[index].id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__work_permit_work_permit__["a" /* WorkPermitPage */], { item: path, desc: this.workpermit[index].desc, workpermitNo: this.workpermit[index].workpermitNo, name: this.name });
    };
    SiteStaffPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Task6Page');
        var self = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.company = this.navParams.get('item');
        this.name = this.navParams.get('name');
        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('workpermit/').on('value', function (snap) {
            setTimeout(function () {
                loading.dismiss();
                // this.navCtrl.pop();
            }, 500);
            if (snap.val() != null) {
                var values = Object.keys(snap.val()).map(function (key) { return snap.val()[key]; });
                var keys = Object.keys(snap.val());
                self.keys = keys;
                self.workpermit = values.filter(function (value) { return value.consession == self.company; });
                self.workpermit = self.workpermit.filter(function (value) { return value.finished == "true"; });
            }
        });
    };
    SiteStaffPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-site-staff',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/site-staff/site-staff.html"*/'<ion-header>\n    <ion-navbar color="turquoise">\n    \n    <ion-title>{{name}}</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content>\n    <ion-card>\n        <ion-card-header text-center class="ion-card-header">\n        LIST OF TASK\n        </ion-card-header>\n     \n        <ion-list>\n        <div text-center>\n            <ion-item *ngFor ="let work of workpermit let i = index" >\n              <ion-icon name="clipboard" item-start></ion-icon> \n              <p (click)="openWorkPermit(i)">WORK PERMIT {{work.workpermitNo}}</p>    \n            </ion-item>\n        </div>\n        </ion-list>\n        \n      </ion-card>    \n</ion-content>\n'/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/site-staff/site-staff.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SiteStaffPage);
    return SiteStaffPage;
}());

//# sourceMappingURL=site-staff.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkPermitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_checklist_new_checklist__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__work_task2_work_task2__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__report_report__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WorkPermitPage = (function () {
    function WorkPermitPage(navCtrl, navParams, loadingCtrl, af) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.af = af;
        this.checklist = [];
        this.keys = [];
        this.staffid = "";
        this.name = "";
        this.date = "";
    }
    WorkPermitPage.prototype.openNewChecklistPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__new_checklist_new_checklist__["a" /* NewChecklistPage */], { item: this.workkey });
    };
    WorkPermitPage.prototype.openReportPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__report_report__["a" /* ReportPage */], { item: this.workkey });
    };
    WorkPermitPage.prototype.openWorkTask2 = function (index) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__work_task2_work_task2__["a" /* WorkTask2Page */], {
            pavement: this.checklist[index].pavement,
            landscape: this.checklist[index].landscape,
            road: this.checklist[index].road,
            cleanliness: this.checklist[index].cleanliness,
            others: this.checklist[index].others,
            comment: this.checklist[index].comment,
            images: this.checklist[index].images,
            date: this.checklist[index].date,
        });
    };
    WorkPermitPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var self = this;
        this.workkey = this.navParams.get('item');
        this.desc = this.navParams.get('desc');
        this.workpermitNo = this.navParams.get('workpermitNo');
        this.name = this.navParams.get('name');
        console.log(this.workkey);
        console.log('ionViewDidLoad ChecklistPage');
        this.af.authState.subscribe(function (user) {
            _this.userid = user.uid;
            console.log(user);
            var loading = _this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading.present();
            try {
                __WEBPACK_IMPORTED_MODULE_6_firebase__["database"]().ref('newchecklist/' + _this.workkey + '/' + _this.userid + '/').on('value', function (snap) {
                    console.log(snap.val());
                    setTimeout(function () {
                        loading.dismiss();
                        // this.navCtrl.pop();
                    }, 500);
                    if (snap.val() != null) {
                        var value = Object.keys(snap.val()).map(function (key) { return snap.val()[key]; });
                        var keys = Object.keys(snap.val());
                        console.log(value);
                        console.log(keys);
                        // let data = Object.value(snap.val());
                        self.checklist = value;
                        self.keys = keys;
                    }
                });
            }
            catch (error) {
                setTimeout(function () {
                    loading.dismiss();
                    // this.navCtrl.pop();
                }, 500);
            }
        });
    };
    WorkPermitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-work-permit',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/work-permit/work-permit.html"*/'<ion-header>\n\n    <ion-navbar color="turquoise">\n    \n    <ion-title class><marquee>Work Permit {{workpermitNo}}</marquee></ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n      \n      <ion-card>\n          <ion-card-header class="ion-card-header">\n            <h2 class="h2">Task Summary</h2>\n          </ion-card-header>\n          \n          <ion-card-content class="ion-card-content">\n            <br>\n            <p>{{desc}}</p>\n          </ion-card-content>\n        </ion-card>\n    \n        <div text-right>\n          Checklist\n        <button class="ion-icon">\n        <ion-icon name="add-circle" (click)="openNewChecklistPage()"></ion-icon>\n        </button>\n        </div>\n    \n        <ion-card>\n            <ion-card-header class="ion-card-header">\n              <h2 class="h2">Report History</h2>\n            </ion-card-header>\n    \n            <ion-card-content class="bg">\n            <ion-list>\n                <button *ngFor = "let cell of checklist; let i = index; " ion-item class="bg" (click)="openWorkTask2(i)"> \n                    <ion-icon name="document" item-start ></ion-icon>\n                    <marquee>\n                      Report of {{cell.date}} by {{name}}\n                    </marquee>\n                  </button>\n                   \n            </ion-list>\n            </ion-card-content>   \n        </ion-card>\n        <div text-center>\n          <button ion-button color="turquoise" (click)="openReportPage()">\n            View Progress Report\n          </button>\n          </div>\n    \n  </ion-content>'/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/work-permit/work-permit.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _d || Object])
    ], WorkPermitPage);
    return WorkPermitPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=work-permit.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewChecklistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewChecklistPage = (function () {
    function NewChecklistPage(af, toastCtrl, navCtrl, alertCtrl, navParams, loadingCtrl, camera, action) {
        this.af = af;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.camera = camera;
        this.action = action;
        this.pavement = "Need Repair";
        this.landscape = "Need Repair";
        this.road = "Need Repair";
        this.cleanliness = "Need Repair";
        this.others = "Need Repair";
        this.images = [];
        /**this.mypicref=firebase.storage().ref('/')**/
    }
    NewChecklistPage.prototype.submit = function () {
        var _this = this;
        var self = this;
        var alert = this.alertCtrl.create({
            title: 'Save information',
            message: 'Do you want to save information?',
            buttons: [
                {
                    text: 'Yes',
                    role: 'Yes',
                    handler: function () {
                        console.log('Yes clicked');
                        var displayDate = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
                        if (self.comment == null || self.comment == '') {
                            self.toastCtrl.create({
                                message: 'Please type comment',
                                duration: 3000,
                                position: 'bottom'
                            }).present();
                            return;
                        }
                        var progress_cell = {
                            pavement: self.pavement,
                            landscape: self.landscape,
                            road: self.road,
                            cleanliness: self.cleanliness,
                            others: self.others,
                            comment: self.comment,
                            images: self.images,
                            date: displayDate,
                        };
                        console.log(progress_cell);
                        var loading = _this.loadingCtrl.create({
                            content: 'Please wait...'
                        });
                        loading.present();
                        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('newchecklist/' + _this.workkey + '/' + _this.userid + '/').push(progress_cell).then(function (resp) {
                            console.log('test', resp);
                            setTimeout(function () {
                                self.comment = "";
                                self.images = [];
                                loading.dismiss();
                                _this.presentToast();
                                _this.navCtrl.pop();
                            }, 500);
                        }, function (err) {
                            console.log('error', err);
                            setTimeout(function () {
                                loading.dismiss();
                                self.comment = "";
                                self.images = [];
                                // this.navCtrl.pop();
                            }, 500);
                        });
                    }
                },
                {
                    text: 'No',
                    handler: function () {
                        console.log('No clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    NewChecklistPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad NewChecklistPage');
        this.workkey = this.navParams.get('item');
        this.af.authState.subscribe(function (user) {
            _this.userid = user.uid;
        });
    };
    NewChecklistPage.prototype.captureProfile = function () {
        var _this = this;
        this.action.create({
            title: " Choose Image Source",
            buttons: [
                {
                    text: "Choose From Gallery",
                    handler: function () {
                        _this.AddImagefromGallery("");
                    }
                },
                {
                    text: "Take Picture",
                    handler: function () {
                        _this.AddImagefromCamera("");
                    }
                }
            ]
        }).present();
    };
    NewChecklistPage.prototype.resizeImage = function (url, width, height) {
        var sourceImage = new Image();
        var self = this;
        sourceImage.onload = function () {
            // Create a canvas with the desired dimensions
            var canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;
            // Scale and draw the source image to the canvas
            canvas.getContext("2d").drawImage(sourceImage, 0, 0, width, height);
            // Convert the canvas to a data URL in PNG format
            self.imageURI = canvas.toDataURL();
            self.images.push(self.imageURI);
            setTimeout(function () {
                self.loader.dismiss();
                // this.navCtrl.pop();
            }, 500);
            console.log(self.images);
        };
        sourceImage.src = url;
    };
    NewChecklistPage.prototype.AddImagefromGallery = function (event) {
        var self = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        self.loader = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        self.loader.present();
        this.camera.getPicture(options).then(function (imageData) {
            self.resizeImage('data:image/png;base64,' + imageData, 256, 216);
        }, function (err) {
            setTimeout(function () {
                self.loader.dismiss();
                // this.navCtrl.pop();
            }, 500);
            console.log(err);
        });
    };
    NewChecklistPage.prototype.AddImagefromCamera = function (event) {
        var self = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        self.loader = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        self.loader.present();
        this.camera.getPicture(options).then(function (imageData) {
            self.resizeImage('data:image/png;base64,' + imageData, 256, 216);
        }, function (err) {
            setTimeout(function () {
                self.loader.dismiss();
                // this.navCtrl.pop();
            }, 500);
            console.log(err);
        });
    };
    NewChecklistPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'User information was update successfully',
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    NewChecklistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-checklist',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/new-checklist/new-checklist.html"*/'<ion-header>\n\n    <ion-navbar color="turquoise">\n    \n    <ion-title class>New Checklist</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content>\n\n    <ion-card>\n\n        <ion-grid>\n        <ion-row>\n          <ion-col col-7><b>CHECKLIST</b></ion-col>\n          <ion-col col-5><b>ACCEPT/REPAIR</b></ion-col>\n        </ion-row>\n        </ion-grid>\n  \n        <ion-list>\n          <ion-item>\n            <ion-label>Pavement</ion-label>\n            <ion-select [(ngModel)]="pavement">\n                <ion-option value="Accept">Accept</ion-option>\n                <ion-option value="Need Repair">Need Repair</ion-option>\n            </ion-select>\n          </ion-item>\n  \n          <ion-item>\n            <ion-label>Landscape</ion-label>\n            <ion-select [(ngModel)]="landscape">\n                <ion-option value="Accept">Accept</ion-option>\n                <ion-option value="Need Repair">Need Repair</ion-option>\n            </ion-select>\n          </ion-item>\n  \n          <ion-item>\n            <ion-label>Road Furnitures</ion-label>\n            <ion-select [(ngModel)]="road">\n                <ion-option value="Accept">Accept</ion-option>\n                <ion-option value="Need Repair">Need Repair</ion-option>\n            </ion-select>\n          </ion-item>\n  \n          <ion-item>\n            <ion-label>Cleanliness</ion-label>\n            <ion-select [(ngModel)]="cleanliness">\n                <ion-option value="Accept">Accept</ion-option>\n                <ion-option value="Need Repair">Need Repair</ion-option>\n            </ion-select>\n          </ion-item>\n  \n          <ion-item>\n            <ion-label>Others</ion-label>\n            <ion-select [(ngModel)]="others">\n                <ion-option value="Accept">Accept</ion-option>\n                <ion-option value="Need Repair">Need Repair</ion-option>\n            </ion-select>\n          </ion-item>\n  \n        </ion-list>\n      </ion-card>\n\n      <ion-card >\n        <ion-card-header class="ion-card-content">Comment/Others</ion-card-header>\n        <ion-card-content>\n          <ion-textarea rows="4" cols="60" class="textarea" [(ngModel)]="comment" placeholder="Comment here"></ion-textarea>\n          <ion-slides *ngIf = "images.length != 0" slidesPerView = "3" pager = "ture" paginationType = "fraction">\n              <ion-slide *ngFor = "let image of images">\n                  <img style="padding: 8px" src="{{image}}">\n              </ion-slide>\n            </ion-slides>\n        </ion-card-content>\n      </ion-card>\n    \n          \n    \n        <div text-right>\n          <button color="turquoise" ion-button icon-right  (click)="captureProfile()">Upload Image</button> \n          <button ion-button (click)="submit()">Submit Report</button>\n        </div>\n    \n  \n</ion-content>\n'/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/new-checklist/new-checklist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], NewChecklistPage);
    return NewChecklistPage;
}());

//# sourceMappingURL=new-checklist.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkTask2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the WorkTask2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WorkTask2Page = (function () {
    function WorkTask2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pavement = "Need Repair";
        this.landscape = "Need Repair";
        this.road = "Need Repair";
        this.cleanliness = "Need Repair";
        this.others = "Need Repair";
        this.images = [];
        this.date = "";
    }
    WorkTask2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WorkTask2Page');
        this.pavement = this.navParams.get('pavement');
        this.landscape = this.navParams.get('landscape');
        this.road = this.navParams.get('road');
        this.cleanliness = this.navParams.get('cleanliness');
        this.others = this.navParams.get('others');
        this.comment = this.navParams.get('comment');
        this.images = this.navParams.get('images');
        this.date = this.navParams.get('date');
    };
    WorkTask2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-work-task2',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/work-task2/work-task2.html"*/'<ion-header>\n\n    <ion-navbar color="turquoise">\n    \n    <ion-title class>Checklist Report History</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content>\n\n    <div text-center>\n    <h5>Checklist report on {{date}}</h5>\n    </div>\n                \n    <ion-grid>\n        <ion-row>\n        <ion-col class="col-head" col-8 >CHECKLIST</ion-col>\n        <ion-col class="col-head" col-4 >STATUS</ion-col>\n        </ion-row> \n              \n        <ion-row>\n        <ion-col class="col-1" col-8>Pavement</ion-col>\n        <ion-col class="col-1">{{pavement}}</ion-col>\n        </ion-row>\n              \n        <ion-row>\n        <ion-col class="col-1" col-8>Landscape</ion-col>\n        <ion-col class="col-1">{{landscape}}</ion-col>\n        </ion-row>\n              \n        <ion-row>\n        <ion-col class="col-1" col-8>Road Furnitures</ion-col>\n        <ion-col class="col-1">{{road}}</ion-col>\n        </ion-row>\n              \n        <ion-row>\n        <ion-col class="col-1" col-8>Cleanliness</ion-col>\n        <ion-col class="col-1">{{cleanliness}}</ion-col>\n        </ion-row>\n              \n        <ion-row>\n        <ion-col class="col-1" col-8>Others</ion-col>\n        <ion-col class="col-1">{{others}}</ion-col>\n        </ion-row>\n              \n    </ion-grid>\n                \n              \n    <ion-card >\n        <ion-card-header class="ion-card-content">Comment/Others</ion-card-header>\n        <ion-card-content>\n            <ion-textarea disabled = "true" rows="4" cols="60" [(ngModel)]="comment" class="textarea" placeholder="Comment here"></ion-textarea>\n            <ion-slides *ngIf = "images != null && images.length != 0" slidesPerView = "3" pager = "ture" paginationType = "fraction">\n            <ion-slide *ngFor = "let image of images">\n                <img style="padding: 8px" src="{{image}}">\n            </ion-slide>\n            </ion-slides>\n        </ion-card-content>\n                      \n    </ion-card>\n          \n</ion-content>\n'/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/work-task2/work-task2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], WorkTask2Page);
    return WorkTask2Page;
}());

//# sourceMappingURL=work-task2.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Task3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Task3Page = (function () {
    function Task3Page(navCtrl, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
    }
    Task3Page.prototype.openAlertPage = function () {
        var alert = this.alertCtrl.create({
            title: 'Confirm Save?',
            cssClass: 'alertColor',
            buttons: [
                {
                    text: 'Yes',
                    role: 'Save',
                    handler: function () {
                        console.log('Save clicked');
                    }
                },
                {
                    text: 'No',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    Task3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Task3Page');
    };
    Task3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-task3',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/task3/task3.html"*/'<!--\n  Generated template for the Task5Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="turquoise">\n      <ion-title>Edit Work Permit No 1</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n  \n      <ion-list>\n          <ion-item>\n            <ion-label>Select Contractor</ion-label>\n            <ion-select name="Select Contractor" >\n              <ion-option value="Contractor A">Contractor A</ion-option>\n              <ion-option value="Contractor B">Contractor B</ion-option>\n              <ion-option value="Contractor C">Contractor C</ion-option>\n              <ion-option value="Contractor D">Contractor D</ion-option>\n              <ion-option value="Contractor E">Contractor E</ion-option>\n              <ion-option value="Contractor F">Contractor F</ion-option>\n              <ion-option value="Contractor G">Contractor G</ion-option>\n              <ion-option value="Contractor H">Contractor H</ion-option>\n              <ion-option value="Contractor I">Contractor I</ion-option>\n              <ion-option value="Contractor J">Contractor J</ion-option>\n              <ion-option value="Contractor K">Contractor K</ion-option>\n              <ion-option value="Contractor L">Contractor L</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n\n    \n          <ion-grid>\n            <ion-row>\n              <ion-col col-4> <img src="./assets/imgs/Besraya.png" style="width:100%;"/> </ion-col>\n              <ion-col><ion-checkbox></ion-checkbox></ion-col>\n\n              <ion-col col-4> <img src="./assets/imgs/Lekas.png" style="width:100%;"/> </ion-col>\n              <ion-col><ion-checkbox></ion-checkbox></ion-col>\n\n              <ion-col col-4> <img src="./assets/imgs/Npe.png" style="width:100%;"/> </ion-col>\n              <ion-col><ion-checkbox></ion-checkbox></ion-col>\n              </ion-row>\n        \n          \n            </ion-grid>\n\n            <ion-card-header text-center class="ion-card-header">\n                Create Username & Password For Contractor \n            </ion-card-header>\n\n            Username\n            <ion-item>\n              <ion-input [(ngModel)]="myText" type="text" ></ion-input>\n            </ion-item>\n\n            Password\n            <ion-item>\n              <ion-input [(ngModel)]="myText" type="text" ></ion-input>\n            </ion-item>\n\n      <div text-right>\n          <button (click)="openAlertPage()" color="turquoise" ion-button>Save</button>\n        </div>\n  \n  </ion-content>\n  '/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/task3/task3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], Task3Page);
    return Task3Page;
}());

//# sourceMappingURL=task3.js.map

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/acknowledge/acknowledge.module": [
		364,
		42
	],
	"../pages/admin-astaff/admin-astaff.module": [
		365,
		41
	],
	"../pages/admin-contractor/admin-contractor.module": [
		366,
		40
	],
	"../pages/admin/admin.module": [
		367,
		39
	],
	"../pages/administrative/administrative.module": [
		368,
		38
	],
	"../pages/administrative1/administrative1.module": [
		369,
		37
	],
	"../pages/administrative2/administrative2.module": [
		370,
		36
	],
	"../pages/administrative3/administrative3.module": [
		371,
		35
	],
	"../pages/adminstaff/adminstaff.module": [
		372,
		34
	],
	"../pages/checklist/checklist.module": [
		373,
		33
	],
	"../pages/checklist1/checklist1.module": [
		374,
		32
	],
	"../pages/companies/companies.module": [
		375,
		31
	],
	"../pages/contractor/contractor.module": [
		376,
		30
	],
	"../pages/history/history.module": [
		377,
		29
	],
	"../pages/info/info.module": [
		378,
		28
	],
	"../pages/new-checklist/new-checklist.module": [
		379,
		27
	],
	"../pages/progress/progress.module": [
		380,
		26
	],
	"../pages/progress2/progress2.module": [
		381,
		25
	],
	"../pages/register-as/register-as.module": [
		382,
		24
	],
	"../pages/register/register.module": [
		383,
		23
	],
	"../pages/register1/register1.module": [
		384,
		22
	],
	"../pages/register2/register2.module": [
		385,
		21
	],
	"../pages/register3/register3.module": [
		386,
		20
	],
	"../pages/register4/register4.module": [
		387,
		19
	],
	"../pages/register5/register5.module": [
		388,
		18
	],
	"../pages/report/report.module": [
		389,
		17
	],
	"../pages/site-staff/site-staff.module": [
		390,
		16
	],
	"../pages/staff1/staff1.module": [
		391,
		15
	],
	"../pages/staff2/staff2.module": [
		392,
		14
	],
	"../pages/task/task.module": [
		393,
		13
	],
	"../pages/task1/task1.module": [
		394,
		12
	],
	"../pages/task2/task2.module": [
		395,
		11
	],
	"../pages/task3/task3.module": [
		396,
		10
	],
	"../pages/task4/task4.module": [
		397,
		9
	],
	"../pages/task5/task5.module": [
		398,
		8
	],
	"../pages/task6/task6.module": [
		399,
		7
	],
	"../pages/test/test.module": [
		400,
		6
	],
	"../pages/update/update.module": [
		401,
		5
	],
	"../pages/upload/upload.module": [
		402,
		4
	],
	"../pages/view-admin/view-admin.module": [
		403,
		3
	],
	"../pages/work-permit/work-permit.module": [
		404,
		2
	],
	"../pages/work-task/work-task.module": [
		405,
		1
	],
	"../pages/work-task2/work-task2.module": [
		406,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 203;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Administrative3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_admin__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the Administrative3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Administrative3Page = (function () {
    function Administrative3Page(navCtrl, alertCtrl, navParams, fdb, load) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.fdb = fdb;
        this.load = load;
    }
    Administrative3Page.prototype.add = function () {
        var _this = this;
        var loading = this.load.create({
            duration: 4000
        });
        loading.present();
        var push = {
            name: this.name,
            staffid: this.staffid,
            username: this.username,
            password: this.password,
            email: this.email,
            name1: this.name1,
            staffid1: this.staffid1,
            username1: this.username1,
            password1: this.password1,
            email1: this.email
        };
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('staff/').push(push);
        this.alertCtrl.create({
            title: 'Confirm Save?',
            message: 'You have successfully edit . Redirect To Home',
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__admin_admin__["a" /* AdminPage */]);
                    }
                }
            ]
        }).present();
    };
    /** openAlertPage(){
       let alert = this.alertCtrl.create({
         title: 'Confirm Delete?',
         cssClass:'alertColor',
         buttons: [
           {
             text: 'Yes',
             role: 'Save',
             
             handler: () => {
               console.log('Save clicked');
       
             }
           },
           {
             text: 'No',
             handler: () => {
               console.log('Cancel clicked');
             }
           }
         ]
         
       });
       alert.present();
     }*/
    Administrative3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Administrative3Page');
    };
    Administrative3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-administrative3',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/administrative3/administrative3.html"*/'<!--\n  Generated template for the Administrative2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="turquoise">\n    <ion-title> Administrative 1</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-card class = "style" >\n  <ion-card-content>\n    Name\n    <ion-item>\n    <ion-input [(ngModel)]="name1" type="text" ></ion-input>\n   </ion-item>\n  \n    Staff ID\n   <ion-item>\n    <ion-input  [(ngModel)]="staffid1" type="text" ></ion-input>\n  </ion-item>\n \n  Username\n    <ion-item>\n    <ion-input [(ngModel)]="username1" type="text" ></ion-input>\n  </ion-item>\n\n  Password\n    <ion-item>\n    <ion-input [(ngModel)]="password1" type="text" ></ion-input>  \n  </ion-item>\n\n  Email\n  <ion-item>\n    <ion-input [(ngModel)]="email1" type="text" ></ion-input>\n  </ion-item>\n    \n  </ion-card-content>\n</ion-card>\n\n<div text-right>\n  <button (click)="add()" color="turquoise" ion-button>SAVE</button>\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/administrative3/administrative3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], Administrative3Page);
    return Administrative3Page;
}());

//# sourceMappingURL=administrative3.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoryPage = (function () {
    function HistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoryPage');
    };
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/history/history.html"*/'<ion-header>\n\n  <ion-navbar color="turquoise">\n  \n  <ion-title class>Report History</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <div text-center><h5>Report of 01-01-2018</h5></div>\n\n    <ion-card>\n     \n      <ion-card-header class="ion-card-header">\n        <h2 class="h2">Progress Update</h2>\n      </ion-card-header>\n      \n      <ion-card-content class="ion-card-content">\n        <br>\n        <p>Safety Vest still on progress.................</p>\n        <br>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n                <img class="image" src="./assets/imgs/satu.jpg" style="width:100px;height:100px;"/>  \n            </ion-col>\n            <ion-col>\n                <img class="image" src="./assets/imgs/dua.jpg" style="width:100px;height:100px;"/>  \n            </ion-col>\n            <ion-col>\n                <img class="image" src="./assets/imgs/tiga.jpg" style="width:100px;height:100px;"/>  \n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n              <ion-col>Date :</ion-col>\n              <ion-col>Time :</ion-col>\n          </ion-row>\n          </ion-grid>\n      </ion-card-content>\n\n      </ion-card>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/history/history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Progress2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Progress2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Progress2Page = (function () {
    function Progress2Page(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    Progress2Page.prototype.saveButton = function () {
        var alert = this.alertCtrl.create({
            title: 'Complete progress',
            message: 'Confirm save progress?',
            buttons: [
                {
                    text: 'Yes',
                    role: 'Yes',
                    handler: function () {
                        console.log('Yes clicked');
                    }
                },
                {
                    text: 'No',
                    handler: function () {
                        console.log('No clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    Progress2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Progress2Page');
    };
    Progress2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-progress2',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/progress2/progress2.html"*/'\n\n<ion-header>\n\n  <ion-navbar color="turquoise">\n  \n  <ion-title class>Progress Update</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n  <ion-card>\n    <ion-card-header class="ion-card-header">\n    <h2 class="h2">Progress(if available)</h2> \n    </ion-card-header>\n    <ion-card-content class="ion-card-content">\n      <br>\n      <ion-textarea rows="4" cols="50" placeholder="Add progress.." [(ngModel)]="progress"></ion-textarea>\n    </ion-card-content>\n  </ion-card>\n  </ion-list>\n\n  <ion-list> \n  <ion-card style="background-color:rgb(231, 231, 231)">\n      <ion-card-header><b>Upload Form</b></ion-card-header>\n\n      <ion-card-content>\n        Please upload anything here.\n        <br>\n        <div text-center>\n            <button ion-button color="turquoise" (click)="captureProfile()" >Upload</button>\n            <img [src]="captureDataUrl2" *ngIf="captureDataUrl2">  \n            <br>   \n        </div>\n        <br>\n        <ion-input class="inputfile" type="text"></ion-input>\n        <br>\n\n      </ion-card-content>\n    \n    </ion-card>\n    <div text-right>\n        <button ion-button color="turquoise" (click)="saveButton()">COMPLETE</button>\n        \n    </div>\n   \n  </ion-list>\n\n    \n     \n</ion-content>\n\n\n'/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/progress2/progress2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], Progress2Page);
    return Progress2Page;
}());

//# sourceMappingURL=progress2.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterAsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RegisterAsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterAsPage = (function () {
    function RegisterAsPage(navCtrl, alertCtrl, navParams, viewCtrl, af, fdb) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.af = af;
        this.fdb = fdb;
        this.item = [];
    }
    RegisterAsPage.prototype.confirmEdit = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm update',
            message: 'Do you want to update this information?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Edit clicked');
                        _this.item.name = _this.name;
                        _this.item.username = _this.username;
                        _this.item.staffid = _this.staffid;
                        _this.item.id = _this.userid;
                        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('staff/' + _this.item.id).update(_this.item).then(function (resp) {
                            console.log('test', resp);
                        }, function (err) {
                            console.log('error', err);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    /*update(){
      // this.userid=this.item.userid;
      // this.name=this.item.name;
      // this.staffid=this.item.staffid;
      // this.username=this.item.username;
  
      this.item.name=this.name;
      this.item.username=this.username;
      this.item.staffid=this.staffid;
      this.item.id=this.userid;
  
      console.log('TEST',this.item);
  
        firebase.database().ref('staff/'+this.item.id).update(this.item).then(resp=>{
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
    RegisterAsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterAsPage');
        this.item = this.navParams.get('item');
        this.userid = this.item.id;
        this.name = this.item.name;
        this.staffid = this.item.staffid;
        this.username = this.item.username;
        this.password = this.item.password;
        this.email = this.item.email;
    };
    RegisterAsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    RegisterAsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register-as',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/register-as/register-as.html"*/'<!--\n  Generated template for the RegisterAsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="turquoise">\n    <ion-title>Update Staff</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card class = "style" >\n    <ion-card-content>\n    Name\n      <ion-item>\n      <ion-input [(ngModel)]="name" type="text" ></ion-input>\n     </ion-item>\n  \n    Staff ID\n     <ion-item>\n      <ion-input  [(ngModel)]="staffid" type="text" ></ion-input>\n    </ion-item>\n  \n    Username\n      <ion-item>\n      <ion-input [(ngModel)]="username" type="text" ></ion-input>\n    </ion-item>\n  \n    Password\n      <ion-item>\n      <ion-input [(ngModel)]="password" type="password" [disabled]="true"></ion-input>\n    </ion-item>\n  \n    Email\n    <ion-item>\n      <ion-input [(ngModel)]="email" type="email" [disabled]="true"></ion-input>\n    </ion-item>\n  \n    </ion-card-content>\n  </ion-card>\n  \n  <div text-right>\n    <button (click)="close()" color="turquoise" ion-button>CLOSE</button>\n    <button (click)="confirmEdit()" color="turquoise" ion-button>EDIT</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/register-as/register-as.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], RegisterAsPage);
    return RegisterAsPage;
}());

//# sourceMappingURL=register-as.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task3_task3__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__upload_upload__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the Task2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Task2Page = (function () {
    function Task2Page(navCtrl, navParams, fdb, af, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fdb = fdb;
        this.af = af;
        this.alertCtrl = alertCtrl;
        this.item = [];
        this.contractors = [];
        this.start = navParams.get('start');
        this.finish = navParams.get('finish');
        this.workpermitNo = navParams.get('workpermitNo');
        this.desc = navParams.get('desc');
        this.appletter = navParams.get('appletter');
        this.drawing = navParams.get('drawing');
        this.work = navParams.get('work');
        this.statement = navParams.get('statement');
        this.insletter = navParams.get('insletter');
        this.trafficplan = navParams.get('trafficplan');
        this.depo = navParams.get('depo');
        this.charges = navParams.get('charges');
        this.permit = navParams.get('permit');
        this.contractor = "";
        this.consession = "";
        this.email = "";
    }
    Task2Page.prototype.openTask3Page = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__task3_task3__["a" /* Task3Page */]);
    };
    Task2Page.prototype.openUploadPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__upload_upload__["a" /* UploadPage */]);
    };
    Task2Page.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad Task2Page');
        this.af.authState.subscribe(function (user) {
            console.log(user);
            _this.fdb.list('/contractor/').subscribe(function (data) {
                console.log("The Data-->", data);
                _this.contractors = data;
            });
        });
        this.item = this.navParams.get('item');
        this.contractor = this.item.contractor;
        this.consession = this.item.charges;
        this.email = this.item.email;
    };
    Task2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-task2',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/task2/task2.html"*/'<!--\n  Generated template for the Task2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="turquoise">\n    <ion-title>Update Work Permit</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-list>\n        <ion-item>\n         <ion-label>Select Contractor</ion-label>\n          <ion-select [(ngModel)]="contractor">\n            <ion-option *ngFor="let contractor of contractors" value="{{contractor.compname}}">{{contractor.compname}}</ion-option>  \n          </ion-select>\n        </ion-item>\n    </ion-list>\n\n    <ion-list>\n      <ion-item>\n          <ion-label>Select Consession</ion-label>\n          <ion-select [(ngModel)]="consession">\n            <ion-option>Besraya</ion-option>\n            <ion-option>Lekas</ion-option>\n            <ion-option>NPE</ion-option>\n          </ion-select>\n      </ion-item>\n    </ion-list>\n       \n        <h5 text-center>\n            Credentials of Contractor \n        </h5>\n\n        \n        <ion-item>\n          <ion-label>USERNAME:</ion-label>\n          <ion-input [(ngModel)]="email" type="email"></ion-input>\n        </ion-item>\n\n        <br>\n\n        <div text-right>\n          <button (click)="update()" color="turquoise" ion-button>UPDATE</button>\n        </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/task2/task2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], Task2Page);
    return Task2Page;
}());

//# sourceMappingURL=task2.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestPage = (function () {
    function TestPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestPage');
    };
    TestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-test',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/test/test.html"*/'<!--\n  Generated template for the TestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>test</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/test/test.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TestPage);
    return TestPage;
}());

//# sourceMappingURL=test.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__administrative2_administrative2__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewAdminPage = (function () {
    function ViewAdminPage(navCtrl, navParams, fdb, af, viewCtrl, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fdb = fdb;
        this.af = af;
        this.viewCtrl = viewCtrl;
        this.modal = modal;
        this.item = [];
    }
    ViewAdminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewAdminPage');
        this.item = this.navParams.get('item');
        this.userid = this.item.id;
        this.name = this.item.name;
        this.staffid = this.item.staffid;
        this.username = this.item.username;
        this.email = this.item.email;
    };
    ViewAdminPage.prototype.edit = function (item) {
        var _this = this;
        console.log(item);
        var abc = this.modal.create(__WEBPACK_IMPORTED_MODULE_4__administrative2_administrative2__["a" /* Administrative2Page */], { item: item });
        abc.onDidDismiss(function (_) {
            _this.ionViewDidLoad();
        });
        abc.present();
    };
    ViewAdminPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ViewAdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view-admin',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/view-admin/view-admin.html"*/'\n<ion-header>\n\n  <ion-navbar color="turquoise">\n    <ion-title>{{name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    \n        <ion-card class="style">\n          <ion-card-content>\n            \n            <ion-item>\n              <h2>Name</h2>\n              <p>{{name}}</p>\n            </ion-item>\n\n            <ion-item>\n              <h2>Staff ID</h2>\n              <p>{{staffid}}</p>\n            </ion-item>\n\n            <ion-item>\n              <h2>Username</h2>\n              <p>{{username}}</p>\n            </ion-item>\n\n            <ion-item>\n              <h2>Email</h2>\n              <p>{{email}}</p>\n            </ion-item>\n\n          </ion-card-content>\n        </ion-card>\n        \n        <div text-right>\n          <button (click)="close()" color="turquoise" ion-button>Close</button>\n          <button (click)="edit(id)" color="turquoise" ion-button>EDIT</button>\n        </div>\n        \n</ion-content>\n'/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/view-admin/view-admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], ViewAdminPage);
    return ViewAdminPage;
}());

//# sourceMappingURL=view-admin.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(286);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_acknowledge_acknowledge__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_admin_admin__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_admin_contractor_admin_contractor__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_adminstaff_adminstaff__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_admin_astaff_admin_astaff__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_administrative_administrative__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_administrative1_administrative1__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_administrative2_administrative2__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_administrative3_administrative3__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_checklist_checklist__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_checklist1_checklist1__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_contractor_contractor__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_companies_companies__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_history_history__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_info_info__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_new_checklist_new_checklist__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_progress_progress__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_progress2_progress2__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_register_register__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_register1_register1__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_register2_register2__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_register3_register3__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_register4_register4__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_register5_register5__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_register_as_register_as__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_report_report__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_staff1_staff1__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_staff2_staff2__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_task_task__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_site_staff_site_staff__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_task1_task1__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_task2_task2__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_task3_task3__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_task4_task4__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_task5_task5__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_task6_task6__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_test_test__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_update_update__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_upload_upload__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_view_admin_view_admin__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_work_task_work_task__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_work_task2_work_task2__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_work_permit_work_permit__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51_angularfire2__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52_angularfire2_database__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53_angularfire2_auth__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { EmailComposer } from '@ionic-native/email-composer';
//page







































//import { TrialPage } from '../pages/trial/trial';






//module



var config = {
    apiKey: "AIzaSyAsC2m1ohXx4KGCs1SPwLPwMpPV_wDLc3s",
    authDomain: "besraya-ca9e2.firebaseapp.com",
    databaseURL: "https://besraya-ca9e2.firebaseio.com",
    projectId: "besraya-ca9e2",
    storageBucket: "besraya-ca9e2.appspot.com",
    messagingSenderId: "30232149511"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_acknowledge_acknowledge__["a" /* AcknowledgePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_admin_contractor_admin_contractor__["a" /* AdminContractorPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_admin_astaff_admin_astaff__["a" /* AdminAstaffPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_adminstaff_adminstaff__["a" /* AdminstaffPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_administrative_administrative__["a" /* AdministrativePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_administrative1_administrative1__["a" /* Administrative1Page */],
                __WEBPACK_IMPORTED_MODULE_15__pages_administrative2_administrative2__["a" /* Administrative2Page */],
                __WEBPACK_IMPORTED_MODULE_16__pages_administrative3_administrative3__["a" /* Administrative3Page */],
                __WEBPACK_IMPORTED_MODULE_17__pages_checklist_checklist__["a" /* ChecklistPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_checklist1_checklist1__["a" /* Checklist1Page */],
                __WEBPACK_IMPORTED_MODULE_19__pages_contractor_contractor__["a" /* ContractorPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_companies_companies__["a" /* CompaniesPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_new_checklist_new_checklist__["a" /* NewChecklistPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_progress_progress__["a" /* ProgressPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_progress2_progress2__["a" /* Progress2Page */],
                __WEBPACK_IMPORTED_MODULE_26__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_register1_register1__["a" /* Register1Page */],
                __WEBPACK_IMPORTED_MODULE_28__pages_register2_register2__["a" /* Register2Page */],
                __WEBPACK_IMPORTED_MODULE_29__pages_register3_register3__["a" /* Register3Page */],
                __WEBPACK_IMPORTED_MODULE_30__pages_register4_register4__["a" /* Register4Page */],
                __WEBPACK_IMPORTED_MODULE_31__pages_register5_register5__["a" /* Register5Page */],
                __WEBPACK_IMPORTED_MODULE_32__pages_register_as_register_as__["a" /* RegisterAsPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_staff1_staff1__["a" /* Staff1Page */],
                __WEBPACK_IMPORTED_MODULE_35__pages_staff2_staff2__["a" /* Staff2Page */],
                __WEBPACK_IMPORTED_MODULE_37__pages_site_staff_site_staff__["a" /* SiteStaffPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_task_task__["a" /* TaskPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_task1_task1__["a" /* Task1Page */],
                __WEBPACK_IMPORTED_MODULE_39__pages_task2_task2__["a" /* Task2Page */],
                __WEBPACK_IMPORTED_MODULE_40__pages_task3_task3__["a" /* Task3Page */],
                __WEBPACK_IMPORTED_MODULE_41__pages_task4_task4__["a" /* Task4Page */],
                __WEBPACK_IMPORTED_MODULE_42__pages_task5_task5__["a" /* Task5Page */],
                __WEBPACK_IMPORTED_MODULE_43__pages_task6_task6__["a" /* Task6Page */],
                __WEBPACK_IMPORTED_MODULE_44__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_view_admin_view_admin__["a" /* ViewAdminPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_update_update__["a" /* UpdatePage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_upload_upload__["a" /* UploadPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_work_task_work_task__["a" /* WorkTaskPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_work_task2_work_task2__["a" /* WorkTask2Page */],
                __WEBPACK_IMPORTED_MODULE_50__pages_work_permit_work_permit__["a" /* WorkPermitPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/acknowledge/acknowledge.module#AcknowledgePageModule', name: 'AcknowledgePage', segment: 'acknowledge', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-astaff/admin-astaff.module#AdminAstaffPageModule', name: 'AdminAstaffPage', segment: 'admin-astaff', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-contractor/admin-contractor.module#AdminContractorPageModule', name: 'AdminContractorPage', segment: 'admin-contractor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/administrative/administrative.module#AdministrativePageModule', name: 'AdministrativePage', segment: 'administrative', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/administrative1/administrative1.module#Administrative1PageModule', name: 'Administrative1Page', segment: 'administrative1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/administrative2/administrative2.module#Administrative2PageModule', name: 'Administrative2Page', segment: 'administrative2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/administrative3/administrative3.module#Administrative3PageModule', name: 'Administrative3Page', segment: 'administrative3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adminstaff/adminstaff.module#AdminstaffPageModule', name: 'AdminstaffPage', segment: 'adminstaff', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checklist/checklist.module#ChecklistPageModule', name: 'ChecklistPage', segment: 'checklist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checklist1/checklist1.module#Checklist1PageModule', name: 'Checklist1Page', segment: 'checklist1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/companies/companies.module#CompaniesPageModule', name: 'CompaniesPage', segment: 'companies', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contractor/contractor.module#ContractorPageModule', name: 'ContractorPage', segment: 'contractor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info/info.module#InfoPageModule', name: 'InfoPage', segment: 'info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-checklist/new-checklist.module#NewChecklistPageModule', name: 'NewChecklistPage', segment: 'new-checklist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/progress/progress.module#ProgressPageModule', name: 'ProgressPage', segment: 'progress', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/progress2/progress2.module#Progress2PageModule', name: 'Progress2Page', segment: 'progress2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register-as/register-as.module#RegisterAsPageModule', name: 'RegisterAsPage', segment: 'register-as', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register1/register1.module#Register1PageModule', name: 'Register1Page', segment: 'register1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register2/register2.module#Register2PageModule', name: 'Register2Page', segment: 'register2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register3/register3.module#Register3PageModule', name: 'Register3Page', segment: 'register3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register4/register4.module#Register4PageModule', name: 'Register4Page', segment: 'register4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register5/register5.module#Register5PageModule', name: 'Register5Page', segment: 'register5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/report/report.module#ReportPageModule', name: 'ReportPage', segment: 'report', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/site-staff/site-staff.module#SiteStaffPageModule', name: 'SiteStaffPage', segment: 'site-staff', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/staff1/staff1.module#Staff1PageModule', name: 'Staff1Page', segment: 'staff1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/staff2/staff2.module#Staff2PageModule', name: 'Staff2Page', segment: 'staff2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/task/task.module#TaskPageModule', name: 'TaskPage', segment: 'task', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/task1/task1.module#Task1PageModule', name: 'Task1Page', segment: 'task1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/task2/task2.module#Task2PageModule', name: 'Task2Page', segment: 'task2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/task3/task3.module#Task3PageModule', name: 'Task3Page', segment: 'task3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/task4/task4.module#Task4PageModule', name: 'Task4Page', segment: 'task4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/task5/task5.module#Task5PageModule', name: 'Task5Page', segment: 'task5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/task6/task6.module#Task6PageModule', name: 'Task6Page', segment: 'task6', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test/test.module#TestPageModule', name: 'TestPage', segment: 'test', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/update/update.module#UpdatePageModule', name: 'UpdatePage', segment: 'update', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/upload/upload.module#UploadPageModule', name: 'UploadPage', segment: 'upload', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-admin/view-admin.module#ViewAdminPageModule', name: 'ViewAdminPage', segment: 'view-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/work-permit/work-permit.module#WorkPermitPageModule', name: 'WorkPermitPage', segment: 'work-permit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/work-task/work-task.module#WorkTaskPageModule', name: 'WorkTaskPage', segment: 'work-task', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/work-task2/work-task2.module#WorkTask2PageModule', name: 'WorkTask2Page', segment: 'work-task2', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_52_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_51_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_53_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_acknowledge_acknowledge__["a" /* AcknowledgePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_admin_contractor_admin_contractor__["a" /* AdminContractorPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_admin_astaff_admin_astaff__["a" /* AdminAstaffPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_adminstaff_adminstaff__["a" /* AdminstaffPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_administrative_administrative__["a" /* AdministrativePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_administrative1_administrative1__["a" /* Administrative1Page */],
                __WEBPACK_IMPORTED_MODULE_15__pages_administrative2_administrative2__["a" /* Administrative2Page */],
                __WEBPACK_IMPORTED_MODULE_16__pages_administrative3_administrative3__["a" /* Administrative3Page */],
                __WEBPACK_IMPORTED_MODULE_17__pages_checklist_checklist__["a" /* ChecklistPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_checklist1_checklist1__["a" /* Checklist1Page */],
                __WEBPACK_IMPORTED_MODULE_19__pages_contractor_contractor__["a" /* ContractorPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_companies_companies__["a" /* CompaniesPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_new_checklist_new_checklist__["a" /* NewChecklistPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_progress_progress__["a" /* ProgressPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_progress2_progress2__["a" /* Progress2Page */],
                __WEBPACK_IMPORTED_MODULE_26__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_register1_register1__["a" /* Register1Page */],
                __WEBPACK_IMPORTED_MODULE_28__pages_register2_register2__["a" /* Register2Page */],
                __WEBPACK_IMPORTED_MODULE_29__pages_register3_register3__["a" /* Register3Page */],
                __WEBPACK_IMPORTED_MODULE_30__pages_register4_register4__["a" /* Register4Page */],
                __WEBPACK_IMPORTED_MODULE_31__pages_register5_register5__["a" /* Register5Page */],
                __WEBPACK_IMPORTED_MODULE_32__pages_register_as_register_as__["a" /* RegisterAsPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_staff1_staff1__["a" /* Staff1Page */],
                __WEBPACK_IMPORTED_MODULE_35__pages_staff2_staff2__["a" /* Staff2Page */],
                __WEBPACK_IMPORTED_MODULE_37__pages_site_staff_site_staff__["a" /* SiteStaffPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_task_task__["a" /* TaskPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_task1_task1__["a" /* Task1Page */],
                __WEBPACK_IMPORTED_MODULE_39__pages_task2_task2__["a" /* Task2Page */],
                __WEBPACK_IMPORTED_MODULE_40__pages_task3_task3__["a" /* Task3Page */],
                __WEBPACK_IMPORTED_MODULE_41__pages_task4_task4__["a" /* Task4Page */],
                __WEBPACK_IMPORTED_MODULE_42__pages_task5_task5__["a" /* Task5Page */],
                __WEBPACK_IMPORTED_MODULE_43__pages_task6_task6__["a" /* Task6Page */],
                __WEBPACK_IMPORTED_MODULE_44__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_view_admin_view_admin__["a" /* ViewAdminPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_update_update__["a" /* UpdatePage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_upload_upload__["a" /* UploadPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_work_task_work_task__["a" /* WorkTaskPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_work_task2_work_task2__["a" /* WorkTask2Page */],
                __WEBPACK_IMPORTED_MODULE_50__pages_work_permit_work_permit__["a" /* WorkPermitPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
                // EmailComposer,
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.showSplash = true;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__["timer"])(3000).subscribe(function () { return _this.showSplash = false; });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/michaelpae/besraya/src/app/app.html"*/'<div *ngIf="showSplash" class="splash">\n    <div class="sk-circle">\n        <div class="sk-circle1 sk-child"></div>\n        <div class="sk-circle2 sk-child"></div>\n        <div class="sk-circle3 sk-child"></div>\n        <div class="sk-circle4 sk-child"></div>\n        <div class="sk-circle5 sk-child"></div>\n        <div class="sk-circle6 sk-child"></div>\n        <div class="sk-circle7 sk-child"></div>\n        <div class="sk-circle8 sk-child"></div>\n        <div class="sk-circle9 sk-child"></div>\n        <div class="sk-circle10 sk-child"></div>\n        <div class="sk-circle11 sk-child"></div>\n        <div class="sk-circle12 sk-child"></div>\n      </div>\n    \n</div>\n\n<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/michaelpae/besraya/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_admin__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contractor_contractor__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__companies_companies__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







///import * as firebase from 'firebase';
var HomePage = (function () {
    function HomePage(navCtrl, fdb, af, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.fdb = fdb;
        this.af = af;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    HomePage_1 = HomePage;
    HomePage.prototype.openAdminPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__admin_admin__["a" /* AdminPage */]);
    };
    HomePage.prototype.openCompaniesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__companies_companies__["a" /* CompaniesPage */]);
    };
    HomePage.prototype.openContractorPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__contractor_contractor__["a" /* ContractorPage */]);
    };
    HomePage.prototype.login = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.af.auth.signInWithEmailAndPassword(this.useremail, this.password)
            .then(function (data) {
            console.log(data.uid);
            setTimeout(function () {
                loading.dismiss();
            }, 500);
            _this.fdb.object('staff/' + data.uid).subscribe(function (user) {
                if (user.role == "admin") {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__admin_admin__["a" /* AdminPage */]);
                    console.log("ID", user);
                }
                else if (user.role == "staff") {
                    var name_1 = user.email;
                    name_1 = String(name_1).split('@')[0];
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__companies_companies__["a" /* CompaniesPage */], { name: name_1 });
                    console.log("ID" + user.role);
                }
                else if (user.role == "contractor") {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__contractor_contractor__["a" /* ContractorPage */]);
                    console.log("ID" + user.role);
                }
                else {
                    (function (err) {
                        console.log(err);
                        _this.toastCtrl.create({
                            message: "Wrong email or password",
                            duration: 5000
                        }).present();
                        _this.navCtrl.setRoot(HomePage_1);
                    });
                } //tutup else
            }); //object tutup
        }).catch(function (e) {
            setTimeout(function () {
                loading.dismiss();
            }, 500);
        });
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/home/home.html"*/'\n<ion-content class="background">\n<br>\n<br>\n<br>\n<br>\n\n<ion-card>\n  <ion-card-content>\n    <div><img src="./assets/imgs/tpads2.png" class="image"/></div>\n    <br>\n    <br>\n    <ion-list no-lines>\n     <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input type="email" [(ngModel)]="useremail"></ion-input>\n     </ion-item>\n        \n     <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password" [(ngModel)]="password"></ion-input>\n     </ion-item>\n    </ion-list>\n\n    <br>\n    <br>\n    \n\n    <div>\n      <button ion-button full color="login" (click)="login()"> SIGN IN </button>\n      <!-- <button ion-button color="login" (click)="openCompaniesPage()"> STAFF </button>\n      <button ion-button color="login" (click)="openContractorPage()"> CONTRACTOR </button> -->\n    </div>\n    \n       \n  </ion-card-content>\n</ion-card>\n\n  </ion-content>\n   <ion-footer>\n      <div class="bar bar-footer bar-stable">\n          <div style="position: absolute;right: 8px;color: red;">\n            Version: 0.11\n          </div>\n          <h1 class="footer">Developed by Studio Diamdiamubi</h1>\n      </div>   \n   </ion-footer>\n  \n    \n  \n  '/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminContractorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register1_register1__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the AdminContractorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminContractorPage = (function () {
    function AdminContractorPage(navCtrl, navParams, fdb, af, alertCtrl, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fdb = fdb;
        this.af = af;
        this.alertCtrl = alertCtrl;
        this.modal = modal;
        this.contractors = [];
    }
    AdminContractorPage.prototype.openRegister1Page = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register1_register1__["a" /* Register1Page */]);
    };
    AdminContractorPage.prototype.openSelected = function (item) {
        console.log(item);
        // let abc=this.modal.create(RegisterPage, {item:item})
        // abc.onDidDismiss(_=>{this.ionViewDidLoad();});
        // abc.present();  
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */], { item: item });
    };
    AdminContractorPage.prototype.deleteSelected = function (data) {
        var _this = this;
        console.log("THE DATA", data);
        var alert = this.alertCtrl.create({
            title: 'Confirm delete',
            message: 'Are you sure to delete?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.fdb.object('contractor/' + data.key).remove();
                    }
                }
            ]
        });
        alert.present();
    };
    AdminContractorPage.prototype.ionViewDidLoad = function () {
        var self = this;
        console.log('ionViewDidLoad AdminContractorPage');
        __WEBPACK_IMPORTED_MODULE_6_firebase__["database"]().ref('/contractor/').on('value', function (snap) {
            var values = Object.keys(snap.val()).map(function (key) { return snap.val()[key]; });
            var keys = Object.keys(snap.val());
            self.contractors = [];
            self.contractors = values;
            for (var i = 0; i < keys.length; i++) {
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
    };
    AdminContractorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-contractor',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/admin-contractor/admin-contractor.html"*/'<!--\n  Generated template for the AdminContractorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="turquoise">\n     <ion-title>Contractor</ion-title>\n\n    <!-- <img src="./assets/imgs/imagess.png" style="width:100%;"/>  \n    -->\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="background" no-padding>\n    <ion-card>\n    <ion-card-header text-center class="ion-card-header">\n    Contractor List \n    </ion-card-header>\n\n    <ion-list >\n      <ion-item *ngFor ="let contractor of contractors" >\n        <p (click)="openSelected(contractor)"><b>COMPANY : </b>{{contractor.compname}}</p>\n        <button ion-button color="dark" item-end (click)="deleteSelected(contractor)">X</button>\n      </ion-item>\n      \n    </ion-list>\n    </ion-card>\n\n    <div text-right>\n     New Contractor\n    <button class="ion-icon"> \n      <ion-icon name="add-circle" (click)="openRegister1Page()" > </ion-icon>\n    </button>\n    </div>\n    \n</ion-content>\n'/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/admin-contractor/admin-contractor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], AdminContractorPage);
    return AdminContractorPage;
}());

//# sourceMappingURL=admin-contractor.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_contractor_admin_contractor__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_astaff_admin_astaff__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__administrative_administrative__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__task_task__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminPage = (function () {
    function AdminPage(navCtrl, navParams, fdb, af) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fdb = fdb;
        this.af = af;
    }
    AdminPage.prototype.openTask = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__task_task__["a" /* TaskPage */]);
    };
    AdminPage.prototype.openAdminContractor = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__admin_contractor_admin_contractor__["a" /* AdminContractorPage */]);
    };
    AdminPage.prototype.openAdminAstaff = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__admin_astaff_admin_astaff__["a" /* AdminAstaffPage */]);
    };
    AdminPage.prototype.openAdministrative = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__administrative_administrative__["a" /* AdministrativePage */]);
    };
    AdminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminPage');
        this.af.authState.subscribe(function (user) {
            console.log(user);
        });
    };
    AdminPage.prototype.logout = function () {
        this.af.auth.signOut();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
    };
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/admin/admin.html"*/'<!--\n  Generated template for the TaskPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n \n<ion-content class="background">\n  <br>\n  <br>\n  <br>   \n    <ion-card>\n        <ion-card-content>\n            <br>\n        <div><img src="./assets/imgs/tpads2.png" class="image"/></div>\n         <br>\n         <br>\n\n            <button ion-button (click)="openTask()" color="light" ion-left block large>\n            <ion-icon name="clipboard" color="turquoise" style="margin-right: 10px; "></ion-icon>\n            <div> WORK PERMIT</div> \n            </button>\n\n            <button ion-button (click)="openAdminContractor()" color="light" ion-left block large>\n            <ion-icon name="ios-list" color="turquoise" style="margin-right: 10px;"></ion-icon>\n            <div> CONTRACTOR</div> \n            </button>\n\n            <button ion-button (click)="openAdminAstaff()" color="light" ion-left block large>\n            <ion-icon name="people" color="turquoise" style="margin-right: 10px;"></ion-icon>\n            <div> STAFF</div> \n            </button>\n\n            <button ion-button (click)="openAdministrative()" color="light" ion-left block large>\n            <ion-icon name="person" color="turquoise" style="margin-right: 10px;"></ion-icon>\n            <div>ADMINISTRATIVE</div> \n            </button>\n\n            <br>\n            <div text-center>\n              <a class="link" (click)="logout()"><b>LOG OUT</b></a>\n              <ion-icon name="power" color="dark"></ion-icon>\n            </div> \n\n\n\n\n          </ion-card-content>\n        </ion-card>\n\n</ion-content>\n '/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/admin/admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register1_register1__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_contractor_admin_contractor__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register4_register4__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the Register2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Register2Page = (function () {
    function Register2Page(navCtrl, alertCtrl, load, navParams, fdb, modal) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.load = load;
        this.navParams = navParams;
        this.fdb = fdb;
        this.modal = modal;
        this.compname = navParams.get('compname');
        this.address = navParams.get('address');
        this.cperson = "";
        this.officenum = "";
        this.mobilenum = "";
        this.email = "";
    }
    Register2Page.prototype.openRegister1Page = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register1_register1__["a" /* Register1Page */]);
    };
    Register2Page.prototype.add = function () {
        var _this = this;
        var loading = this.load.create({
            duration: 3000
        });
        loading.present();
        var push = {
            compname: this.compname,
            address: this.address,
            cperson: this.cperson,
            officenum: this.officenum,
            mobilenum: this.mobilenum,
            email: this.email,
        };
        __WEBPACK_IMPORTED_MODULE_6_firebase__["database"]().ref('contractor/').push(push);
        this.alertCtrl.create({
            title: 'Info',
            message: 'You have successfully registered a contractor!',
            buttons: [
                {
                    text: "OK",
                    handler: function (data) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__admin_contractor_admin_contractor__["a" /* AdminContractorPage */]);
                    }
                }
            ]
        }).present();
    };
    Register2Page.prototype.subcont = function () {
        this.modal.create(__WEBPACK_IMPORTED_MODULE_5__register4_register4__["a" /* Register4Page */], {
            compname: this.compname,
            address: this.address,
            cperson: this.cperson,
            officenum: this.officenum,
            mobilenum: this.mobilenum,
            email: this.email
        }).present();
    };
    Register2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Register2Page');
    };
    Register2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register2',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/register2/register2.html"*/'<!--\n  Generated template for the Register1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="turquoise">\n      <ion-title>Register Contractor</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content>\n  <ion-card class = "style" >\n    <ion-card-content>\n      Contact Person\n      <ion-item>\n      <ion-input [(ngModel)]="cperson" type="text" ></ion-input>\n     </ion-item>\n      \n      Telephone Office\n     <ion-item>\n      <ion-input [(ngModel)]="officenum" type="text" ></ion-input>\n    </ion-item>\n    \n      Telephone Mobile\n      <ion-item>\n        <ion-input [(ngModel)]="mobilenum" type="text" ></ion-input>\n      </ion-item>\n    \n      Email\n      <ion-item>\n        <ion-input [(ngModel)]="email" type="email" ></ion-input>\n      </ion-item>\n    <br>\n    Do You Want To Add Sub-Contractor?\n    <br>\n    <button (click)="subcont()" color="turquoise" ion-button>YES</button>\n    <button  (click)="add()" color="turquoise" ion-button>NO</button>\n      \n    </ion-card-content>\n  </ion-card>\n  \n  <div text-center>\n    <button ><ion-icon (click)="openRegister1Page()" name="arrow-back"> </ion-icon></button> \n    <button ><ion-icon name="radio-button-off"> </ion-icon></button>\n    <button ><ion-icon name="radio-button-on"></ion-icon></button>\n  \n  </div>\n  </ion-content>\n  '/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/register2/register2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], Register2Page);
    return Register2Page;
}());

//# sourceMappingURL=register2.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register2_register2__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_contractor_admin_contractor__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**import { RegisterPage } from '../register/register';*/




/**
 * Generated class for the Register1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Register1Page = (function () {
    function Register1Page(navCtrl, navParams, loadingCtrl, alertCtrl, toastCtrl, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.modal = modal;
        this.pageNumber = 0;
        this.showSubCom = false;
    }
    Register1Page.prototype.goToSlide = function (number) {
        this.pageNumber = parseInt(number);
        this.slides.slideTo(this.pageNumber, 500);
    };
    Register1Page.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        console.log(this.showSubCom);
        if (this.showSubCom == false && currentIndex == 2) {
            currentIndex = 1;
        }
        this.pageNumber = currentIndex;
        console.log('Current index is', currentIndex);
    };
    Register1Page.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Contractor information was update successfully',
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    Register1Page.prototype.presentErrorToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Contractor information was not update successfully. Please input all values',
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    Register1Page.prototype.add = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            duration: 3000
        });
        loading.present();
        var push = {
            compname: this.compname,
            address: this.address,
            cperson: this.cperson,
            officenum: this.officenum,
            mobilenum: this.mobilenum,
            email: this.email,
        };
        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('contractor/').push(push);
        this.alertCtrl.create({
            title: 'Info',
            message: 'You have successfully registered a contractor!',
            buttons: [
                {
                    text: "OK",
                    handler: function (data) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__admin_contractor_admin_contractor__["a" /* AdminContractorPage */]);
                    }
                }
            ]
        }).present();
    };
    Register1Page.prototype.AddData = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm register sub contractor',
            message: 'Do you want to register sub contractor?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        var loading = _this.loadingCtrl.create({
                            content: 'Please wait...'
                        });
                        loading.present();
                        var push = {
                            compname: _this.compname,
                            address: _this.address,
                            cperson: _this.cperson,
                            officenum: _this.officenum,
                            mobilenum: _this.mobilenum,
                            email: _this.email,
                        };
                        if (typeof (push.compname) == 'undefined' || typeof (push.address) == 'undefined' || typeof (push.cperson) == 'undefined' ||
                            typeof (push.officenum) == 'undefined' || typeof (push.mobilenum) == 'undefined' || typeof (push.mobilenum) == 'undefined') {
                            setTimeout(function () {
                                loading.dismiss();
                                _this.presentErrorToast();
                            }, 500);
                            return;
                        }
                        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('contractor/').push(push).then(function (resp) {
                            setTimeout(function () {
                                loading.dismiss();
                                _this.presentToast();
                                _this.navCtrl.pop();
                            }, 500);
                        }, function (err) {
                            console.log('error', err);
                            setTimeout(function () {
                                loading.dismiss();
                                // this.navCtrl.pop();
                            }, 500);
                        });
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.showSubCom = true;
                        setTimeout(function () {
                            _this.goToSlide('2');
                        }, 500);
                    }
                }
            ]
        });
        alert.present();
    };
    Register1Page.prototype.AddDataSub = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm register sub contractor',
            message: 'Do you want to register sub contractor?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        var loading = _this.loadingCtrl.create({
                            content: 'Please wait...'
                        });
                        loading.present();
                        var push = {
                            compname: _this.compname,
                            subcontname: _this.subcontname,
                            address: _this.address,
                            address_sc: _this.address_sc,
                            cperson: _this.cperson,
                            cperson_sc: _this.cperson_sc,
                            officenum: _this.officenum,
                            officenum_sc: _this.officenum_sc,
                            mobilenum: _this.mobilenum,
                            mobilenum_sc: _this.mobilenum_sc,
                            email: _this.email,
                            email_sc: _this.email_sc
                        };
                        if (typeof (push.compname) == 'undefined' || typeof (push.subcontname) == 'undefined' || typeof (push.address) == 'undefined' ||
                            typeof (push.address_sc) == 'undefined' || typeof (push.cperson) == 'undefined' || typeof (push.cperson_sc) == 'undefined' ||
                            typeof (push.officenum) == 'undefined' || typeof (push.officenum_sc) == 'undefined' || typeof (push.mobilenum) == 'undefined' ||
                            typeof (push.mobilenum_sc) == 'undefined' || typeof (push.email) == 'undefined' || typeof (push.email_sc) == 'undefined') {
                            setTimeout(function () {
                                loading.dismiss();
                                _this.presentErrorToast();
                            }, 500);
                            return;
                        }
                        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('contractor/').push(push).then(function (resp) {
                            setTimeout(function () {
                                loading.dismiss();
                                _this.presentToast();
                                _this.navCtrl.pop();
                            }, 500);
                        }, function (err) {
                            console.log('error', err);
                            setTimeout(function () {
                                loading.dismiss();
                                // this.navCtrl.pop();
                            }, 500);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    Register1Page.prototype.next = function () {
        this.modal.create(__WEBPACK_IMPORTED_MODULE_2__register2_register2__["a" /* Register2Page */], {
            compname: this.compname,
            address: this.address,
        }).present();
    };
    Register1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Register1Page');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], Register1Page.prototype, "slides", void 0);
    Register1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register1',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/register1/register1.html"*/'<!--\n  Generated template for the Register1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="turquoise">\n    <ion-title>Register Contractor</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-slides style="height: 300px" (ionSlideDidChange)="slideChanged()">\n        <ion-slide>\n            <ion-card class = "style" style="margin-top: -36px;" >\n                <ion-card-content>\n                  Company Name\n                  <ion-item>\n                  <ion-input [(ngModel)]="compname" type="text" ></ion-input>\n                  </ion-item>\n                  <br>\n                  Address\n                  <ion-item>\n                    <ion-textarea rows="4" cols="60" [(ngModel)]="address" placeholder="Full address..."></ion-textarea>\n                  </ion-item>\n                \n                </ion-card-content>\n              </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class = "style"  >\n              <ion-card-content>\n                Contact Person\n                <ion-item>\n                <ion-input [(ngModel)]="cperson" type="text" ></ion-input>\n                </ion-item>\n                \n                Telephone Office\n                <ion-item>\n                <ion-input [(ngModel)]="officenum" type="text" ></ion-input>\n              </ion-item>\n              \n                Telephone Mobile\n                <ion-item>\n                  <ion-input [(ngModel)]="mobilenum" type="text" ></ion-input>\n                </ion-item>\n              \n                Email\n                <ion-item>\n                  <ion-input [(ngModel)]="email" type="email" ></ion-input>\n                </ion-item>\n              </ion-card-content>\n            </ion-card>\n        </ion-slide>\n        <ion-slide *ngIf = "showSubCom == true">\n            <ion-card class = "style" style="margin-top: -36px;" >\n                <ion-card-content>\n                 Sub Company Name\n                  <ion-item>\n                  <ion-input [(ngModel)]="subcontname" type="text" ></ion-input>\n                  </ion-item>\n                  <br>\n                 Sub Address\n                  <ion-item>\n                    <ion-textarea rows="4" cols="60" [(ngModel)]="address_sc" placeholder="Full address..."></ion-textarea>\n                  </ion-item>\n                \n                </ion-card-content>\n              </ion-card>\n        </ion-slide>\n        <ion-slide *ngIf = "showSubCom == true">\n            <ion-card class = "style"  >\n              <ion-card-content>\n               Sub Contact Person\n                <ion-item>\n                <ion-input [(ngModel)]="cperson_sc" type="text" ></ion-input>\n                </ion-item>\n                \n               Sub Telephone Office\n                <ion-item>\n                <ion-input [(ngModel)]="officenum_sc" type="text" ></ion-input>\n              </ion-item>\n              \n               Sub Telephone Mobile\n                <ion-item>\n                  <ion-input [(ngModel)]="mobilenum_sc" type="text" ></ion-input>\n                </ion-item>\n               Sub Email\n                <ion-item>\n                  <ion-input [(ngModel)]="email_sc" type="email" ></ion-input>\n                </ion-item>\n              </ion-card-content>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>\n   \n\n<div text-center style="margin-top:10px">\n  <!-- <button > <ion-icon  name="arrow-back" (click)="goToSlide(\'0\')" > </ion-icon> </button>   -->\n  <button style="background-color: white;" *ngIf = "pageNumber == 0" > <ion-icon name="radio-button-on"> </ion-icon></button>\n  <button style="background-color: white;" *ngIf = "pageNumber != 0" > <ion-icon (click)="goToSlide(\'0\')" name="radio-button-off"> </ion-icon></button>\n  <button style="background-color: white;" *ngIf = "pageNumber == 1" > <ion-icon name="radio-button-on"> </ion-icon></button>\n  <button style="background-color: white;" *ngIf = "pageNumber != 1" > <ion-icon (click)="goToSlide(\'1\')" name="radio-button-off"> </ion-icon></button>\n  <button style="background-color: white;" *ngIf = "pageNumber == 2 && showSubCom == true " > <ion-icon name="radio-button-on"> </ion-icon></button>\n  <button style="background-color: white;" *ngIf = "pageNumber != 2 && showSubCom == true" > <ion-icon (click)="goToSlide(\'2\')" name="radio-button-off"> </ion-icon></button>\n  <button style="background-color: white;" *ngIf = "pageNumber == 3 && showSubCom == true" > <ion-icon name="radio-button-on"> </ion-icon></button>\n  <button style="background-color: white;" *ngIf = "pageNumber != 3 && showSubCom == true" > <ion-icon (click)="goToSlide(\'3\')" name="radio-button-off"> </ion-icon></button>\n  <!-- <button > <ion-icon (click)="goToSlide(\'1\')" name="arrow-forward" > </ion-icon></button>  -->\n  <button  (click)="AddData()" *ngIf = "pageNumber == 1 && showSubCom == false" color="turquoise" class="add-btn" ion-button item-end>Add</button>\n  <button  (click)="AddDataSub()" *ngIf = "pageNumber == 3 && showSubCom == true" color="turquoise" class="add-btn" ion-button item-end>Add</button>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/register1/register1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], Register1Page);
    return Register1Page;
}());

//# sourceMappingURL=register1.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register5_register5__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the Register4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Register4Page = (function () {
    function Register4Page(navCtrl, fdb, navParams, modal) {
        this.navCtrl = navCtrl;
        this.fdb = fdb;
        this.navParams = navParams;
        this.modal = modal;
        this.compname = navParams.get('compname');
        this.subcontname = "";
        this.address = navParams.get('address');
        this.address_sc = "";
        this.cperson = navParams.get('cperson');
        this.officenum = navParams.get('officenum');
        this.mobilenum = navParams.get('mobilenum');
        this.email = navParams.get('email');
    }
    Register4Page.prototype.next = function () {
        this.modal.create(__WEBPACK_IMPORTED_MODULE_3__register5_register5__["a" /* Register5Page */], {
            compname: this.compname,
            subcontname: this.subcontname,
            address: this.address,
            address_sc: this.address_sc,
            cperson: this.cperson,
            officenum: this.officenum,
            mobilenum: this.mobilenum,
            email: this.email
        }).present();
    };
    Register4Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Register4Page');
    };
    Register4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register4',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/register4/register4.html"*/'<!--\n  Generated template for the Register1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="turquoise">\n      <ion-title>Register Sub-Contractor</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content>\n  <ion-card class = "style" >\n    <ion-card-content>\n      Sub-Contractor Name\n      <ion-item>\n      <ion-input [(ngModel)]="subcontname" type="text" ></ion-input>\n     </ion-item>\n      <br>\n      Address\n     <ion-item>\n        <ion-textarea rows="4" cols="60" [(ngModel)]="address_sc" placeholder="Full address..."></ion-textarea>\n     </ion-item>\n    \n    </ion-card-content>\n  </ion-card>\n  \n  <div text-center>\n      <button > \n          <ion-icon  name="arrow-back"> </ion-icon>\n        </button>  \n  \n      <button >\n          <ion-icon name="radio-button-on"></ion-icon>\n        </button>\n  \n      <button > \n          <ion-icon name="radio-button-off"> </ion-icon>\n        </button>\n  \n            <button > \n                <ion-icon (click)="next()" name="arrow-forward" > </ion-icon>\n              </button> \n  \n    </div>\n  </ion-content>\n  '/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/register4/register4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], Register4Page);
    return Register4Page;
}());

//# sourceMappingURL=register4.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Administrative2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the Administrative2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Administrative2Page = (function () {
    function Administrative2Page(navCtrl, alertCtrl, fdb, af, navParams, loadingCtrl, viewCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.fdb = fdb;
        this.af = af;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.editAdmin = false;
        this.editBtnTitle = "EDIT";
        this.item = [];
    }
    Administrative2Page.prototype.runTimeChange = function (event) {
        this.name = String(this.email).split('@')[0];
        this.username = this.name;
        console.log(this.name);
    };
    Administrative2Page.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'User information was update successfully',
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    Administrative2Page.prototype.confirmEdit = function () {
        var _this = this;
        if (this.editAdmin == true) {
            var alert_1 = this.alertCtrl.create({
                title: 'Confirm update',
                message: 'Do you want to update this information?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Yes',
                        handler: function () {
                            console.log('Edit clicked');
                            _this.item.name = _this.name;
                            _this.item.username = _this.username;
                            _this.item.staffid = _this.staffid;
                            _this.item.id = _this.userid;
                            var loading = _this.loadingCtrl.create({
                                content: 'Please wait...'
                            });
                            loading.present();
                            __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('staff/' + _this.item.id).update(_this.item).then(function (resp) {
                                console.log('test', resp);
                                setTimeout(function () {
                                    loading.dismiss();
                                    _this.presentToast();
                                    _this.editAdmin = false;
                                    _this.editBtnTitle = "EDIT";
                                    // this.navCtrl.pop();
                                }, 500);
                            }, function (err) {
                                console.log('error', err);
                                setTimeout(function () {
                                    loading.dismiss();
                                    _this.editAdmin = true;
                                    _this.editBtnTitle = "EDIT";
                                    // this.navCtrl.pop();
                                }, 500);
                            });
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: 'Confirm update',
                message: 'Do you want to edit this information?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Yes',
                        handler: function () {
                            console.log('Edit clicked');
                            _this.editAdmin = true;
                            _this.editBtnTitle = "SAVE";
                        }
                    }
                ]
            });
            alert_2.present();
        }
    };
    Administrative2Page.prototype.ionViewDidLoad = function () {
        this.item = this.navParams.get('item');
        this.userid = this.item.id;
        this.name = this.item.name;
        this.staffid = this.item.staffid;
        this.username = this.item.username;
        this.email = this.item.email;
        this.password = this.item.password;
    };
    Administrative2Page.prototype.close = function () {
        // this.viewCtrl.dismiss();
    };
    Administrative2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-administrative2',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/administrative2/administrative2.html"*/'<ion-header>\n  <ion-navbar color="turquoise">\n    <ion-title>Update Administrative </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-card class = "style" >\n  <ion-card-content>\n    Email\n    <ion-item>\n      <ion-input [(ngModel)]="email" type="email" [disabled]="true"></ion-input>\n    </ion-item>\n\n    Password\n    <ion-item>\n      <ion-input [(ngModel)]="password" type="password" [disabled]="true"></ion-input>\n    </ion-item>\n\n    Name\n    <ion-item>\n      <ion-input [(ngModel)]="name" type="text" disabled = "true"></ion-input>\n    </ion-item>\n\n    Staff ID\n   <ion-item>\n    <ion-input  [(ngModel)]="staffid" type="text" disabled = "{{!editAdmin}}"></ion-input>\n  </ion-item>\n\n  <!-- Username\n    <ion-item>\n    <ion-input [(ngModel)]="username" type="text" disabled = "{{!editAdmin}}"></ion-input>\n  </ion-item> -->\n\n  \n\n \n\n  </ion-card-content>\n</ion-card>\n\n<div text-right>\n  <!-- <button (click)="close()" color="turquoise" ion-button>CLOSE</button> -->\n  <button (click)="confirmEdit()" color="turquoise" ion-button> {{editBtnTitle}}</button>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/administrative2/administrative2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], Administrative2Page);
    return Administrative2Page;
}());

//# sourceMappingURL=administrative2.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task5_task5__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__upload_upload__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the Task4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Task4Page = (function () {
    function Task4Page(navCtrl, navParams, fdb, af, alertCtrl, toastCtrl, action, loadingCtrl, camera, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fdb = fdb;
        this.af = af;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.action = action;
        this.loadingCtrl = loadingCtrl;
        this.camera = camera;
        this.modal = modal;
        this.images = [];
        // let date = new Date();
        // let year = date.getFullYear();
        // let month = date.getMonth() + 1;
        // let str_month: any;
        // if (month < 10) {
        //   str_month = String('0') + String(month);
        // }
        // var ampm = date.getHours() >= 12 ? 'PM' : 'AM';
        // let day = date.getDate();
        this.mindate = new Date().toISOString();
    }
    Task4Page.prototype.openTask5Page = function () {
        //   this.modal.create(Task5Page, {
        //     start : this.start,
        //     finish: this.finish,
        //     workpermitNo: this.workpermitNo,
        //     desc: this.desc,
        //     appletter: this.appletter,
        //     drawing: this.drawing,
        //     work: this.work,
        //     statement: this.statement,
        //     insletter: this.insletter,
        //     trafficplan: this.trafficplan,
        //     depo: this.depo,
        //     charges: this.charges,
        //     permit: this.permit,
        // }).present(); 
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__task5_task5__["a" /* Task5Page */], {
            start: this.start,
            finish: this.finish,
            workpermitNo: this.workpermitNo,
            desc: this.desc,
            appletter: this.appletter,
            drawing: this.drawing,
            work: this.work,
            statement: this.statement,
            insletter: this.insletter,
            trafficplan: this.trafficplan,
            depo: this.depo,
            charges: this.charges,
            permit: this.permit,
            images: this.images,
        });
    };
    Task4Page.prototype.openUploadPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__upload_upload__["a" /* UploadPage */]);
    };
    Task4Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Task4Page');
    };
    Task4Page.prototype.captureProfile = function () {
        var _this = this;
        this.action.create({
            title: " Choose Image Source",
            buttons: [
                {
                    text: "Choose From Gallery",
                    handler: function () {
                        _this.AddImagefromGallery("");
                    }
                },
                {
                    text: "Take Picture",
                    handler: function () {
                        _this.AddImagefromCamera("");
                    }
                }
            ]
        }).present();
    };
    Task4Page.prototype.resizeImage = function (url, width, height) {
        var sourceImage = new Image();
        var self = this;
        sourceImage.onload = function () {
            // Create a canvas with the desired dimensions
            var canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;
            // Scale and draw the source image to the canvas
            canvas.getContext("2d").drawImage(sourceImage, 0, 0, width, height);
            // Convert the canvas to a data URL in PNG format
            self.imageURI = canvas.toDataURL();
            self.images.push(self.imageURI);
            setTimeout(function () {
                self.loader.dismiss();
                // this.navCtrl.pop();
            }, 500);
            console.log(self.images);
        };
        sourceImage.src = url;
    };
    Task4Page.prototype.AddImagefromGallery = function (event) {
        var self = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        self.loader = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        self.loader.present();
        this.camera.getPicture(options).then(function (imageData) {
            self.resizeImage('data:image/png;base64,' + imageData, 256, 216);
        }, function (err) {
            console.log(err);
            setTimeout(function () {
                self.loader.dismiss();
                // this.navCtrl.pop();
            }, 500);
        });
    };
    Task4Page.prototype.AddImagefromCamera = function (event) {
        var self = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        self.loader = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        self.loader.present();
        this.camera.getPicture(options).then(function (imageData) {
            self.resizeImage('data:image/png;base64,' + imageData, 256, 216);
        }, function (err) {
            setTimeout(function () {
                self.loader.dismiss();
                // this.navCtrl.pop();
            }, 500);
            console.log(err);
        });
    };
    Task4Page.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'User information was update successfully',
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    Task4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-task4',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/task4/task4.html"*/'\n<ion-header>\n<ion-navbar color="turquoise">\n    <ion-title>Create Work Permit </ion-title>\n</ion-navbar>\n</ion-header>\n\n<ion-content class="background" no-padding>\n  <ion-list>\n  \n    <ion-card class="date">\n      <ion-card-header text-center><b><small>Start Date and Time </small></b></ion-card-header>\n      <ion-item class="inputdate">\n            <ion-datetime [min] = "mindate" max = "2028-01-01T18:00:00.618Z" displayFormat="DD MMM, YYYY h:mm A" pickerFormat="DD MMM YYYY h mm A" [(ngModel)]="start"></ion-datetime>\n    \n      </ion-item>     \n    </ion-card>\n\n  \n    <ion-card class="date">\n        <ion-card-header text-center><b><small>Finish Date and Time </small></b></ion-card-header>\n        <ion-item class="inputdate">\n          <ion-datetime [min] = "mindate" max = "2028-01-01T18:00:00.618Z" displayFormat="DD MMM, YYYY h:mm A" pickerFormat="DD MMM YYYY h mm A" [(ngModel)]="finish"></ion-datetime>\n        </ion-item>     \n    </ion-card>\n\n  </ion-list> \n\n  \n      <ion-card>\n      <ion-input style="background-color:gainsboro" type="text" placeholder="Work Permit No" [(ngModel)]="workpermitNo"></ion-input>\n      </ion-card>\n\n      <ion-card>\n      <ion-input style="background-color:gainsboro" type="text" placeholder="Description Of Work" [(ngModel)]="desc"></ion-input>\n      </ion-card>\n\n      <ion-card >\n        <ion-grid>\n          <ion-row>\n            \n            <ion-col class="col-head" col-10><b>Document Submitted</b> </ion-col>\n            <ion-col class="col-head"><b>[Tick]</b></ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-1>a)</ion-col>\n            <ion-col col-9> Application Letter </ion-col>\n            <ion-col><ion-checkbox [(ngModel)]="appletter"></ion-checkbox></ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-1>b)</ion-col>\n            <ion-col col-9>Drawing (s) Ref No </ion-col>\n            <ion-col><ion-checkbox [(ngModel)]="drawing"></ion-checkbox></ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-1>c)</ion-col>\n            <ion-col col-9>Work Programme </ion-col>\n            <ion-col><ion-checkbox [(ngModel)]="work"></ion-checkbox></ion-col>\n          </ion-row>\n   \n          <ion-row>\n            <ion-col col-1>d)</ion-col>\n            <ion-col col-9>Method of Statement</ion-col>\n            <ion-col><ion-checkbox [(ngModel)]="statement"></ion-checkbox></ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-1>e)</ion-col>\n            <ion-col col-9>Insurance/BG/Undertaking Letter </ion-col>\n            <ion-col><ion-checkbox [(ngModel)]="insletter"></ion-checkbox></ion-col>\n          </ion-row>\n   \n          <ion-row>\n            <ion-col col-1>f)</ion-col>\n            <ion-col col-9>Traffic Management Plan</ion-col>\n            <ion-col><ion-checkbox [(ngModel)]="trafficplan"></ion-checkbox></ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-1>g)</ion-col>\n            <ion-col col-9>Deposit RM1,000.00 (Refundable) </ion-col>\n            <ion-col><ion-checkbox [(ngModel)]="depo"></ion-checkbox></ion-col>\n          </ion-row>\n   \n          <ion-row>\n            <ion-col col-1>h)</ion-col>\n            <ion-col col-9>Administration Charges </ion-col>\n            <ion-col><ion-checkbox [(ngModel)]="charges"></ion-checkbox></ion-col>\n          </ion-row>\n   \n          <ion-row>\n            <ion-col col-1>i)</ion-col>\n            <ion-col col-9>LLM\'s Permit (if any) </ion-col>\n            <ion-col><ion-checkbox [(ngModel)]="permit"></ion-checkbox></ion-col>\n          </ion-row>\n          <ion-slides *ngIf = "images!= null && images.length != 0" slidesPerView = "3" pager = "ture" paginationType = "fraction">\n              <ion-slide *ngFor = "let image of images">\n                  <img style="padding: 8px" src="{{image}}">\n              </ion-slide>\n          </ion-slides>\n        </ion-grid>\n      </ion-card>\n\n\n      <div text-right>\n          <button (click)="captureProfile()" color="turquoise" ion-button>Upload Doc F</button>\n          <button (click)="openTask5Page()" color="turquoise" ion-button>Next</button>\n          </div>\n</ion-content>\n'/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/task4/task4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], Task4Page);
    return Task4Page;
}());

//# sourceMappingURL=task4.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task4_task4__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the UploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UploadPage = (function () {
    function UploadPage(navCtrl, load, afauth, alertCtrl, action, Camera, navParams) {
        this.navCtrl = navCtrl;
        this.load = load;
        this.afauth = afauth;
        this.alertCtrl = alertCtrl;
        this.action = action;
        this.Camera = Camera;
        this.navParams = navParams;
        this.captureDataUrl2 = "";
    }
    UploadPage.prototype.captureProfile = function () {
        var _this = this;
        this.action.create({
            title: "Choose Image Source",
            buttons: [
                {
                    text: "Choose From Gallery",
                    handler: function () {
                        _this.takePictureProfile(_this.Camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: "Take Picture",
                    handler: function () {
                        _this.takePictureProfile(_this.Camera.PictureSourceType.CAMERA);
                    }
                }
            ]
        }).present();
    };
    UploadPage.prototype.takePictureProfile = function (img) {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: img,
            saveToPhotoAlbum: false,
            correctOrientation: true,
            destinationType: this.Camera.DestinationType.DATA_URL,
            encodingType: this.Camera.EncodingType.JPEG,
            mediaType: this.Camera.MediaType.PICTURE,
        };
        this.Camera.getPicture(options).then(function (image) {
            _this.captureDataUrl2 = 'data:image/jpeg;base64,' + image;
        }, function (err) {
            console.log(err);
        });
    };
    UploadPage.prototype.edit = function () {
        var _this = this;
        var loading = this.load.create({
            duration: 6000
        });
        loading.present();
        this.afauth.authState.subscribe(function (user) {
            var storage = firebase.storage().ref();
            var filename = Math.floor(Date.now() / 1000);
            var imageRef = storage.child('images/' + '/' + filename + '.jpg');
            imageRef.putString(_this.captureDataUrl2, firebase.storage.StringFormat.DATA_URL).then(function (data) {
                var post = {
                    profilePhoto: data.downloadURL
                };
                firebase.database().ref().update(post);
                _this.alertCtrl.create({
                    title: 'Update Successfull',
                    message: 'Your Data has been successfully updated',
                    buttons: [
                        {
                            text: 'Ok',
                            handler: function (data) {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__task4_task4__["a" /* Task4Page */]);
                            }
                        }
                    ]
                }).present();
            });
        });
    };
    UploadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UploadPage');
    };
    UploadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-upload',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/upload/upload.html"*/'<!--\n  Generated template for the UploadPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="turquoise">\n    <ion-title>Upload Doc F</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="background" no-padding>\n  <ion-list>\n    <ion-card style="background-color:gainsboro">\n      <ion-card-header><b>Upload Form</b></ion-card-header>\n\n      <ion-card-content>\n        Please upload file PDF or JPEG for document of Traffic Management Plan\n        <br>\n        <div text-center>\n            <button ion-button color="turquoise" (click)="captureProfile()" >Upload</button>\n            <img [src]="captureDataUrl2" *ngIf="captureDataUrl2">  \n            <br>   \n        </div>\n        <br>\n        <ion-input class="inputfile" type="text" [(ngModel)]="bler"></ion-input>\n        <br>\n\n        \n        <ion-grid>\n          <ion-row>\n          <ion-col col-1><ion-checkbox></ion-checkbox></ion-col>\n          <ion-col col-10>Close window after upload</ion-col>\n          </ion-row>       \n        </ion-grid>\n             \n        \n        \n      </ion-card-content>\n    \n    </ion-card>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/upload/upload.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], UploadPage);
    return UploadPage;
}());

//# sourceMappingURL=upload.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InfoPage = (function () {
    function InfoPage(navCtrl, navParams, fdb, af) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fdb = fdb;
        this.af = af;
        this.item = [];
    }
    InfoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var value = this.navParams.get("item");
        this.progress = value.cell;
        this.date = value.date;
        console.log('ionViewDidLoad ProgressPage');
        this.af.authState.subscribe(function (user) {
            _this.userid = user.uid;
            console.log(user);
        });
    };
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info',template:/*ion-inline-start:"/Users/michaelpae/besraya/src/pages/info/info.html"*/'\n\n<ion-header>\n\n        <ion-navbar color="turquoise">\n        \n        <ion-title class>Progress Update</ion-title>\n        </ion-navbar>\n      </ion-header>\n    \n    \n    <ion-content>\n        <ion-list>\n        <h2 class="h2" style="color: grey; margin-left: 32px;">Report Data {{date}}</h2> \n        <ion-card style="background-color:rgb(231, 231, 231)">\n          <ion-card-header class="ion-card-header">\n          <h2 class="h2">Progress</h2> \n          </ion-card-header>\n          <ion-card-content style="border-bottom: 1px solid white"   *ngFor = "let cell of progress">\n              <ion-textarea disabled = "true" rows="2" cols="50"  placeholder="Add progress.." [(ngModel)]="cell.text"></ion-textarea>\n              <ion-slides *ngIf = "cell.images != null && cell.images.length != 0" slidesPerView = "3" pager = "ture" paginationType = "fraction">\n                <ion-slide *ngFor = "let image of cell.images">\n                    <img style="padding: 8px" src="{{image}}">\n                </ion-slide>\n              </ion-slides>\n          </ion-card-content>\n        </ion-card>\n        </ion-list>\n\n          \n           \n    </ion-content>\n    \n\n'/*ion-inline-end:"/Users/michaelpae/besraya/src/pages/info/info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ })

},[264]);
//# sourceMappingURL=main.js.map