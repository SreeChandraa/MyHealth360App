import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DocdetailsPage } from '../docdetails/docdetails';

/**
 * Generated class for the DoclistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doclist',
  templateUrl: 'doclist.html',
})
export class DoclistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoclistPage');
  }
  viewDocdet()
  {
    this.navCtrl.push(DocdetailsPage);
  }

}
