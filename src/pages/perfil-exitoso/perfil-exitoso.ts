import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LineaPasosPage } from '../linea-pasos/linea-pasos';
/**
 * Generated class for the PerfilExitosoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-perfil-exitoso',
  templateUrl: 'perfil-exitoso.html',
})
export class PerfilExitosoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilExitosoPage');
  }

  navigate(miurl){
  	if(miurl == 'LineaPasosPage') {
  		this.navCtrl.push(LineaPasosPage);
  	}
  }

}
