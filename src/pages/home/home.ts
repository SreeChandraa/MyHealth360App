import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { DashboardPage } from '../dashboard/dashboard';
import { DocregisterPage } from '../docregister/docregister';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

phonenumber:number;
password:string;
  constructor(public navCtrl: NavController) {

  }
  
  login()
{
   this.navCtrl.push(DashboardPage);
}

goRegisterUser()
{
  this.navCtrl.push(RegisterPage);
}
goRegisterDoc()
{
  this.navCtrl.push(DocregisterPage);
}
}



 

