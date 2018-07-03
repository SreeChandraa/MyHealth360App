import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreditdebitcardPage } from '../creditdebitcard/creditdebitcard';

/**
 * Generated class for the PaymentgatewayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paymentgateway',
  templateUrl: 'paymentgateway.html',
})
export class PaymentgatewayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentgatewayPage');
  }
  creditdebitcardpay(){
    this.navCtrl.push(CreditdebitcardPage);

  }

}
