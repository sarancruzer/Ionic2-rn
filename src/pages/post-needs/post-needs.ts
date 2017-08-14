import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FormBuilder,FormGroup,Validators,FormArray} from '@angular/forms';
import { Dashboard } from '../../pages/dashboard/dashboard';
import { NeedsListPage } from '../../pages/needs-list/needs-list';
import { PostneedsProvider } from '../../providers/postneeds/postneeds';



/**
 * Generated class for the PostNeeds page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-post-needs',
  templateUrl: 'post-needs.html',
})
export class PostNeeds {
authForm : FormGroup;
submitAttempt:any;
needs_name:any;
quantity:any;
product_name:any;
description:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public postneedsprovider: PostneedsProvider,public formBuilder: FormBuilder) {
    this.authForm = formBuilder.group({
      needs_name: ['', Validators.compose([Validators.required])],
      postneeds_list: this. formBuilder.array([this.postneedsAddress()]),
    })
  }

  postneedsAddress(){
    return this.formBuilder.group({
    product_name: ['', Validators.compose([Validators.required])],
    description: ['', Validators.compose([Validators.required])],
    quantity: ['', Validators.compose([Validators.required])],
    units: ['', Validators.compose([Validators.required])]
    });
  }

  addmoreNeeds(){    
    const control = <FormArray>this.authForm.controls['postneeds_list'];
    control.push(this.postneedsAddress());
  }

  removeNeeds(index){
    const control = <FormArray>this.authForm.controls['postneeds_list'];
    control.removeAt(index);
  }

  dashboardPage(){
    this.navCtrl.setRoot(Dashboard);
  }

  addNedds(){
    if(!this.authForm.valid)
    {
      this.submitAttempt = true;     
    }
    else
    {
      this.submitAttempt = false;
      this.postneedsprovider.sendpostNeeds(this.needs_name,this.product_name,this.description,this.quantity).subscribe(users => {
      this.postneedsprovider.showToast(users.message);
      this.navCtrl.setRoot(NeedsListPage);
      })
    }
  }

}
