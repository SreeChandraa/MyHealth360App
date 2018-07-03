import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PharmacyPage } from '../pharmacy/pharmacy';
import { PrescriptiondetailsPage } from '../prescriptiondetails/prescriptiondetails';

/**
 * Generated class for the ViewpresciptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewpresciption',
  templateUrl: 'viewpresciption.html',
})
export class ViewpresciptionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewpresciptionPage');
  }
  viewpres(){
   this.navCtrl.push(PrescriptiondetailsPage);
  }
  order(){
    this.navCtrl.push(PharmacyPage);
  }

}
