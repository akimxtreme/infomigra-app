import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SituacionActualPage } from '../situacion-actual/situacion-actual';

/**
 * Generated class for the TiempoLlegadaChilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tiempo-llegada-chile',
  templateUrl: 'tiempo-llegada-chile.html',
})
export class TiempoLlegadaChilePage {
  public anio;
  public percent_anio;

  public mes;
  public percent_mes;

  public tiempo_llegada_anio;
  public tiempo_llegada_mes;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.anio = 0;
  	this.percent_anio = 'p0';

  	this.mes = 0;
  	this.percent_mes = 'p0';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TiempoLlegadaChilePage');
  }
  /*
  anio_f(valor){   	
  	this.anio = 5;
  	this.percent = 'p10';
  }
  */

  suma(type){
  	if(type == 'anio'){
  		switch (this.anio) {
  		case 0: this.anio = this.anio + 1; this.percent_anio = 'p10'; break;
  		case 1: this.anio = this.anio + 1; this.percent_anio = 'p20'; break;
  		case 2: this.anio = this.anio + 1; this.percent_anio = 'p30'; break;
  		case 3: this.anio = this.anio + 1; this.percent_anio = 'p40'; break;
  		case 4: this.anio = this.anio + 1; this.percent_anio = 'p50'; break;
  		case 5: this.anio = this.anio + 1; this.percent_anio = 'over50 p60'; break;
  		case 6: this.anio = this.anio + 1; this.percent_anio = 'over50 p70'; break;
  		case 7: this.anio = this.anio + 1; this.percent_anio = 'over50 p80'; break;
  		case 8: this.anio = this.anio + 1; this.percent_anio = 'over50 p90'; break;
  		case 9: this.anio = this.anio + 1; this.percent_anio = 'over50 p100'; break;
  		}
  	}else{
  		switch (this.mes) {
  		case 0: this.mes = this.mes + 1; this.percent_mes = 'p20'; break;
  		case 1: this.mes = this.mes + 1; this.percent_mes = 'p28'; break;
  		case 2: this.mes = this.mes + 1; this.percent_mes = 'p36'; break;
  		case 3: this.mes = this.mes + 1; this.percent_mes = 'p44'; break;
  		case 4: this.mes = this.mes + 1; this.percent_mes = 'over50 p52'; break;
  		case 5: this.mes = this.mes + 1; this.percent_mes = 'over50 p60'; break;
  		case 6: this.mes = this.mes + 1; this.percent_mes = 'over50 p68'; break;
  		case 7: this.mes = this.mes + 1; this.percent_mes = 'over50 p76'; break;
  		case 8: this.mes = this.mes + 1; this.percent_mes = 'over50 p84'; break;
  		case 9: this.mes = this.mes + 1; this.percent_mes = 'over50 p94'; break;
  		case 10: this.mes = this.mes + 1; this.percent_mes = 'over50 p100'; break;
  		case 11: this.anio = this.anio + 1; this.mes = 0; this.percent_mes = 'p0'; break;
  		}
  	}
  	
  }

  resta(type){
  	if(type == 'anio'){

  		switch (this.anio) {
  		case 0: this.percent_anio = 'p0'; break;
  		case 1: this.anio = this.anio - 1; this.percent_anio = 'p0'; break;
  		case 2: this.anio = this.anio - 1; this.percent_anio = 'p10'; break;
  		case 3: this.anio = this.anio - 1; this.percent_anio = 'p20'; break;
  		case 4: this.anio = this.anio - 1; this.percent_anio = 'p30'; break;
  		case 5: this.anio = this.anio - 1; this.percent_anio = 'p40'; break;
  		case 6: this.anio = this.anio - 1; this.percent_anio = 'p50'; break;
  		case 7: this.anio = this.anio - 1; this.percent_anio = 'over50 p60'; break;
  		case 8: this.anio = this.anio - 1; this.percent_anio = 'over50 p70'; break;
  		case 9: this.anio = this.anio - 1; this.percent_anio = 'over50 p80'; break;
  		case 10: this.anio = this.anio - 1; this.percent_anio = 'over50 p90'; break;  		
  		}

  	}else {
  		switch (this.mes) {
  		case 0: this.percent_mes = 'p0'; break;
  		case 1: this.mes = this.mes - 1; this.percent_mes = 'p0'; break;
  		case 2: this.mes = this.mes - 1; this.percent_mes = 'p20'; break;
  		case 3: this.mes = this.mes - 1; this.percent_mes = 'p28'; break;
  		case 4: this.mes = this.mes - 1; this.percent_mes = 'p36'; break;
  		case 5: this.mes = this.mes - 1; this.percent_mes = 'p44'; break;
  		case 6: this.mes = this.mes - 1; this.percent_mes = 'over50 p52'; break;
  		case 7: this.mes = this.mes - 1; this.percent_mes = 'over50 p60'; break;
  		case 8: this.mes = this.mes - 1; this.percent_mes = 'over50 p68'; break;
  		case 9: this.mes = this.mes - 1; this.percent_mes = 'over50 p76'; break;
  		case 10: this.mes = this.mes - 1; this.percent_mes = 'over50 p84'; break;  		
  		case 11: this.mes = this.mes - 1; this.percent_mes = 'over50 p94'; break;
  		case 12: this.mes = this.mes - 1; this.percent_mes = 'over50 p100'; break;
  		}
  	}
  	
  	
  }

  next(){

  	this.tiempo_llegada_anio = "Año: " + this.anio;
  	this.tiempo_llegada_mes = "Mes: " + this.mes;


    this.navCtrl.push(SituacionActualPage,{
        tiempo_llegada_anio: this.anio,
        tiempo_llegada_mes: this.mes,
        img_pais: this.navParams.get('img_pais')
      });
  }



}

