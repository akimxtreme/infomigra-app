import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProgresoPage } from '../progreso/progreso';
import { FamilyBond } from '../../providers/family-bond';

/**
 * Generated class for the VinculoFamiliar page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-vinculo-familiar',
  templateUrl: 'vinculo-familiar.html',
})
export class VinculoFamiliar {

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

  public url_personaje;

  // Información
  public title;
  public text_question;

  public vinculo_familiar;

  

  constructor(public navCtrl: NavController, public navParams: NavParams, private vinculoJSON:FamilyBond) {
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

    this.url_personaje = "assets/nacionalidad/";
    if(this.personaje != "generico"){
      this.url_personaje = "http://localhost:3000/assets/nacionalidad/";
    }    
    this.url_personaje = this.url_personaje + this.personaje  + '-' + this.genero.toLowerCase() + '-2.png';
    // http://localhost:3000/assets/nacionalidad/bolivia-m-2.png
    // assets/nacionalidad/generico-m-2.png

    this.vinculoJSON.getFamilyBond().subscribe(
            data => {
                //.testData = data.json();
                this.vinculo_familiar = data.json();
            },
            err => console.error(err),
            () => console.log( JSON.stringify(this.vinculo_familiar))
        );

    if(this.idioma == "es" || this.idioma == ""){
      this.title = "CREANDO TU PERFIL";
      this.text_question = "Tienes vínculo con:";
    }else{
      this.title = "KREYE PWOFIL OU";
      this.text_question = "Ou genyen lyen ak:";
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

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VinculoFamiliar');
  }

  next(vinculo_id, vinculo_percentage_profile){

    console.log('situacion_id => ' + vinculo_id);
    console.log('situacion_percentage_profile => ' + vinculo_percentage_profile);
    
    this.navCtrl.push(ProgresoPage,
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
          vinculo_familiar_id: vinculo_id,
          vinculo_familiar_percentage_profile: vinculo_percentage_profile,
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
