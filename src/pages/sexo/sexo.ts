import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaisPage } from '../pais/pais';

/**
 * Generated class for the SexoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sexo',
  templateUrl: 'sexo.html',
})
export class SexoPage {

  public idioma;
  
  // Información
  public title;
  public text_question;
  public gender_m;
  public gender_f;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.idioma = this.navParams.get('idioma');

    if(this.idioma == "es" || this.idioma == ""){
      this.title = "CREANDO TU PERFIL";
      this.text_question = "¿Cuál es tu sexo?";
      this.gender_m = "Masculino";
      this.gender_f = "Femenino";
    }else{
      this.title = "KREYE PWOFIL OU";
      this.text_question = "Ki seks ou?";
      this.gender_m = "Gason";
      this.gender_f = "Fanm ";
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SexoPage');
  }



  genero(valor){
  	var url = "";
  	if(valor == 'F') {
  		url = "femenino.png"
  	}else{
  		url = "masculino.png"
  	}

    this.navCtrl.push(
      PaisPage, 
      {
        idioma: this.idioma,
        imagen: url,
        genero: valor
      }, 
      {
        animate: false
      });

  }
}
