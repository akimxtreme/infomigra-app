import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SexoPage } from './sexo';

@NgModule({
  declarations: [
    SexoPage,
  ],
  imports: [
    IonicPageModule.forChild(SexoPage),
  ],
  exports: [
    SexoPage
  ]
})
export class SexoPageModule {}
