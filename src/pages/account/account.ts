import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewpresciptionPage } from '../viewpresciption/viewpresciption';
import { Abouthealth360Page } from '../abouthealth360/abouthealth360';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }
  
  goprofile() {}
  medrecord() {}
  orderhist()   {}
  appthist()   {}
  paymenthist() {} 
  dischargehist() {}
  insurancesubs() {}
  pres(){
    this.navCtrl.push(ViewpresciptionPage);
  }
  about()
  {
    this.navCtrl.push(Abouthealth360Page);
  }  

}
