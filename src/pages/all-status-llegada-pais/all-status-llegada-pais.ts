import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TiempoLlegadaChilePage } from '../tiempo-llegada-chile/tiempo-llegada-chile';

/**
 * Generated class for the AllStatusLlegadaPaisPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-all-status-llegada-pais',
  templateUrl: 'all-status-llegada-pais.html',
})
export class AllStatusLlegadaPaisPage {
  public img_pais_b;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.img_pais_b = navParams.get('img_pais_b');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllStatusLlegadaPaisPage');
  }

  llegada(valor){
    this.navCtrl.push(TiempoLlegadaChilePage,{
        llegada: valor,
        img_pais: this.img_pais_b
      });

  }

}
