import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LineaPasosPage } from './linea-pasos';

@NgModule({
  declarations: [
    LineaPasosPage,
  ],
  imports: [
    IonicPageModule.forChild(LineaPasosPage),
  ],
  exports: [
    LineaPasosPage
  ]
})
export class LineaPasosPageModule {}
