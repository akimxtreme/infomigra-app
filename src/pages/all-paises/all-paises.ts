import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LlegadaChilePage } from '../llegada-chile/llegada-chile';
import { CountriesProvider } from '../../providers/countries/countries';

/**
 * Generated class for the AllPaisesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-all-paises',
  templateUrl: 'all-paises.html',
  providers:[CountriesProvider]
})
export class AllPaisesPage {
  // public countries;
  public idioma;

  // Información
  public title;
  public text_question;

  // Mis datos
  public mi_genero;

  // Continentes
  public america;
  public europa;
  public asia;
  public africa;
  public oceania;

  constructor(public navCtrl: NavController, public navParams: NavParams, private countriesJSON:CountriesProvider) {
    this.idioma = this.navParams.get('idioma');

    this.mi_genero = this.navParams.get('genero');

    if(this.idioma == "es" || this.idioma == ""){
      this.title = "CREANDO TU PERFIL";
      this.text_question = "¿De qué país eres?";
    }else{
      this.title = "KREYE PWOFIL OU";
      this.text_question = "Moun ki peyi ou ye?";
    }

    /*
    Continent IDs
    América = 1
    Europa  = 2
    Asia    = 3
    África  = 4
    Oceanía = 5
    */

    this.countriesJSON.getCountries('1').subscribe(
            data => {
                //.testData = data.json();
                this.america = data.json();
            },
            err => console.error(err),
            () => console.log( JSON.stringify(this.america))
        );

    this.countriesJSON.getCountries('2').subscribe(
            data => {
                //.testData = data.json();
                this.europa = data.json();
            },
            err => console.error(err),
            () => console.log( JSON.stringify(this.europa))
        );

    this.countriesJSON.getCountries('3').subscribe(
            data => {
                //.testData = data.json();
                this.asia = data.json();
            },
            err => console.error(err),
            () => console.log( JSON.stringify(this.asia))
        );

    this.countriesJSON.getCountries('4').subscribe(
            data => {
                //.testData = data.json();
                this.africa = data.json();
            },
            err => console.error(err),
            () => console.log( JSON.stringify(this.africa))
        );

    this.countriesJSON.getCountries('5').subscribe(
            data => {
                //.testData = data.json();
                this.oceania = data.json();
            },
            err => console.error(err),
            () => console.log( JSON.stringify(this.oceania))
        );


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllPaisesPage');
  }


  nombre_img_personaje(generic_image,flag_image){
    var nombre = "generico";
    if(generic_image != true){
       nombre = flag_image.substr(0,flag_image.length - 4);
    }
    return nombre;
  }

  pais(id_pais,generic_image,flag_image, country_category_percentage_profile){   

    this.navCtrl.push(LlegadaChilePage,
      {
        pais: id_pais,
        country_category_percentage_profile: country_category_percentage_profile,
        genero: this.mi_genero,
        personaje: this.nombre_img_personaje(generic_image,flag_image),
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

}
