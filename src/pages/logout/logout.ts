import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Login } from '../../pages/login/login';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the Logout page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class Logout {

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage) {
     this.storage.ready().then(() => {
     this.storage.clear();
     this.navCtrl.setRoot(Login);
 	 });
  }
}
