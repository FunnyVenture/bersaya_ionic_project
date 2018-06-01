import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterAsPage } from './register-as';

@NgModule({
  declarations: [
    RegisterAsPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterAsPage),
  ],
})
export class RegisterAsPageModule {}
