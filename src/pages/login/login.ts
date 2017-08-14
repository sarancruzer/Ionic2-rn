import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { ForgotPassword } from '../../pages/forgot-password/forgot-password';
import { Register } from '../../pages/register/register';
import { Dashboard } from '../../pages/dashboard/dashboard';
import { LoginProvider } from '../../providers/login-provider';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {
  credentials = {email: '', password: ''};  
  loginForm: FormGroup;
  submitAttempt: boolean = false;
   
  constructor(public navCtrl: NavController,public toastCtrl:ToastController,public loadingCtrl: LoadingController, public formBuilder: FormBuilder, public navParams: NavParams,private storage: Storage,public loginProvider:LoginProvider) {
    this.loginForm = formBuilder.group({
        email: ['', Validators.compose([Validators.required])],
        password: ['', Validators.compose([Validators.required])]
        });
  }

  signup()
  {
  	this.navCtrl.push(Register);
  }

  forgotPassword()
  {
  	this.navCtrl.push(ForgotPassword);
  }

  login()
  {
    let loading = this.loadingCtrl.create({
    content: 'Please wait...'
    });
    if(!this.loginForm.valid){
      this.submitAttempt = true;
    }else{
    loading.present();
    this.submitAttempt = false;
    this.credentials.email = this.loginForm.value.email; 
    this.credentials.password = this.loginForm.value.password; 
    this.credentials = {email: this.credentials.email, password: this.credentials.password};
    this.loginProvider.login(this.credentials).subscribe(     
      (loginInfo) => {
        this.storage.ready().then(() => {
         this.storage.clear();
         this.storage.set('id', loginInfo['id']);
         this.storage.set('username', loginInfo['username']);
         this.storage.set('email', loginInfo['email']);
         this.storage.set('user_type', loginInfo['user_type']);
         this.storage.set('token', loginInfo['token']);
         this.storage.set('status', loginInfo['status']);    
         this.navCtrl.setRoot(Dashboard);     
         loading.dismiss();
       });
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
        loading.dismiss();
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
