import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocdashboardPage } from './docdashboard';

@NgModule({
  declarations: [
    DocdashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(DocdashboardPage),
  ],
})
export class DocdashboardPageModule {}
