import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ListoptionsPage } from '../pages/listoptions/listoptions';
import { AccountPage } from '../pages/account/account';
import { ListspecialistPage } from '../pages/listspecialist/listspecialist';
import { ListhospitalPage } from '../pages/listhospital/listhospital';
import { DocregisterPage } from '../pages/docregister/docregister';
import { DocdashboardPage } from '../pages/docdashboard/docdashboard';
import { ListofspecialityPage } from '../pages/listofspeciality/listofspeciality';
import { DoclistPage } from '../pages/doclist/doclist';
import { DocdetailsPage } from '../pages/docdetails/docdetails';
import { AppointmentPage } from '../pages/appointment/appointment';
import { PaymentgatewayPage } from '../pages/paymentgateway/paymentgateway';
import { CreditdebitcardPage } from '../pages/creditdebitcard/creditdebitcard';
import { PharmacyPage } from '../pages/pharmacy/pharmacy';
import { OrderdetailsPage } from '../pages/orderdetails/orderdetails';
import { PatientdetailsPage } from '../pages/patientdetails/patientdetails';
import { DocprescribePage } from '../pages/docprescribe/docprescribe';
import { ViewpresciptionPage } from '../pages/viewpresciption/viewpresciption';
import { PrescriptiondetailsPage } from '../pages/prescriptiondetails/prescriptiondetails';
import { Abouthealth360Page } from '../pages/abouthealth360/abouthealth360';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    DashboardPage,
    ListoptionsPage,
    AccountPage,
    ListspecialistPage,
    ListhospitalPage,
    DocregisterPage,
    DocdashboardPage,
    ListofspecialityPage,
    DoclistPage,
    DocdetailsPage,
    AppointmentPage,
    PaymentgatewayPage,
    CreditdebitcardPage,
    PharmacyPage,
    OrderdetailsPage,
    PatientdetailsPage,
    DocprescribePage,
    ViewpresciptionPage,
    PrescriptiondetailsPage,
    Abouthealth360Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    DashboardPage,
    ListoptionsPage,
    AccountPage,
    ListspecialistPage,
    ListhospitalPage,
    DocregisterPage,
    DocdashboardPage,
    ListofspecialityPage,
    DoclistPage,
    DocdetailsPage,
    AppointmentPage,
    PaymentgatewayPage,
    CreditdebitcardPage,
    PharmacyPage,
    OrderdetailsPage,
    PatientdetailsPage,
    DocprescribePage,
    ViewpresciptionPage,
    PrescriptiondetailsPage,
    Abouthealth360Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
