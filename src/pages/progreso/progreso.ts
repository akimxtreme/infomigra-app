import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';

/**
 * Generated class for the ProgresoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-progreso',
  templateUrl: 'progreso.html',
})
export class ProgresoPage {

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
  public situacion_actual_id;
  public situacion_actual_percentage_profile;
  public tiempo_situacion_actual_anio;
  public tiempo_situacion_actual_mes;
  public region;
  public vinculo_familiar_id;
  public vinculo_familiar_percentage_profile;

  // Información
  public title;
  public text;
  public text_2_img_porcentaje;
  public nivel_alto;
  public nivel_medio;
  public nivel_bajo;
  public nivel_progreso;
  public description;
  public text_button;
  public porcentaje_progreso;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.idioma = this.navParams.get('idioma');
    this.genero = navParams.get('genero');
    this.pais = navParams.get('pais');
    this.country_category_percentage_profile = navParams.get('country_category_percentage_profile');
    this.personaje = navParams.get('personaje');
    this.llegada_pais_id = navParams.get('llegada_pais_id');
    this.llegada_percentage_profile = navParams.get('llegada_percentage_profile');
    this.tiempo_llegada_anio = navParams.get('tiempo_llegada_anio');
    this.tiempo_llegada_mes = navParams.get('tiempo_llegada_mes');
    this.situacion_actual_id = navParams.get('situacion_actual_id');
    this.situacion_actual_percentage_profile = navParams.get('situacion_actual_percentage_profile');
    this.tiempo_situacion_actual_anio = navParams.get('tiempo_situacion_actual_anio');
    this.tiempo_situacion_actual_mes = navParams.get('tiempo_situacion_actual_mes');
    this.region = navParams.get('region');
    this.vinculo_familiar_id = navParams.get('vinculo_familiar_id');
    this.vinculo_familiar_percentage_profile = navParams.get('vinculo_familiar_percentage_profile');

    if(this.idioma == "es" || this.idioma == ""){
      this.title = "TU PROGRESO";
      this.text = "Tu progreso en Chile ha sido: ";
      this.text_2_img_porcentaje = "de progreso"
      this.nivel_alto = "alto";
      this.nivel_medio = "medio";
      this.nivel_bajo = "bajo";
      this.description = "Estas a 1 paso de finalizar tu perfil, recibir información, ofertas de empleo y seguir progresando en CHILE.";
      this.text_button = "Continuar";
    }else{
      this.title = "pwogrè ou";
      this.text = "Pwogrè o unan Chili te: ";
      this.text_2_img_porcentaje = "nan pwogrè";
      this.nivel_alto = "wo";
      this.nivel_medio = "mwayen";
      this.nivel_bajo = "ba";
      this.description = "Ou prèske prè pou ou finalize pwofil ou, resevwa enfòmasyon,  ofri travay ak kontinye pwogrese nan Chili.";
      this.text_button = "kontinye";
    }

    // Suma los 4 porcentajes de perfiles
    this.porcentaje_progreso = (+this.country_category_percentage_profile) + (+this.llegada_percentage_profile) + (+this.situacion_actual_percentage_profile) + (+this.vinculo_familiar_percentage_profile);
    /* 
      Valida y calcula el nivel de progreso 
        *  0-30  (bajo)
        *  31-60 (medio)
        *  >  60 (alto)
    */
    if( (this.porcentaje_progreso >= 0 && this.porcentaje_progreso <= 30) ){ 
      this.nivel_progreso = this.nivel_bajo; 
     }
    if( (this.porcentaje_progreso >= 31 && this.porcentaje_progreso <= 60) ){ 
      this.nivel_progreso = this.nivel_medio; 
     }
    if( (this.porcentaje_progreso > 60) ){ 
      this.nivel_progreso = this.nivel_alto; 
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
    console.log('situacion_actual_id => '+ this.situacion_actual_id);
    console.log('situacion_actual_percentage_profile => '+ this.situacion_actual_percentage_profile);
    console.log('tiempo_situacion_actual_anio => '+ this.tiempo_situacion_actual_anio);
    console.log('tiempo_situacion_actual_mes => '+ this.tiempo_situacion_actual_mes);
    console.log('region => '+ this.region);
    console.log('vinculo_familiar_id => '+ this.vinculo_familiar_id);
    console.log('vinculo_familiar_percentage_profile => '+ this.vinculo_familiar_percentage_profile);
    console.log('nivel_progreso => ' + this.nivel_progreso);


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgresoPage');
  }

  next(){

    this.navCtrl.push(RegistroPage,
      {
          genero: this.genero,
          pais: this.pais,
          country_category_percentage_profile: this.country_category_percentage_profile,
          personaje: this.personaje,
          llegada_pais_id: this.llegada_pais_id,
          llegada_percentage_profile: this.llegada_percentage_profile,
          tiempo_llegada_anio: this.tiempo_llegada_anio,
          tiempo_llegada_mes: this.tiempo_llegada_mes,
          situacion_actual_id: this.situacion_actual_id,
          situacion_actual_percentage_profile: this.situacion_actual_percentage_profile,
          tiempo_situacion_actual_anio: this.tiempo_situacion_actual_anio,
          tiempo_situacion_actual_mes: this.tiempo_situacion_actual_mes,
          region: this.region,
          vinculo_familiar_id: this.vinculo_familiar_id,
          vinculo_familiar_percentage_profile: this.vinculo_familiar_percentage_profile,
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

}
