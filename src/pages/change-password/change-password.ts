import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Dashboard } from '../../pages/dashboard/dashboard';
import { ForgotPasswordProvider } from '../../providers/forgot-password/forgot-password';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

/**
 * Generated class for the ChangePassword page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
  providers:[ForgotPasswordProvider]
})
export class ChangePassword {
submitAttempt:any;
password_submit:any;
nav:any;
changePwdForm: FormGroup;


constructor(public navCtrl: NavController, public navParams: NavParams,public forgotPasswordProvider: ForgotPasswordProvider, public formBuilder: FormBuilder) {
	this.password_submit = false;
  	this.nav = navCtrl;
  	this.changePwdForm = formBuilder.group({
        currentPassword: ['',Validators.compose([Validators.minLength(6), Validators.required])],
        newPassword: ['',Validators.compose([Validators.minLength(6), Validators.required])],
        re_enterPassword: ['',Validators.compose([Validators.minLength(6), Validators.required])]        
    });
}
changepassword(){
	if(this.changePwdForm.valid)
	{
	    if(this.changePwdForm.value.newPassword != this.changePwdForm.value.re_enterPassword)
	    {
        	this.password_submit = true;
        	this.submitAttempt = false;
		}
		else
		{
		    this.submitAttempt = false;
		    this.password_submit = false; 
		    this.forgotPasswordProvider.changepassword(this.changePwdForm.value.currentPassword,this.changePwdForm.value.newPassword,this.changePwdForm.value.re_enterPassword).subscribe(data => {           	
		    this.forgotPasswordProvider.showToast(data.message);
		    this.changePwdForm.reset();
		    this.cancel();		         
			},
			error =>{
		    	if(error.status===401)
		    	{
			    	this.forgotPasswordProvider.showToast(JSON.parse(error._body).error);  
			    }
		      	else
		      	{
		       		this.forgotPasswordProvider.showToast("Please try again later..!");   
		        }
				     
			    })
		} 
    }
    else
    {
    	this.submitAttempt = true;
  	}
  }

  cancel(){
  	 this.dashboard();
  }

  dashboard(){
   this.navCtrl.setRoot(Dashboard);
  } 

}
