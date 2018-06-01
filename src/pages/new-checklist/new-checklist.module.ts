import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewChecklistPage } from './new-checklist';

@NgModule({
  declarations: [
    NewChecklistPage,
  ],
  imports: [
    IonicPageModule.forChild(NewChecklistPage),
  ],
})
export class NewChecklistPageModule {}
