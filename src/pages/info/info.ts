import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Info2Page } from '../info2/info2';
import { Info3Page } from '../info3/info3';
/**
 * Generated class for the InfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {


  public idioma;

  // Información
  public title;
  public description;
  public text_button;



  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.idioma = this.navParams.get('idioma');

    if(this.idioma == "es" || this.idioma == ""){
      this.title = "Información y guía para inmigrantes";
      this.description = "La información que necesitas para una rápida y mejor inserción en Chile";
      this.text_button = "Siguiente";
    }else{
      this.title = "ENFÒMASYON AK GID POU IMIGRAN YO";
      this.description = "enfòmasyon  ke ou bezwen  pou ensèsyon rapid ou nan peyi Chili";
      this.text_button = "kontinye";
    }
  }

  navigate(miurl){
  	if(miurl == 'Info2Page') {
      this.navCtrl.push(Info2Page, {idioma: this.idioma }, {animate: true, animation:'transition',duration:500,direction:'forward'});
  	}
  	if(miurl == 'Info3Page') {
  		this.navCtrl.push(Info3Page, {idioma: this.idioma }, {animate: true, animation:'transition',duration:500,direction:'forward'});
  	}  	
  }
}
