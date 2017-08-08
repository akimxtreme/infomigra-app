import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TiempoSituacionActualPage } from './tiempo-situacion-actual';

@NgModule({
  declarations: [
    TiempoSituacionActualPage,
  ],
  imports: [
    IonicPageModule.forChild(TiempoSituacionActualPage),
  ],
  exports: [
    TiempoSituacionActualPage
  ]
})
export class TiempoSituacionActualPageModule {}
