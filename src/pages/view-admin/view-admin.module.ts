import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewAdminPage } from './view-admin';

@NgModule({
  declarations: [
    ViewAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewAdminPage),
  ],
})
export class ViewAdminPageModule {}
