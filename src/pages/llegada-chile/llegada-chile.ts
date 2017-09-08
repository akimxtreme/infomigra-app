import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TiempoLlegadaChilePage } from '../tiempo-llegada-chile/tiempo-llegada-chile';
import { AllStatusLlegadaPaisPage } from '../all-status-llegada-pais/all-status-llegada-pais';
import { SituationsArrivalsCountryProvider } from '../../providers/situations-arrivals-country/situations-arrivals-country';
/**
 * Generated class for the LlegadaChilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-llegada-chile',
  templateUrl: 'llegada-chile.html',
  providers:[SituationsArrivalsCountryProvider]
})
export class LlegadaChilePage {
  // Datos
  public idioma;
  public genero;
  public pais;
  public country_category_percentage_profile;
  public personaje;
  public url_personaje;

  public situations_arrivals_country;

  // Información
  public title;
  public text_question;

  constructor(public navCtrl: NavController, public navParams: NavParams, private situationJSON:SituationsArrivalsCountryProvider) {
    this.idioma = this.navParams.get('idioma');
    this.genero = navParams.get('genero');
    this.pais = navParams.get('pais');
    this.country_category_percentage_profile = navParams.get('country_category_percentage_profile');
    this.personaje = navParams.get('personaje');

    this.url_personaje = "assets/nacionalidad/";
    if(this.personaje != "generico"){
      this.url_personaje = "http://localhost:3000/assets/nacionalidad/";
    }    
    this.url_personaje = this.url_personaje + this.personaje  + '-' + this.genero.toLowerCase() + '-1.png';
    // http://localhost:3000/assets/nacionalidad/bolivia-m-1.png
    // assets/nacionalidad/generico-m-1.png


    this.situationJSON.getSituation3().subscribe(
            data => {
                //.testData = data.json();
                this.situations_arrivals_country = data.json();
            },
            err => console.error(err),
            () => console.log( JSON.stringify(this.situations_arrivals_country))
        );

    if(this.idioma == "es" || this.idioma == ""){
      this.title = "CREANDO TU PERFIL";
      this.text_question = "¿Cómo llegaste a Chile?";
    }else{
      this.title = "KREYE PWOFIL OU";
      this.text_question = "kijan ou te rive nan Chili?";
    }


    console.log('idioma => '+ this.idioma);
    console.log('genero => '+ this.genero);
    console.log('pais => '+ this.pais);
    console.log('country_category_percentage_profile => '+ this.country_category_percentage_profile);
    console.log('personaje => '+ this.personaje);
    console.log('url_personaje => '+ this.url_personaje);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LlegadaChilePage');
  }

  llegada(llegada_pais_id, percentage_profile){

    console.log('llegada_pais_id => ' + llegada_pais_id);
    console.log('percentage_profile => ' + percentage_profile);
    
    this.navCtrl.push(TiempoLlegadaChilePage,
      {
          llegada: llegada_pais_id,
          porcentaje: percentage_profile,
          genero: this.genero,
          pais: this.pais,
          country_category_percentage_profile: this.country_category_percentage_profile,
          personaje: this.personaje,
          idioma: this.navParams.get('idioma')
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
    this.navCtrl.push(AllStatusLlegadaPaisPage,{        
        genero: this.genero,
        pais: this.pais,
        country_category_percentage_profile: this.country_category_percentage_profile,
        personaje: this.personaje,
        idioma: this.navParams.get('idioma')
      });

  }

}
