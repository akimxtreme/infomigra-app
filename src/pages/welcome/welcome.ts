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
  public text_button;
  public text_info_button;
  public text_account;
  public text_login;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.idioma = this.navParams.get('idioma');

    if(this.idioma == "es" || this.idioma == ""){
      this.title = "¡Bienvenido!";
      this.text_1 = "Para brindarte Información personalizada y poder guiarte en el proceso de inserción debes";
      this.text_perfil = "crear tu perfil";
      this.text_2 = "Si no lo deseas puedes acceder a ";
      this.text_info_general = "información general";
      this.text_button = "Crear perfil";
      this.text_info_button = "Información personalizada";
      this.text_account = "¿Ya tienes cuenta?";
      this.text_login = "entra ahora";
    }else{
      this.title = "Byenveni!";
      this.text_1 = "Pou nou kapab ba ou enfòmasyon personalize e pou nou gide ou nan pwosisi ensèsyon an ou dwe ";      
      this.text_perfil = "kreye yon pwofil";
      this.text_2 = "Si o upa vle sao u kapaba rantre nan zòn ";
      this.text_info_general = "enfòmasyon general";
      this.text_button = "Kreye pwofil";
      this.text_info_button = "enfòmasyon pèsonalize";
      this.text_account = "ou genyen kont deja?";
      this.text_login = "Rantre kounye a";
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  navigate(miurl){
  	if(miurl == 'ThemePage') {
  		// this.navCtrl.push(ThemePage, {idioma: this.idioma }, {animate: false});
      this.navCtrl.push(ThemePage, {idioma: this.idioma });
  	}
  	if(miurl == 'SeguridadPage') {
  		this.navCtrl.push(SeguridadPage, {idioma: this.idioma });
  	}
  }

}
