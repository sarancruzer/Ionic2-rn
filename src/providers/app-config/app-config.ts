import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AppConfig provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export const APP_IMAGEPATH= 'http://183.82.33.232:8095/realneeds/';
export const APP_ROOTURL= APP_IMAGEPATH+"api/user/"
@Injectable()
export class AppConfigProvider {
  
  imageUrl="http://183.82.33.232:8095/realneeds/"; 
  rooturl=this.imageUrl+"api/user/";

  constructor(public http: Http) {
  }

  public setImageurl()
  {
  	return this.imageUrl; 
  }
  
  public setrooturl()
  {
  	return this.rooturl; 
  }
  
}
