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
  public idioma;
  public genero;
  public pais;
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
    this.personaje = navParams.get('personaje');

    this.url_personaje = "assets/nacionalidad/";
    if(this.personaje != "generico"){
      this.url_personaje = "http://localhost:3000/assets/nacionalidad/";
    }    
    this.url_personaje = this.url_personaje + this.personaje  + '-' + this.genero.toLowerCase() + '-1.png';
    // http://localhost:3000/assets/nacionalidad/bolivia-a-f.png


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


    console.log(this.idioma);
    console.log(this.genero);
    console.log(this.pais);
    console.log(this.personaje);
    console.log(this.url_personaje);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LlegadaChilePage');
  }

  llegada(valor){
    this.navCtrl.push(TiempoLlegadaChilePage,{
        llegada: valor,
        //img_pais: this.img_pais_b
      });


  }
  allEstados(){    
    this.navCtrl.push(AllStatusLlegadaPaisPage,{        
        //img_pais_b: this.img_pais_b
      });

  }

}
