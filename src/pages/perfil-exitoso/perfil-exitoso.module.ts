import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfilExitosoPage } from './perfil-exitoso';

@NgModule({
  declarations: [
    PerfilExitosoPage,
  ],
  imports: [
    IonicPageModule.forChild(PerfilExitosoPage),
  ],
  exports: [
    PerfilExitosoPage
  ]
})
export class PerfilExitosoPageModule {}
