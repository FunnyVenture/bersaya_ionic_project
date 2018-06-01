import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SiteStaffPage } from './site-staff';

@NgModule({
  declarations: [
    SiteStaffPage,
  ],
  imports: [
    IonicPageModule.forChild(SiteStaffPage),
  ],
})
export class SiteStaffPageModule {}
