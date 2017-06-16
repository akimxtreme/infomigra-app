import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstadoActualPage } from './estado-actual';

@NgModule({
  declarations: [
    EstadoActualPage,
  ],
  imports: [
    IonicPageModule.forChild(EstadoActualPage),
  ],
  exports: [
    EstadoActualPage
  ]
})
export class EstadoActualPageModule {}
