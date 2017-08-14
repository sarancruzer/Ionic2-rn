import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { NeedslistProvider } from '../../providers/needslist/needslist';

/**
 * Generated class for the ChangeQuantity page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-change-quantity',
  templateUrl: 'change-quantity.html',
})
export class ChangeQuantity {
  product_name:any;
  product_description:any;
  product_quantity:any;
  product_id:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public needslistProvider:NeedslistProvider,public modalCtrl: ModalController,public viewCtrl: ViewController) {
  this.product_name = navParams.get("needs_data").product;
  this.product_description = navParams.get("needs_data").prod_desc;
  this.product_quantity = navParams.get("needs_data").qty;
  this.product_id = navParams.get("needs_data").id;
  }
  
  dismiss() {
   let data = { 'foo': 'bar' };
   this.viewCtrl.dismiss(data);
  }

  // We can change the donated product quantity
  editmanageNeeds(){
    this.needslistProvider.editmanageNeeds(this.product_name,this.product_description,this.product_quantity,this.product_id).
    subscribe(myneeds => {
    this.needslistProvider.showToast(myneeds.message);
    },
    err =>{
    this.needslistProvider.showErrorToast(err);
  })
 }
}
