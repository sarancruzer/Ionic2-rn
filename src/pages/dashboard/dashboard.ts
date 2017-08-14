import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PostNeeds } from '../../pages/post-needs/post-needs';
import { NeedsListPage } from '../../pages/needs-list/needs-list';
import { ProfilePage } from '../../pages/profile/profile';
/**
 * Generated class for the Dashboard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class Dashboard {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  postneeds()
  {
  	this.navCtrl.setRoot(PostNeeds);
  }

  donations()
  {
  	this.navCtrl.setRoot(NeedsListPage,{"needs":"donations"});
  }

  manageneeds()
  {
    this.navCtrl.setRoot(NeedsListPage,{"needs":"manageneeds"});
  }
  
  setting()
  {
    this.navCtrl.setRoot(ProfilePage);
  }
}
