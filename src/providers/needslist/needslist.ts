import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

import { ToastController } from 'ionic-angular';
import * as env  from '../../providers/app-config/app-config';


/*
  Generated class for the NeedslistProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class NeedslistProvider {
list:any;
headers:any;
token:any;
 rootUrl=env.APP_ROOTURL;
  constructor(public http: Http,public toastCtrl: ToastController,public storage:Storage) {
    this.storage.ready().then(() => {
    storage.get('token').then((token) => { this.token=token;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Bearer ' + this.token);
    })   
  });   
  }

  showToast(messageData){
    let toast = this.toastCtrl.create({
        message: messageData,
        position:"top",
        duration: 3000
      });
      toast.present();
  }

  showErrorToast(error){
    if(error.status===401){
      this.showToast(JSON.parse(error._body).error);
    }
    else{
      this.showToast("Please try again later");
    }
  }

  needsLists(){
  	this.list ={"token":this.token };
    return this.http.post(`${this.rootUrl }manageneed`,this.list,this.headers)
      .map(res =>res.json());
  }

  donationsLists(){
  	this.list ={"token":this.token };
    return this.http.post(`${this.rootUrl }manage_donation`,this.list,this.headers)
      .map(res =>res.json());
  }

  viewLists(listId){
    this.list ={ "id":listId,
       "token":this.token
    }
   return this.http.post(this.rootUrl+'manage_needs_view/'+listId,this.list,this.headers)
      .map(res =>res.json());
  }

  changeStatus(listId,status){
    if(status == 1)
    {
     this.list ={
     "token":this.token,
     "id":listId,
     "status":2
    }}
   else{
    this.list ={
     "token":this.token,
     "id":listId,
     "status":1 
     }
    }
    return this.http.post(`${this.rootUrl }manageneed_status/`+listId+'/'+status,this.list,this.headers)
      .map(res =>res.json());      
  }

  changeviewStatus(listId,status){
  if(status == 1)
    {
     this.list ={
     "token":this.token,
     "id":listId,
     "status":2
   }}
  else{
    this.list ={
     "token":this.token,
     "id":listId,
     "status":1 
    }
    }
    return this.http.post(`${this.rootUrl }manageviewstatus/`+listId+'/'+status,this.list,this.headers)
      .map(res =>res.json());
  }

  viewdonationLists(donationId){
  	this.list ={  "id":donationId,
        "token":this.token
    }
   return this.http.post(this.rootUrl+'manage_donation_view/'+donationId,this.list,this.headers)
      .map(res =>res.json());
  }

  editmanageNeeds(product_name,product_description,product_quantity,product_id){
  	this.list ={
     "token":this.token,
     "product":product_name,
     "description":product_description,
     "quantity":product_quantity,
     "productid":product_id
    }
     return this.http.post(`${this.rootUrl }edit_manageneed`,this.list)
      .map(res =>res.json());
  }
  
}
