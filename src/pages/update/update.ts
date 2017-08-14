import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController, ToastController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Dashboard } from '../../pages/dashboard/dashboard';
import { Profile } from '../../providers/profile';

/**
 * Generated class for the UpdatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
  providers:[Profile]
})
export class UpdatePage {
	updateprofile: string = "profit";
  isAndroid: boolean = false;
  profileInfo:any=[];
  updateObj:any;
  profileForm: FormGroup;
  loading = this.loadingCtrl.create({  content: 'Please wait...'  });

  constructor(public navCtrl: NavController,public formBuilder: FormBuilder,public loadingCtrl:LoadingController, public toastCtrl:ToastController, public navParams: NavParams,public platform: Platform, public profile:Profile) {
  	this.isAndroid = platform.is('android');
    this.profileForm = formBuilder.group({
    organization_name: ['', Validators.compose([Validators.required])],
    organization_description: ['', Validators.compose([Validators.required])]
    });
  }

  tab2(){
  	this.updateprofile="noofpeople"; 
  }

  tab3(){
  	this.updateprofile="contact"; 
  }

  updateProfile()
  {
     this.loading.present();
     this.updateObj={"organization_name":this.profileForm.value.organization_name,"organization_description":this.profileForm.value.organization_description};
     this.profile.updateProfile(this.updateObj).subscribe(     
      (profileInfo) => {
        this.profileInfo=profileInfo;
        this.loading.dismiss();
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

  dashboardPage(){
    this.navCtrl.setRoot(Dashboard);
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
