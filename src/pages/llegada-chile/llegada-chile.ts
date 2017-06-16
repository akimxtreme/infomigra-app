import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.pais = navParams.get('pais');
  	this.img_pais = navParams.get('img_pais');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LlegadaChilePage');
  }

  llegada(valor){
    this.navCtrl.push(RegistroPage,{
        llegada: valor
      });

  }

}
