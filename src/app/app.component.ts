import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import firebase from 'firebase';

import {SignupPage} from "../pages/signup/signup";
import {RoleChoicePage} from "../pages/role-choice/role-choice";
import {SigninPage} from "../pages/signin/signin";

import {AuthService} from "../services/auth.service";
import {UserService} from "../services/user.service";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = SignupPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private authService: AuthService, private userService: UserService) {
    /**
     * Initialize Firebase
     */
    firebase.initializeApp({
      apiKey: "AIzaSyBpt2x5kZIDvSBs1M7uxKpwuRllO3_LjXQ",
      authDomain: "yourcoach-dc0ca.firebaseapp.com",
      databaseURL: "https://yourcoach-dc0ca.firebaseio.com",
      projectId: "yourcoach-dc0ca",
      storageBucket: "yourcoach-dc0ca.appspot.com",
      messagingSenderId: "600282368434"
    });

    /**
     * Call platform ready events
     */
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();

      this.onAuthStateChanged();
      this.setRootPage();

      splashScreen.hide();
    });
  }

  /**
   * Change root page on authentication state change
   */
  private onAuthStateChanged() {
    firebase.auth().onAuthStateChanged(user => {
      this.setRootPage();
    });
  }

  /**
   * Set the right root page depending on the authentication
   * state of the user
   */
  private setRootPage() {
    let user = this.authService.getActiveUser();

    //If user is logged in and verified
    if(user && user.emailVerified) {
      this.rootPage = RoleChoicePage;
    }
    //If user is logged in but not verified
    else if(user && !user.emailVerified) {
      this.rootPage = SigninPage;
    }
    //If user is null
    else {
      this.rootPage = SignupPage;
    }
  }
}

