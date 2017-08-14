import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

import * as env  from '../providers/app-config/app-config';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LoginProvider {
 headers:any;
 rootUrl=env.APP_ROOTURL;
  constructor(public http: Http, public storage:Storage) {
  this.headers = new Headers();
  this.headers.append('Content-Type', 'application/json');
  }

  login(credentials){
   let _request= {"email": credentials.email,"password": credentials.password}
    return this.http.post(this.rootUrl+'ngo_login',_request,this.headers)
      .map(res => res.json());
  }

  register(registerObj){
  let _request= registerObj;
    return this.http.post(this.rootUrl+'signup',_request,this.headers)
      .map(res => res.json());
  }
}
