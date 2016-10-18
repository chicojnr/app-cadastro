import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the MapsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-maps-page',
  templateUrl: 'maps-page.html'
})
export class MapsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello MapsPage Page');
  }

}
