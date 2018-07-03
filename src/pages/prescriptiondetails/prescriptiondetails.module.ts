import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrescriptiondetailsPage } from './prescriptiondetails';

@NgModule({
  declarations: [
    PrescriptiondetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PrescriptiondetailsPage),
  ],
})
export class PrescriptiondetailsPageModule {}
