import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcknowledgePage } from './acknowledge';

@NgModule({
  declarations: [
    AcknowledgePage,
  ],
  imports: [
    IonicPageModule.forChild(AcknowledgePage),
  ],
})
export class AcknowledgePageModule {}
