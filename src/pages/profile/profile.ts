import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController} from 'ionic-angular';
import { Dashboard } from '../../pages/dashboard/dashboard';
import { UpdatePage } from '../../pages/update/update';
import { Storage } from '@ionic/storage';

import { Profile } from '../../providers/profile';

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers:[Profile]
})
export class ProfilePage {
  profileInfo:any=[];
  loading = this.loadingCtrl.create({ content: 'Please wait...'   });
  token:any;
  constructor(public nav: NavController, public storage:Storage, public loadingCtrl:LoadingController, public toastCtrl:ToastController, public navParams: NavParams, public profile:Profile) {
    this.storage.ready().then(() => {
      storage.get('token').then((token) => { this.token=token; 
      this.getProfile();
      })
    });
  }

  editProfile(){
	  this.nav.push(UpdatePage);
  }

  dashboardPage(){
    this.nav.setRoot(Dashboard);
  }

  getProfile()
  {
    this.profile.getProfile().subscribe(     
      (profileInfo) => {
        this.profileInfo=profileInfo;
        },
    (err) => { 
      let errObj=JSON.parse(err._body);
      if(errObj.statuscode===401)
        {
        this.showToaster(errObj.invalid);
        }
        else
        {
          this.showToaster("Try again later");
        }
        this.loading.dismiss();
    });
  }
  
  showToaster(message)
  {
   let toast = this.toastCtrl.create({
        message: message,
        duration: 3000,
        position: 'top'
        });
   toast.present();
  }
}
