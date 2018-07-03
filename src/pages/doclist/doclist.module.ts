import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoclistPage } from './doclist';

@NgModule({
  declarations: [
    DoclistPage,
  ],
  imports: [
    IonicPageModule.forChild(DoclistPage),
  ],
})
export class DoclistPageModule {}
