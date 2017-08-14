import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import * as env from '../../providers/app-config/app-config';


/*
  Generated class for the ForgotPasswordProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ForgotPasswordProvider {
rootUrl=env.APP_ROOTURL;
headers:any;
token:any;
  constructor(public http: Http,public toastCtrl: ToastController,public storage:Storage) {
    this.storage.ready().then(() => {
    storage.get('token').then((token) => { this.token=token;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Bearer ' + this.token);
    })  
   });
  }

  showToast(messageData){
    let toast = this.toastCtrl.create({
        message: messageData,
        position:"top",
        duration: 3000
    });
    toast.present();
  }

  showErrorToast(error){
    if(error.status===401){
      this.showToast(JSON.parse(error._body).error);
    }
    else{
      this.showToast("Please try again later");
    }
  }

  forgotpassword(email){
  	let posts={	"email":email  }
    return this.http.post(this.rootUrl+'forgot_password',posts)
      .map(res =>res.json());
  }

  changepassword(currentpass,newpass,reenterpass){
  let posts={"current_password":currentpass,"token":this.token,"new_password":newpass,"confirm_password":reenterpass  
  }
    return this.http.post(this.rootUrl+'change_password',posts)
      .map(res =>res.json());
  }
}
