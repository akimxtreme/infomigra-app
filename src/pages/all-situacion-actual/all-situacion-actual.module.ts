import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllSituacionActualPage } from './all-situacion-actual';

@NgModule({
  declarations: [
    AllSituacionActualPage,
  ],
  imports: [
    IonicPageModule.forChild(AllSituacionActualPage),
  ],
  exports: [
    AllSituacionActualPage
  ]
})
export class AllSituacionActualPageModule {}
