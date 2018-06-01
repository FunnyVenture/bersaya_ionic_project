import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdministrativePage } from './administrative';

@NgModule({
  declarations: [
    AdministrativePage,
  ],
  imports: [
    IonicPageModule.forChild(AdministrativePage),
  ],
})
export class AdministrativePageModule {}
