import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LlegadaChilePage } from '../llegada-chile/llegada-chile';
import { AllPaisesPage } from '../all-paises/all-paises';
import { CountriesProvider } from '../../providers/countries/countries';

/**
 * Generated class for the PaisPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pais',
  templateUrl: 'pais.html',
  providers:[CountriesProvider]
})
export class PaisPage {
  public countries;
  public idioma;

  public imagen;

  // Información
  public title;
  public text_question;


  constructor(public navCtrl: NavController, public navParams: NavParams, private countriesJSON:CountriesProvider) {
    this.idioma = this.navParams.get('idioma');
  	this.imagen = navParams.get('imagen');

    if(this.idioma == "es" || this.idioma == ""){
      this.title = "CREANDO TU PERFIL";
      this.text_question = "¿De qué país eres?";
    }else{
      this.title = "KREYE PWOFIL OU";
      this.text_question = "Moun ki peyi ou ye?";
    }

    this.countriesJSON.getCountries3().subscribe(
            data => {
                //.testData = data.json();
                this.countries = data.json();
            },
            err => console.error(err),
            () => console.log( JSON.stringify(this.countries))
        );

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaisPage');
  }

  pais(valor){ 	

  	this.navCtrl.push(LlegadaChilePage,{
  			pais: valor,
  			img_pais: valor.toLowerCase() + "-a-" + this.navParams.get('genero').toLowerCase() + ".png",
        img_pais_b: valor.toLowerCase() + "-b-" + this.navParams.get('genero').toLowerCase() + ".png"
        // venezuela-a-m.jpg

  		});
      
      
  }
  allPaises(){
    this.navCtrl.push(AllPaisesPage,{
        genero: this.navParams.get('genero'),
        idioma: this.navParams.get('idioma')
      });

  }

}
