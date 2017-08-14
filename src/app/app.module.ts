import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule} from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';


import { Login } from '../pages/login/login';
import { ForgotPassword } from '../pages/forgot-password/forgot-password';
import { Register } from '../pages/register/register';
import { Dashboard } from '../pages/dashboard/dashboard';
import { PostNeeds } from '../pages/post-needs/post-needs';
import { NgoDonateProductListPage } from '../pages/ngo-donate-product-list/ngo-donate-product-list';
import { DonationProducts } from '../pages/donation-products/donation-products';
import { UpdatePage } from '../pages/update/update';
import { ProfilePage } from '../pages/profile/profile';
import { Onboarding } from '../pages/onboarding/onboarding';
import { ManageNeeds } from '../pages/manage-needs/manage-needs';
import { NeedsListPage } from '../pages/needs-list/needs-list';
import { ChangeQuantity } from '../pages/change-quantity/change-quantity';
import { ChangePassword } from '../pages/change-password/change-password';
import { Logout } from '../pages/logout/logout';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NeedslistProvider } from '../providers/needslist/needslist';
import { AppConfigProvider } from '../providers/app-config/app-config';
import { PostneedsProvider } from '../providers/postneeds/postneeds';
import { LoginProvider } from '../providers/login-provider';
import { ForgotPasswordProvider } from '../providers/forgot-password/forgot-password';



@NgModule({
  declarations: [
    MyApp,
    Onboarding,
    Login,
    ForgotPassword,
    Register,
    Dashboard,
    PostNeeds,
    NgoDonateProductListPage,
    DonationProducts,
    ManageNeeds,
    NeedsListPage,
    UpdatePage,
    ProfilePage,
    ChangeQuantity,
    ChangePassword,
    Logout

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Onboarding,
    Login,
    ForgotPassword,
    Register,
    Dashboard,
    PostNeeds,
    NgoDonateProductListPage,
    DonationProducts,
    ManageNeeds,
    NeedsListPage,
    UpdatePage,
    ProfilePage,
    ChangeQuantity,
    ChangePassword,
    Logout
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NeedslistProvider,
    AppConfigProvider,
    PostneedsProvider,
    LoginProvider,
    ForgotPasswordProvider
  ]
})
export class AppModule {}
