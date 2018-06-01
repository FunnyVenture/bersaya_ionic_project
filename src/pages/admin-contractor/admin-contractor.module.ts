import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminContractorPage } from './admin-contractor';

@NgModule({
  declarations: [
    AdminContractorPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminContractorPage),
  ],
})
export class AdminContractorPageModule {}
