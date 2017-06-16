import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeguridadPage } from './seguridad';

@NgModule({
  declarations: [
    SeguridadPage,
  ],
  imports: [
    IonicPageModule.forChild(SeguridadPage),
  ],
  exports: [
    SeguridadPage
  ]
})
export class SeguridadPageModule {}
