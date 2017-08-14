import { Component } from '@angular/core';
import { NavController, NavParams,PopoverController } from 'ionic-angular';
import { ChangeQuantity } from '../../pages/change-quantity/change-quantity';


/**
 * Generated class for the NgoDonateProductListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-ngo-donate-product-list',
  templateUrl: 'ngo-donate-product-list.html',
})
export class NgoDonateProductListPage {

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController,public navParams: NavParams) {
  }
  modifyList(){
  	let popover = this.popoverCtrl.create(ChangeQuantity);
    popover.present();
  } 

}
