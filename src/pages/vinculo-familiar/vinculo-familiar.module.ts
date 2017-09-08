import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VinculoFamiliar } from './vinculo-familiar';

@NgModule({
  declarations: [
    VinculoFamiliar,
  ],
  imports: [
    IonicPageModule.forChild(VinculoFamiliar),
  ],
  exports: [
    VinculoFamiliar
  ]
})
export class VinculoFamiliarModule {}
