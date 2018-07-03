import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-creditdebitcard',
  templateUrl: 'creditdebitcard.html',
})
export class CreditdebitcardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams , private toastCtrl : ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreditdebitcardPage');
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Payment Successful',
      duration: 3000,
      position: 'middle'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
}
