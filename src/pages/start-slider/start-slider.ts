import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RoleChoicePage} from "../role-choice/role-choice";
import {Storage} from '@ionic/storage';

/**
 * Generated class for the StartSliderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-start-slider',
  templateUrl: 'start-slider.html',
})
export class StartSliderPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartSliderPage');
  }

  slides = [
    {
      title: "Willkommen zu YOURCOACH!",
      description: "Mit <b>YOURCOACH</b> bleiben Coach und Schüler im engen Kontakt beim Training. Ob Sport, Musik oder Malerei -  alles ist möglich!",
      image: "assets/images/slide1.png",
    },
    {
      title: "Der Coach immer in der Tasche",
      description: "Du willst auch trainieren, wenn dein Personal Coach nicht dabei ist? Lasse dich von <b>deinem Coach</b> digital coachen",
      image: "assets/images/slide2.png",
    },
    {
      title: "Näher an den Schülern",
      description: "Du bist Coach und willst deine Schüiler rund um die Uhr betreuen? Lade <b>deine Schüler</b> ein, gib ihnen Aufgaben und bewerte ihren Fortschritt.",
      image: "assets/images/slide3.png",
    }
  ];

  goToRoleChoice() {
    this.navCtrl.push(RoleChoicePage);
    this.storage.set('introShown', true);
  }

}
