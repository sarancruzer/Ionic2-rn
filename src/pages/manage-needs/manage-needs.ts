import { Component } from '@angular/core';
import { NavController, NavParams,ModalController } from 'ionic-angular';
import { Dashboard } from '../../pages/dashboard/dashboard';
import { ChangeQuantity } from '../../pages/change-quantity/change-quantity';
import { NeedslistProvider } from '../../providers/needslist/needslist';



/**
 * Generated class for the ManageNeeds page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-manage-needs',
  templateUrl: 'manage-needs.html',
})
export class ManageNeeds {
  listId:any;
  viewListInfo:any=[];
  viewneedListInfo:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public needslistProvider:NeedslistProvider) {
  this.listId=navParams.get("listId");
  this.onInit(this.listId);
  }
  
  dashboardPage(){
  	this.navCtrl.setRoot(Dashboard);
  }

  onInit(listId)
  {
    this.needslistProvider.viewLists(listId).subscribe(
     (viewList) => {
      this.viewListInfo=viewList.data.data;
      this.viewneedListInfo=viewList.products_list.data;
      console.log(this.viewneedListInfo);
    },
    err =>{
    this.needslistProvider.showErrorToast(err);
    });    
  }

  modifyNeeds(viewneeds)
  {
    let modal = this.modalCtrl.create(ChangeQuantity,{needs_data:viewneeds});
    modal.present();
  }

  changeStatus(listId,status)
  {
    this.needslistProvider.changeviewStatus(listId,status).
    subscribe(myneeds => {
    this.needslistProvider.showToast(myneeds.message);
    },
     err =>{
    this.needslistProvider.showErrorToast(err);
    })
  }
}
