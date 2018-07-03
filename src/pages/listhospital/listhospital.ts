import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DoclistPage } from '../doclist/doclist';


@IonicPage()
@Component({
  selector: 'page-listhospital',
  templateUrl: 'listhospital.html',
})
export class ListhospitalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListhospitalPage');
  }
  
  viewDoclist(){
    this.navCtrl.push(DoclistPage);
  }
  

}
