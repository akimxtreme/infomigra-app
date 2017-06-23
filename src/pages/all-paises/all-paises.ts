import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LlegadaChilePage } from '../llegada-chile/llegada-chile';

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
})
export class AllPaisesPage {
  public range;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.range = 10;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllPaisesPage');
  }

  pais(valor){ 	

  	this.navCtrl.push(LlegadaChilePage,{
  			pais: valor,
  			img_pais: valor.toLowerCase() + "-a-" + this.navParams.get('genero').toLowerCase() + ".png",
        img_pais_b: valor.toLowerCase() + "-b-" + this.navParams.get('genero').toLowerCase() + ".png"
        // venezuela-a-m.jpg

  		});
  }

}
