import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SexoPage } from '../sexo/sexo';
/**
 * Generated class for the SeguridadPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-seguridad',
  templateUrl: 'seguridad.html',
})
export class SeguridadPage {

  public idioma;
  
  // Información
  public description_1;
  public text_link;
  public description_2;
  public text_button;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.idioma = this.navParams.get('idioma');

    if(this.idioma == "es" || this.idioma == ""){
      this.description_1 = "Todos tus datos personales serán mantenidos en ";
      this.text_link = "total confidencialidad. ";
      this.description_2 = "El hecho de agregarlos en esta aplicación no tendrá consecuencias, son solo para brindarte información.";
      this.text_button = "Siguiente";
    }else{
      this.description_1 = "Tout done pèsonèl yo pral kenbe nan";
      this.text_link = "total konfidansyalite";
      this.description_2 = "Add lefèt pa pral afekte aplikasyon sa a, ou se jis ba ou enfòmasyon.";
      this.text_button = "kontinye";
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeguridadPage');
  }

  navigate(miurl){
  	if(miurl == 'SexoPage') {
      this.navCtrl.push(SexoPage, {idioma: this.idioma }, {animate: false});
  	}
  }

}
