import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonationProducts } from './donation-products';

@NgModule({
  declarations: [
    DonationProducts,
  ],
  imports: [
    IonicPageModule.forChild(DonationProducts),
  ],
  exports: [
    DonationProducts
  ]
})
export class DonationProductsModule {}
