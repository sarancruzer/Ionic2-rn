import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageNeeds } from './manage-needs';

@NgModule({
  declarations: [
    ManageNeeds,
  ],
  imports: [
    IonicPageModule.forChild(ManageNeeds),
  ],
  exports: [
    ManageNeeds
  ]
})
export class ManageNeedsModule {}
