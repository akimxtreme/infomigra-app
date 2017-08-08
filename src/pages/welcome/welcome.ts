import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ThemePage } from '../theme/theme';
import { SeguridadPage } from '../seguridad/seguridad';
/**
 * Generated class for the WelcomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  public idioma;
  
  // Información
  public title;
  public text_1;
  public text_perfil;
  public text_2;
  public text_info_general;
  public text_account;
  public text_login;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.idioma = this.navParams.get('idioma');

    if(this.idioma == "es" || this.idioma == ""){
      this.title = "¡Bienvenido!";
      this.text_1 = "Para obtener información personalizada y poder guiarte debes";
      this.text_perfil = "crear tu perfil";
      this.text_2 = "De lo contrario accede a ";
      this.text_info_general = "información general";
      this.text_account = "¿Ya tienes una cuenta?";
      this.text_login = "entra ahora";
    }else{
      this.title = "Byenveni!";
      this.text_1 = "Pou pèsonalize enfòmasyon yo gide ou, epi ou dwe";      
      this.text_perfil = "kreye pwofil ou";
      this.text_2 = "Sinon aksè ";
      this.text_info_general = "enfòmasyon jeneral";
      this.text_account = "Deja ou gen yon kont?";
      this.text_login = "antre nan kounye a";
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  navigate(miurl){
  	if(miurl == 'ThemePage') {
  		this.navCtrl.push(ThemePage, {idioma: this.idioma }, {animate: false});
  	}
  	if(miurl == 'SeguridadPage') {
  		this.navCtrl.push(SeguridadPage, {idioma: this.idioma }, {animate: false});
  	}
  }

}
