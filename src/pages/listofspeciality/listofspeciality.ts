import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DoclistPage } from '../doclist/doclist';
  

/**
 * Generated class for the ListofspecialityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listofspeciality',
  templateUrl: 'listofspeciality.html',
})
export class ListofspecialityPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListofspecialityPage');
  }
  get1()
  {
    this.navCtrl.push(DoclistPage);
  }

}
