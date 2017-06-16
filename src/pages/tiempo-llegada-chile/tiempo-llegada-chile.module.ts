import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TiempoLlegadaChilePage } from './tiempo-llegada-chile';

@NgModule({
  declarations: [
    TiempoLlegadaChilePage,
  ],
  imports: [
    IonicPageModule.forChild(TiempoLlegadaChilePage),
  ],
  exports: [
    TiempoLlegadaChilePage
  ]
})
export class TiempoLlegadaChilePageModule {}
