import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { Info3Page } from '../info3/info3';
/**
 * Generated class for the Info2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-info2',
  templateUrl: 'info2.html',
})
export class Info2Page {

  public idioma;

  // Información
  public title;
  public description;
  public text_button;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.idioma = this.navParams.get('idioma');

    if(this.idioma == "es" || this.idioma == ""){
      this.title = "Recibe información general";
      this.description = "Encuentra los principales temas que pueden interesarte, explicados de manera clara y sencilla";
      this.text_button = "Siguiente";
    }else{
      this.title = "Jwenn enfòmasyon jeneral";
      this.description = "Jwenn pwoblèm yo ki prensipal ki ka nan enterè, eksplike nan klè ak senp";
      this.text_button = "kontinye";
    }
  }

  navigate(miurl){
  	if(miurl == 'InfoPage') {
      this.navCtrl.push(InfoPage, {idioma: this.idioma }, {animate: false});
  	}
  	if(miurl == 'Info3Page') {
  		this.navCtrl.push(Info3Page, {idioma: this.idioma }, {animate: false});
  	}
  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Info2Page');
  }

}
