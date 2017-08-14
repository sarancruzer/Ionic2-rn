import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController, ToastController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { LoginProvider } from '../../providers/login-provider';
/**
 * Generated class for the Register page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class Register {
  registerObj:any;
  result:any;
  loading = this.loadingCtrl.create({
    content: 'Please wait...'
    });
  registerForm: FormGroup;
  submitAttempt: boolean = false;
  constructor(public navCtrl: NavController,public formBuilder: FormBuilder, public loginProvider:LoginProvider, public loadingCtrl:LoadingController, public toastCtrl:ToastController, public navParams: NavParams) {
  	let emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
  	this.registerForm = formBuilder.group({
  		name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required,Validators.pattern(emailRegex)])],
      mobile: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      conpass: ['', Validators.compose([Validators.required])]
      });
  }

  register(){
  	if(!this.registerForm.valid){
      this.submitAttempt = true;
    }
    else{
      this.loading.present();
      this.submitAttempt = false;
      this.loading.present();
      this.registerObj={
        "email":this.registerForm.value.email,
        "contact_name":this.registerForm.value.name,
        "phone":this.registerForm.value.mobile,
        "password":this.registerForm.value.password,
        "confirm_password":this.registerForm.value.conpass,
      };
  	  this.loginProvider.register(this.registerObj).subscribe(     
      (resultInfo) => {
        this.result=resultInfo;
         this.loading.dismiss();
         this.showToaster(this.result.message);
        },
      (err) => { 
      let errObj=JSON.parse(err._body);
      if(errObj.statuscode===401)
        {
        this.showToaster(errObj.message);
        }
        else
        {
          this.showToaster("Try again later");
        }
        this.loading.dismiss();
      });
    }
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
