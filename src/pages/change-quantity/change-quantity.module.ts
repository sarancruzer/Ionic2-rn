import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangeQuantity } from './change-quantity';

@NgModule({
  declarations: [
    ChangeQuantity,
  ],
  imports: [
    IonicPageModule.forChild(ChangeQuantity),
  ],
  exports: [
    ChangeQuantity
  ]
})
export class ChangeQuantityModule {}
