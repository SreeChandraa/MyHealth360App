import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListhospitalPage } from './listhospital';

@NgModule({
  declarations: [
    ListhospitalPage,
  ],
  imports: [
    IonicPageModule.forChild(ListhospitalPage),
  ],
})
export class ListhospitalPageModule {}
