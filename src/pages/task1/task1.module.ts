import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Task1Page } from './task1';

@NgModule({
  declarations: [
    Task1Page,
  ],
  imports: [
    IonicPageModule.forChild(Task1Page),
  ],
})
export class Task1PageModule {}
