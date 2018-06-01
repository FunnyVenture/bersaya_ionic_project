import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgressPage } from './progress';

@NgModule({
  declarations: [
    ProgressPage,
  ],
  imports: [
    IonicPageModule.forChild(ProgressPage),
  ],
})
export class ProgressPageModule {}
