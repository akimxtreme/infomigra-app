import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllStatusLlegadaPaisPage } from './all-status-llegada-pais';

@NgModule({
  declarations: [
    AllStatusLlegadaPaisPage,
  ],
  imports: [
    IonicPageModule.forChild(AllStatusLlegadaPaisPage),
  ],
  exports: [
    AllStatusLlegadaPaisPage
  ]
})
export class AllStatusLlegadaPaisPageModule {}
