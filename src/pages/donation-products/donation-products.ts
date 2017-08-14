import { Component } from '@angular/core';
import { NavController, NavParams, ModalController  } from 'ionic-angular';
import { NgoDonateProductListPage } from '../../pages/ngo-donate-product-list/ngo-donate-product-list';
import { Dashboard } from '../../pages/dashboard/dashboard';
import { NeedslistProvider } from '../../providers/needslist/needslist';

/**
 * Generated class for the DonationProducts page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-donation-products',
  templateUrl: 'donation-products.html',
})
export class DonationProducts {
donationId:any;
viewListInfo:any=[];
viewneedListInfo:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public needslistProvider:NeedslistProvider, public modalCtrl: ModalController) {
  this.donationId=navParams.get("donationId");
  this.onInit(this.donationId);
  }

  // List out the donation product
  onInit(donationId)
  {
    this.needslistProvider.viewdonationLists(donationId).subscribe(
    (viewList) => {
    this.viewListInfo=viewList.donations.data;
    this.viewneedListInfo=viewList.products_list.data;    
    },
    err =>{
    this.needslistProvider.showErrorToast(err);
  });    
  }

  viewProduct()
  {
   this.navCtrl.push(NgoDonateProductListPage);
  }

  dashboardPage(){
    this.navCtrl.setRoot(Dashboard);
  }
  
  //we can change the donation product status
  changeStatus(listId,status){
    this.needslistProvider.changeviewStatus(listId,status).
    subscribe(myneeds => {
    this.needslistProvider.showToast(myneeds.message);
    },
    err =>{
    this.needslistProvider.showErrorToast(err);
    })
  }
}
