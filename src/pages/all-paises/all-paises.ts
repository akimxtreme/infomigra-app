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
  public countries;
  public idioma;

  // Información
  public title;
  public text_question;

  // Mis datos
  public mi_genero;

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


    this.countriesJSON.getCountries().subscribe(
            data => {
                //.testData = data.json();
                this.countries = data.json();
            },
            err => console.error(err),
            () => console.log( JSON.stringify(this.countries))
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

  pais(id_pais,generic_image,flag_image){   

    this.navCtrl.push(LlegadaChilePage,{
        pais: id_pais,
        genero: this.mi_genero,
        personaje: this.nombre_img_personaje(generic_image,flag_image),
        idioma: this.navParams.get('idioma')
      });
  }

}
