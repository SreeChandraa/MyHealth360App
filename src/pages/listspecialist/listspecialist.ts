import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListhospitalPage } from '../listhospital/listhospital';
import { ListofspecialityPage } from '../listofspeciality/listofspeciality';
/**
 * Generated class for the ListspecialistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listspecialist',
  templateUrl: 'listspecialist.html',
})
export class ListspecialistPage {

public isSearchbarOpened = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListspecialistPage');
  }
  searchDoc(){
    this.navCtrl.push(ListofspecialityPage);
  }
  searchHosp(){
   this.navCtrl.push(ListhospitalPage);
  }

}
