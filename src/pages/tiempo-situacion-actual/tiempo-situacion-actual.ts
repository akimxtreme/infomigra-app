import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegionPage } from '../region/region';

/**
 * Generated class for the TiempoSituacionActualPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tiempo-situacion-actual',
  templateUrl: 'tiempo-situacion-actual.html',
})
export class TiempoSituacionActualPage {
  public anio;
  public percent_anio;

  public mes;
  public percent_mes;

  public tiempo_situacion_actual_anio;
  public tiempo_situacion_actual_mes;

  // Datos
  public idioma;
  public genero;
  public pais;
  public personaje;
  public llegada_pais_id;
  public llegada_percentage_profile;
  public tiempo_llegada_anio;
  public tiempo_llegada_mes;
  public situacion_actual_id;
  public situacion_actual_percentage_profile;



  // Información
  public title;
  public text_question;
  public text_anios;
  public text_meses;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.anio = '00';
  	this.percent_anio = 'p0';

  	this.mes = '00';
  	this.percent_mes = 'p0';

    this.idioma = this.navParams.get('idioma');
    this.genero = navParams.get('genero');
    this.pais = navParams.get('pais');
    this.personaje = navParams.get('personaje');
    this.llegada_pais_id = navParams.get('llegada_pais_id');
    this.llegada_percentage_profile = navParams.get('llegada_percentage_profile');
    this.tiempo_llegada_anio = navParams.get('tiempo_llegada_anio');
    this.tiempo_llegada_mes = navParams.get('tiempo_llegada_mes');
    this.situacion_actual_id = navParams.get('situacion_actual_id');
    this.situacion_actual_percentage_profile = navParams.get('situacion_actual_percentage_profile');


    if(this.idioma == "es" || this.idioma == ""){
      this.title = "CREANDO TU PERFIL";
      this.text_question = "¿Hace cuanto tiempo?";
      this.text_anios = "años";
      this.text_meses = "meses";
    }else{
      this.title = "KREYE PWOFIL OU";
      this.text_question = "Depi konbyen tan?";
      this.text_anios = "Ane";
      this.text_meses = "Mwa";
    }

    console.log('idioma => '+ this.idioma);
    console.log('genero => '+ this.genero);
    console.log('pais => '+ this.pais);
    console.log('personaje => '+ this.personaje);
    console.log('llegada_pais_id => '+ this.llegada_pais_id);
    console.log('llegada_percentage_profile => '+ this.llegada_percentage_profile);
    console.log('tiempo_llegada_anio => '+ this.tiempo_llegada_anio);
    console.log('tiempo_llegada_mes => '+ this.tiempo_llegada_mes);
    console.log('situacion_actual_id => '+ this.situacion_actual_id);
    console.log('situacion_actual_percentage_profile => '+ this.situacion_actual_percentage_profile);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TiempoSituacionActualPage');
  }

  suma_anio(){
    switch (this.anio) {
      case '00': this.anio = '01'; this.percent_anio = 'p10'; break;
      case '01': this.anio = '02'; this.percent_anio = 'p20'; break;
      case '02': this.anio = '03'; this.percent_anio = 'p30'; break;
      case '03': this.anio = '04'; this.percent_anio = 'p40'; break;
      case '04': this.anio = '05'; this.percent_anio = 'p50'; break;
      case '05': this.anio = '06'; this.percent_anio = 'over50 p60'; break;
      case '06': this.anio = '07'; this.percent_anio = 'over50 p70'; break;
      case '07': this.anio = '08'; this.percent_anio = 'over50 p80'; break;
      case '08': this.anio = '09'; this.percent_anio = 'over50 p90'; break;
      case '09': this.anio = '10'; this.percent_anio = 'over50 p100'; break;
      }
  }

  suma(type){
    if(type == 'anio'){
      switch (this.anio) {
      case '00': this.anio = '01'; this.percent_anio = 'p10'; break;
      case '01': this.anio = '02'; this.percent_anio = 'p20'; break;
      case '02': this.anio = '03'; this.percent_anio = 'p30'; break;
      case '03': this.anio = '04'; this.percent_anio = 'p40'; break;
      case '04': this.anio = '05'; this.percent_anio = 'p50'; break;
      case '05': this.anio = '06'; this.percent_anio = 'over50 p60'; break;
      case '06': this.anio = '07'; this.percent_anio = 'over50 p70'; break;
      case '07': this.anio = '08'; this.percent_anio = 'over50 p80'; break;
      case '08': this.anio = '09'; this.percent_anio = 'over50 p90'; break;
      case '09': this.anio = '10'; this.percent_anio = 'over50 p100'; break;
      }
    }else{
      switch (this.mes) {
      case '00': this.mes = '01'; this.percent_mes = 'p20'; break;
      case '01': this.mes = '02'; this.percent_mes = 'p28'; break;
      case '02': this.mes = '03'; this.percent_mes = 'p36'; break;
      case '03': this.mes = '04'; this.percent_mes = 'p44'; break;
      case '04': this.mes = '05'; this.percent_mes = 'over50 p52'; break;
      case '05': this.mes = '06'; this.percent_mes = 'over50 p60'; break;
      case '06': this.mes = '07'; this.percent_mes = 'over50 p68'; break;
      case '07': this.mes = '08'; this.percent_mes = 'over50 p76'; break;
      case '08': this.mes = '09'; this.percent_mes = 'over50 p84'; break;
      case '09': this.mes = '10'; this.percent_mes = 'over50 p94'; break;
      case '10': this.mes = '11'; this.percent_mes = 'over50 p100'; break;
      case '11': 
          if(this.anio != '10'){
              this.mes = '00'; this.percent_mes = 'p0'; this.suma_anio();
          }       
      break;
      }
    }
    
  }


  resta(type){
    if(type == 'anio'){

      switch (this.anio) {
      case '00': this.percent_anio = 'p0'; break;
      case '01': this.anio = '00'; this.percent_anio = 'p0'; break;
      case '02': this.anio = '01'; this.percent_anio = 'p10'; break;
      case '03': this.anio = '02'; this.percent_anio = 'p20'; break;
      case '04': this.anio = '03'; this.percent_anio = 'p30'; break;
      case '05': this.anio = '04'; this.percent_anio = 'p40'; break;
      case '06': this.anio = '05'; this.percent_anio = 'p50'; break;
      case '07': this.anio = '06'; this.percent_anio = 'over50 p60'; break;
      case '08': this.anio = '07'; this.percent_anio = 'over50 p70'; break;
      case '09': this.anio = '08'; this.percent_anio = 'over50 p80'; break;
      case '10': this.anio = '09'; this.percent_anio = 'over50 p90'; break;      
      }

    }else {
      switch (this.mes) {
      case '00': this.percent_mes = 'p0'; break;
      case '01': this.mes = '00'; this.percent_mes = 'p0'; break;
      case '02': this.mes = '01'; this.percent_mes = 'p20'; break;
      case '03': this.mes = '02'; this.percent_mes = 'p28'; break;
      case '04': this.mes = '03'; this.percent_mes = 'p36'; break;
      case '05': this.mes = '04'; this.percent_mes = 'p44'; break;
      case '06': this.mes = '05'; this.percent_mes = 'over50 p52'; break;
      case '07': this.mes = '06'; this.percent_mes = 'over50 p60'; break;
      case '08': this.mes = '07'; this.percent_mes = 'over50 p68'; break;
      case '09': this.mes = '08'; this.percent_mes = 'over50 p76'; break;
      case '10': this.mes = '09'; this.percent_mes = 'over50 p84'; break;      
      case '11': this.mes = '10'; this.percent_mes = 'over50 p94'; break;
      case '12': this.mes = '11'; this.percent_mes = 'over50 p100'; break;
      }
    }
    
    
  }

  next(){

    if( (this.anio != '00') || (this.mes != '00') ){

      this.tiempo_llegada_anio = "Año: " + this.anio;
      this.tiempo_llegada_mes = "Mes: " + this.mes;


      this.navCtrl.push(RegionPage,
        {
          genero: this.genero,
          pais: this.pais,
          personaje: this.personaje,
          llegada_pais_id: this.llegada_pais_id,
          llegada_percentage_profile: this.llegada_percentage_profile,
          tiempo_llegada_anio: this.tiempo_llegada_anio,
          tiempo_llegada_mes: this.tiempo_llegada_mes,
          situacion_actual_id: this.situacion_actual_id,
          situacion_actual_percentage_profile: this.situacion_actual_percentage_profile,
          tiempo_situacion_actual_anio: this.anio.substr(1),
          tiempo_situacion_actual_mes: this.mes.substr(1),
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

}
