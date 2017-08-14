import { Component } from '@angular/core';
import { NavController, NavParams,Platform } from 'ionic-angular';
import { Dashboard } from '../../pages/dashboard/dashboard';
import { ManageNeeds } from '../../pages/manage-needs/manage-needs';
import { DonationProducts } from '../../pages/donation-products/donation-products';
import { NeedslistProvider } from '../../providers/needslist/needslist';

/**
 * Generated class for the NeedsListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-needs-list',
  templateUrl: 'needs-list.html',
})
export class NeedsListPage {
isAndroid: boolean = false;
status:any;
needs:string ="";
needslists:any=[];
donationsListsInfo:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,platform: Platform,public needslistProvider:NeedslistProvider) {
  	this.isAndroid = platform.is('android');
    this.needs=	"manageneeds";
  	console.log(navParams.get("needs"));
  	if(navParams.get("needs")!==undefined)
  	{
    	this.needs=navParams.get("needs");
    }
  }

  needsLists(){
    this.needslistProvider.needsLists().subscribe(myneeds => {
    this.needslists = myneeds.data;
    },
    err =>{
    this.needslistProvider.showErrorToast(err);
    })
  }

  donationsLists(){
    this.needslistProvider.donationsLists().
    subscribe(myneeds => {
    this.donationsListsInfo = myneeds.data;
    },
    err =>{
    this.needslistProvider.showErrorToast(err);
    })
  }

  changeStatus(listId,status){
    this.needslistProvider.changeStatus(listId,status).
    subscribe(myneeds => {
    this.needsLists();
    },
    err =>{
    this.needslistProvider.showErrorToast(err);
    })
  }

  dashboardPage(){
  	this.navCtrl.setRoot(Dashboard);
  }

  viewNeedsproductList(listId){
    this.navCtrl.push(ManageNeeds,{listId});
  }
  
  viewdonationproductList(donationId){
    this.navCtrl.push(DonationProducts,{donationId});
  }
}
