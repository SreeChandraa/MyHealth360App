import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListspecialistPage } from '../listspecialist/listspecialist';
import { PharmacyPage } from '../pharmacy/pharmacy';
/**
 * Generated class for the ListoptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listoptions',
  templateUrl: 'listoptions.html',
})
export class ListoptionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListoptionsPage');
  }

 bookapt() {
 
 this.navCtrl.push(ListspecialistPage);
 }
 ordermed(){
  this.navCtrl.push(PharmacyPage);

 }

}
