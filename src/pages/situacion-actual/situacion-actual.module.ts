import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SituacionActualPage } from './situacion-actual';

@NgModule({
  declarations: [
    SituacionActualPage,
  ],
  imports: [
    IonicPageModule.forChild(SituacionActualPage),
  ],
  exports: [
    SituacionActualPage
  ]
})
export class SituacionActualPageModule {}
