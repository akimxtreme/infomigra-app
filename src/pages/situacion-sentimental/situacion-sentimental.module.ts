import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SituacionSentimentalPage } from './situacion-sentimental';

@NgModule({
  declarations: [
    SituacionSentimentalPage,
  ],
  imports: [
    IonicPageModule.forChild(SituacionSentimentalPage),
  ],
  exports: [
    SituacionSentimentalPage
  ]
})
export class SituacionSentimentalPageModule {}
