import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppointmentPage } from '../appointment/appointment';

/**
 * Generated class for the DocdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-docdetails',
  templateUrl: 'docdetails.html',
})
export class DocdetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocdetailsPage');
  }
  bookapt()
  {
    this.navCtrl.push(AppointmentPage);
  }

}
