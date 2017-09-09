import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TiempoSituacionActualPage } from '../tiempo-situacion-actual/tiempo-situacion-actual';
import { AllSituacionActualPage } from '../all-situacion-actual/all-situacion-actual';
import { CurrentStatus } from '../../providers/current-status';
/**
 * Generated class for the SituacionActualPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-situacion-actual',
  templateUrl: 'situacion-actual.html',
})
export class SituacionActualPage {
  //public img_pais;

  // Datos
  public idioma;
  public genero;
  public pais;
  public country_category_percentage_profile;
  public personaje;
  public llegada_pais_id;
  public llegada_percentage_profile;
  public tiempo_llegada_anio;
  public tiempo_llegada_mes;


  public url_personaje;

  // Información
  public title;
  public text_question;

  public situation_actual;

  constructor(public navCtrl: NavController, public navParams: NavParams, private situationJSON:CurrentStatus) {
  	// this.img_pais = navParams.get('img_pais');

    this.idioma = this.navParams.get('idioma');
    this.genero = navParams.get('genero');
    this.pais = navParams.get('pais');
    this.country_category_percentage_profile = navParams.get('country_category_percentage_profile');
    this.personaje = navParams.get('personaje');
    this.llegada_pais_id = navParams.get('llegada_pais_id');
    this.llegada_percentage_profile = navParams.get('llegada_percentage_profile');
    this.tiempo_llegada_anio = navParams.get('tiempo_llegada_anio');
    this.tiempo_llegada_mes = navParams.get('tiempo_llegada_mes');


    this.url_personaje = "assets/nacionalidad/";
    if(this.personaje != "generico"){
      //this.url_personaje = "https://infomigra-app.herokuapp.com/assets/nacionalidad/";
    }    
    this.url_personaje = this.url_personaje + this.personaje  + '-' + this.genero.toLowerCase() + '-2.png';
    // https://infomigra-app.herokuapp.com/assets/nacionalidad/bolivia-m-2.png
    // assets/nacionalidad/generico-m-2.png

    
    this.situationJSON.getCurrent3().subscribe(
            data => {
                //.testData = data.json();
                this.situation_actual = data.json();
            },
            err => console.error(err),
            () => console.log( JSON.stringify(this.situation_actual))
        );
    

    if(this.idioma == "es" || this.idioma == ""){
      this.title = "CREANDO TU PERFIL";
      this.text_question = "¿Cual es tu estado migratorio actual?";
    }else{
      this.title = "KREYE PWOFIL OU";
      this.text_question = "Ki sitiyasyon migratwa ou genyen kounye a?";
    }

    console.log('idioma => '+ this.idioma);
    console.log('genero => '+ this.genero);
    console.log('pais => '+ this.pais);
    console.log('country_category_percentage_profile => '+ this.country_category_percentage_profile);
    console.log('personaje => '+ this.personaje);
    console.log('llegada_pais_id => '+ this.llegada_pais_id);
    console.log('llegada_percentage_profile => '+ this.llegada_percentage_profile);
    console.log('tiempo_llegada_anio => '+ this.tiempo_llegada_anio);
    console.log('tiempo_llegada_mes => '+ this.tiempo_llegada_mes);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SituacionActualPage');
  }

  

  llegada(situacion_id, situacion_percentage_profile){

    console.log('situacion_id => ' + situacion_id);
    console.log('situacion_percentage_profile => ' + situacion_percentage_profile);
    
    this.navCtrl.push(TiempoSituacionActualPage,
      {
          genero: this.genero,
          pais: this.pais,
          country_category_percentage_profile: this.country_category_percentage_profile,
          personaje: this.personaje,
          llegada_pais_id: this.llegada_pais_id,
          llegada_percentage_profile: this.llegada_percentage_profile,
          tiempo_llegada_anio: this.tiempo_llegada_anio,
          tiempo_llegada_mes: this.tiempo_llegada_mes,
          situacion_actual_id: situacion_id,
          situacion_actual_percentage_profile: situacion_percentage_profile,
          idioma: this.idioma
      },
      {
        animate: true,
        animation:'transition',
        duration:500,
        direction:'forward'
      }
    );
  }


  allEstados(){
    this.navCtrl.push(AllSituacionActualPage,{        
        genero: this.genero,
        pais: this.pais,
        country_category_percentage_profile: this.country_category_percentage_profile,
        personaje: this.personaje,
        llegada_pais_id: this.llegada_pais_id,
        llegada_percentage_profile: this.llegada_percentage_profile,
        tiempo_llegada_anio: this.tiempo_llegada_anio,
        tiempo_llegada_mes: this.tiempo_llegada_mes,
        idioma: this.idioma
      });

  }
}
