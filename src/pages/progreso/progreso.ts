import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProgresoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 /*
Rango de calculo:0-30%(bajo)31%-60%(medio)más de 60% (alto)
 */
@IonicPage()
@Component({
  selector: 'page-progreso',
  templateUrl: 'progreso.html',
})
export class ProgresoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgresoPage');
  }

}
