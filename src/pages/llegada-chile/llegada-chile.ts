import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TiempoLlegadaChilePage } from '../tiempo-llegada-chile/tiempo-llegada-chile';
import { AllStatusLlegadaPaisPage } from '../all-status-llegada-pais/all-status-llegada-pais';
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
})
export class LlegadaChilePage {
  public pais;
  public img_pais;
  public img_pais_b;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.pais = navParams.get('pais');
  	this.img_pais = navParams.get('img_pais');
    this.img_pais_b = navParams.get('img_pais_b');
    console.log(this.pais);
    console.log(this.img_pais);
    console.log(this.img_pais_b);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LlegadaChilePage');
  }

  llegada(valor){
    this.navCtrl.push(TiempoLlegadaChilePage,{
        llegada: valor,
        img_pais: this.img_pais_b
      });


  }
  allEstados(){    
    this.navCtrl.push(AllStatusLlegadaPaisPage,{        
        img_pais_b: this.img_pais_b
      });

  }

}
