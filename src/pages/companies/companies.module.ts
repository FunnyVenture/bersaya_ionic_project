import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompaniesPage } from './companies';

@NgModule({
  declarations: [
    CompaniesPage,
  ],
  imports: [
    IonicPageModule.forChild(CompaniesPage),
  ],
})
export class CompaniesPageModule {}
