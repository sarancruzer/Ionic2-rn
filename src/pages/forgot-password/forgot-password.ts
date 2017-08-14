import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ForgotPasswordProvider } from '../../providers/forgot-password/forgot-password';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Login } from '../../pages/login/login';
import { Dashboard } from '../../pages/dashboard/dashboard';

/**
 * Generated class for the ForgotPassword page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPassword {
forgotForm : FormGroup;
submitAttempt:any;
email:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public forgotPasswordProvider: ForgotPasswordProvider, public formBuilder: FormBuilder) {
    this.forgotForm = formBuilder.group({
     email: ['', Validators.compose([Validators.required])]
    })
  }
  
  //Forgot passwords send to registered email id
  forgotpassword(){
    if(!this.forgotForm.valid)
    {
      this.submitAttempt = true;     
    }
    else
    {
      this.submitAttempt = false;
      this.forgotPasswordProvider.forgotpassword(this.forgotForm.value.email).subscribe(users => {
      this.forgotPasswordProvider.showToast(users.message);
    	this.navCtrl.setRoot(Login);
      })

    }
  }

  dashboardPage(){
    this.navCtrl.setRoot(Dashboard);
  }

}
