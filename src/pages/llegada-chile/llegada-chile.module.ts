import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LlegadaChilePage } from './llegada-chile';

@NgModule({
  declarations: [
    LlegadaChilePage,
  ],
  imports: [
    IonicPageModule.forChild(LlegadaChilePage),
  ],
  exports: [
    LlegadaChilePage
  ]
})
export class LlegadaChilePageModule {}
