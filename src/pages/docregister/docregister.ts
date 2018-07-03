import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DocdashboardPage } from '../docdashboard/docdashboard';

/**
 * Generated class for the DocregisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-docregister',
  templateUrl: 'docregister.html',
})
export class DocregisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocregisterPage');
  }
  register()
  {
    this.navCtrl.push(DocdashboardPage);
  }

}
