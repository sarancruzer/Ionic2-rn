import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http,Headers } from '@angular/http';
import { Storage } from '@ionic/storage';

import * as env  from '../providers/app-config/app-config';
/*
  Generated class for the Profile provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class Profile {
headers:any;
options:any;
token:any;
list:any;
rootUrl=env.APP_ROOTURL;
  constructor(public http: Http,public storage:Storage) {
  this.storage.ready().then(() => {
  	console.log("fff");
  	console.log(this.token);
    storage.get('token').then((token) => { this.token=token;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    //this.headers.append('Authorization', this.token);
    //this.options = new RequestOptions({ headers: this.headers });
       }) 
   });
  }
    getProfile(){
  	 let _request= {"token":this.token};
     return this.http.post(this.rootUrl+'getprofile',_request,this.headers)
      .map(res => res.json());
     }
     updateProfile(obj){
  	 let _request= {"token":this.token,"organization_name":obj.organization_name,"organization_description":obj.organization_description,"org_govt_id":obj.org_govt_id,"org_exp_dt":obj.org_exp_dt,"org_govt_dt":obj.org_govt_dt,"street1":"street1","street2":"street2","zip":123456,"mobile":1234567890,"landline":910447554444,"email":"gggg@gg.com","contact_name":"ask","alt_contact_name":"alt_contact_name","org_site":obj.org_site,"country":1,"state":2,"city":5,"category":obj.category};
     return this.http.post(this.rootUrl+'update_profile',_request,this.headers)
      .map(res => res.json());
     }

}
