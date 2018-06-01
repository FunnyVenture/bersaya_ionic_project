import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkTaskPage } from './work-task';

@NgModule({
  declarations: [
    WorkTaskPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkTaskPage),
  ],
})
export class WorkTaskPageModule {}
