import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllPaisesPage } from './all-paises';

@NgModule({
  declarations: [
    AllPaisesPage,
  ],
  imports: [
    IonicPageModule.forChild(AllPaisesPage),
  ],
  exports: [
    AllPaisesPage
  ]
})
export class AllPaisesPageModule {}
