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
  	this.anio = '00';
  	this.percent_anio = 'p0';

  	this.mes = '00';
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


      this.navCtrl.push(SituacionActualPage,{
          tiempo_llegada_anio: this.anio,
          tiempo_llegada_mes: this.mes,
          img_pais: this.navParams.get('img_pais')
        });
    }
  	
  }
}

