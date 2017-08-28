import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { Info2Page } from '../info2/info2';
import { WelcomePage } from '../welcome/welcome';
/**
 * Generated class for the Info3Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-info3',
  templateUrl: 'info3.html',
})
export class Info3Page {

  public idioma;
  
  // Información
  public title;
  public description;
  public text_button;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.idioma = this.navParams.get('idioma');

    if(this.idioma == "es" || this.idioma == ""){
      this.title = "Reciba información personalizada";
      this.description = "Te brindo información general y además te muestro los trámites y pasos que debes seguir en Chile según tu situación particular, para obtener tu residencia definitiva, un guía perfecta para ti";
      this.text_button = "Siguiente";
    }else{
      this.title = "RESEVWA ENFÓMASYON PÈSONALIZE";
      this.description = "Mwen pral montre w ki dokiman wap bezwen  ak etap ou dwe swiv nan peyi Chili daprè sitiyasyon patikilye ou pou ou ka jwenn rezidans pèmanan, an plis nap ofri ou travay tou depan de tip  ou bezwen an. Yon gid pafè pou ou";
      this.text_button = "kontinye";
    }
  }

  navigate(miurl){
  	if(miurl == 'InfoPage') {
      this.navCtrl.push(InfoPage, {idioma: this.idioma }, {animate: true, animation:'transition',duration:500,direction:'back'});
  	}
  	if(miurl == 'Info2Page') {
      this.navCtrl.push(Info2Page, {idioma: this.idioma }, {animate: true, animation:'transition',duration:500,direction:'back'});
  	}
    if(miurl == 'WelcomePage') {
      this.navCtrl.push(WelcomePage, {idioma: this.idioma }, {animate: true, animation:'transition',duration:500,direction:'forward'});
    }
  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Info3Page');
  }

}
