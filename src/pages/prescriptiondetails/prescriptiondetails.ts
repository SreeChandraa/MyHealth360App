import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PharmacyPage } from '../pharmacy/pharmacy';

/**
 * Generated class for the PrescriptiondetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prescriptiondetails',
  templateUrl: 'prescriptiondetails.html',
})
export class PrescriptiondetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrescriptiondetailsPage');
  }
  order(){
    this.navCtrl.push(PharmacyPage);
  }

}
