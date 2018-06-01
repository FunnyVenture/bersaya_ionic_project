import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera, CameraOptions } from '@ionic-native/camera';
// import { EmailComposer } from '@ionic-native/email-composer';

//page
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AcknowledgePage } from '../pages/acknowledge/acknowledge';
import { AdminPage } from '../pages/admin/admin';
import { AdminContractorPage } from '../pages/admin-contractor/admin-contractor';
import { AdminstaffPage } from '../pages/adminstaff/adminstaff';
import { AdminAstaffPage } from '../pages/admin-astaff/admin-astaff';
import { AdministrativePage } from '../pages/administrative/administrative';
import { Administrative1Page } from '../pages/administrative1/administrative1';
import { Administrative2Page } from '../pages/administrative2/administrative2';
import { Administrative3Page } from '../pages/administrative3/administrative3';
import { ChecklistPage } from '../pages/checklist/checklist';
import { Checklist1Page } from '../pages/checklist1/checklist1';
import { ContractorPage } from '../pages/contractor/contractor';
import { CompaniesPage } from '../pages/companies/companies';
import { HistoryPage } from '../pages/history/history';
import { InfoPage } from '../pages/info/info';
import { NewChecklistPage } from '../pages/new-checklist/new-checklist';
import { ProgressPage } from '../pages/progress/progress';
import { Progress2Page } from '../pages/progress2/progress2';
import { RegisterPage } from '../pages/register/register';
import { Register1Page } from '../pages/register1/register1';
import { Register2Page } from '../pages/register2/register2';
import { Register3Page } from '../pages/register3/register3';
import { Register4Page } from '../pages/register4/register4';
import { Register5Page } from '../pages/register5/register5';
import { RegisterAsPage } from '../pages/register-as/register-as';
import { ReportPage } from '../pages/report/report';
import { Staff1Page } from '../pages/staff1/staff1';
import { Staff2Page } from '../pages/staff2/staff2';
import { TaskPage } from '../pages/task/task';
import { SiteStaffPage } from '../pages/site-staff/site-staff';
import { Task1Page } from '../pages/task1/task1';
import { Task2Page } from '../pages/task2/task2';
import { Task3Page } from '../pages/task3/task3';
import { Task4Page } from '../pages/task4/task4';
import { Task5Page } from '../pages/task5/task5';
import { Task6Page } from '../pages/task6/task6';
import { TestPage } from '../pages/test/test';
//import { TrialPage } from '../pages/trial/trial';
import { UpdatePage } from '../pages/update/update';
import { UploadPage } from '../pages/upload/upload';
import { ViewAdminPage } from '../pages/view-admin/view-admin';
import { WorkTaskPage } from '../pages/work-task/work-task';
import { WorkTask2Page } from '../pages/work-task2/work-task2';
import { WorkPermitPage } from '../pages/work-permit/work-permit';

//module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

var config = {
  apiKey: "AIzaSyAsC2m1ohXx4KGCs1SPwLPwMpPV_wDLc3s",
  authDomain: "besraya-ca9e2.firebaseapp.com",
  databaseURL: "https://besraya-ca9e2.firebaseio.com",
  projectId: "besraya-ca9e2",
  storageBucket: "besraya-ca9e2.appspot.com",
  messagingSenderId: "30232149511"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AdminPage,
    AcknowledgePage,
    AdminContractorPage,
    AdminAstaffPage,
    AdminstaffPage,
    AdministrativePage,
    Administrative1Page,
    Administrative2Page,
    Administrative3Page,
    ChecklistPage,
    Checklist1Page,
    ContractorPage,
    CompaniesPage,
    HistoryPage,
    InfoPage,
    NewChecklistPage,
    ProgressPage,
    Progress2Page,
    RegisterPage,
    Register1Page,
    Register2Page,
    Register3Page,
    Register4Page,
    Register5Page,
    RegisterAsPage,
    ReportPage,
    Staff1Page,
    Staff2Page,
    SiteStaffPage,
    TaskPage,
    Task1Page,
    Task2Page,
    Task3Page,
    Task4Page,
    Task5Page,
    Task6Page,
    TestPage,
    ViewAdminPage,
    UpdatePage,
    UploadPage,
    WorkTaskPage,
    WorkTask2Page,
    WorkPermitPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AdminPage,
    AcknowledgePage,
    AdminContractorPage,
    AdminAstaffPage,
    AdminstaffPage,
    AdministrativePage,
    Administrative1Page,
    Administrative2Page,
    Administrative3Page,
    ChecklistPage,
    Checklist1Page,
    ContractorPage,
    CompaniesPage,
    HistoryPage,
    InfoPage,
    NewChecklistPage,
    ProgressPage,
    Progress2Page,
    RegisterPage,
    Register1Page,
    Register2Page,
    Register3Page,
    Register4Page,
    Register5Page,
    RegisterAsPage,
    ReportPage,
    Staff1Page,
    Staff2Page,
    SiteStaffPage,
    TaskPage,
    Task1Page,
    Task2Page,
    Task3Page,
    Task4Page,
    Task5Page,
    Task6Page,
    TestPage,
    ViewAdminPage,
    UpdatePage,
    UploadPage,
    WorkTaskPage,
    WorkTask2Page,
    WorkPermitPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    // EmailComposer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
