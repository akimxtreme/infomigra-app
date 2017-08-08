import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LlegadaChilePage } from '../llegada-chile/llegada-chile';
import { AllPaisesPage } from '../all-paises/all-paises';

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
})
export class PaisPage {
  public imagen;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.imagen = navParams.get('imagen');
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
        genero: this.navParams.get('genero')
      });

  }

}
