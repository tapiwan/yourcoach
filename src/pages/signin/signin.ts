import {Component} from '@angular/core';
import {IonicPage, LoadingController, ToastController} from 'ionic-angular';
import {SignupPage} from "../signup/signup";
import {ForgotPasswordPage} from "../forgot-password/forgot-password";
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  signupPage = SignupPage;
  forgotPasswordPage = ForgotPasswordPage;

  constructor(private authService: AuthService,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController) {
  }

  /**
   * Signs the user in
   *
   * @param form
   */
  onSignin(form: NgForm) {
    /**
     * Create loader
     */
    let loader = this.loadingCtrl.create({
      content: "Du wirst eingeloggt..."
    });
    loader.present();

    /**
     * Get form values
     */
    let email = form.value.email;
    let password = form.value.password;

    /**
     * Sign user in
     */
    this.authService.signin(email, password)
      .then(data => {
        loader.dismiss();

        this.showToast('Erfolgreich eingeloggt.');
      })
      .catch(error => {
        loader.dismiss();

        this.showToast(error.message);
      })
  }

  /**
   * Shows a short toast message
   *
   * @param msg
   * @param duration
   */
  private showToast(msg: string, duration: number = 3000) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: duration
    });
    toast.present();
  }
}