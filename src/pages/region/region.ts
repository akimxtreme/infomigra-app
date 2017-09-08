import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VinculoFamiliar } from '../vinculo-familiar/vinculo-familiar';
import { Region } from '../../providers/region';

/**
 * Generated class for the RegionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-region',
  templateUrl: 'region.html',
})
export class RegionPage {

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

  // Información
  public title;
  public text_question;

  public region;

  constructor(public navCtrl: NavController, public navParams: NavParams, private regionJSON:Region) {
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

    this.regionJSON.getRegions().subscribe(
            data => {
                //.testData = data.json();
                this.region = data.json();
            },
            err => console.error(err),
            () => console.log( JSON.stringify(this.region))
        );

    if(this.idioma == "es" || this.idioma == ""){
      this.title = "CREANDO TU PERFIL";
      this.text_question = "¿De qué región eres?";
    }else{
      this.title = "KREYE PWOFIL OU";
      this.text_question = "Ki rejyon ou ye?";
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
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad RegionPage');
  }

  getRegion(valor){  	
  	//this.navCtrl.push(RegistroPage);  

    this.navCtrl.push(VinculoFamiliar,
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
          region: valor,
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
