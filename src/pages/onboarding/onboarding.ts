import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Login } from '../../pages/login/login';

/**
 * Generated class for the Onboarding page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-onboarding',
  templateUrl: 'onboarding.html',
})
export class Onboarding {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  loadLogin(){
  	this.navCtrl.setRoot(Login);
  }
}
