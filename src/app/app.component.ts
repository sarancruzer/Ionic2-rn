import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { ProfilePage } from '../pages/profile/profile';
import { Dashboard } from '../pages/dashboard/dashboard';
import { PostNeeds } from '../pages/post-needs/post-needs';
import { Onboarding } from '../pages/onboarding/onboarding';
import { NeedsListPage } from '../pages/needs-list/needs-list';
import { ChangePassword } from '../pages/change-password/change-password';
import { Logout } from '../pages/logout/logout';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page

  rootPage = Onboarding;

  pages: Array<{myIcon:string,title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { myIcon:'fa fa-tachometer',title: 'Dashboard', component: Dashboard },
      { myIcon:'fa fa-clipboard',title: 'Post Needs', component: PostNeeds },
      { myIcon:'fa fa-address-book',title: 'Manage Needs', component: NeedsListPage },
      { myIcon:'fa fa-user',title: 'Profile', component: ProfilePage },
      { myIcon:'fa fa-refresh',title: 'Change Password', component: ChangePassword },
      { myIcon:'fa fa-sign-in',title: 'Logout', component: Logout }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
