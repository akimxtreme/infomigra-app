import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TiempoSituacionActualPage } from '../tiempo-situacion-actual/tiempo-situacion-actual';

/**
 * Generated class for the AllSituacionActualPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-all-situacion-actual',
  templateUrl: 'all-situacion-actual.html',
})
export class AllSituacionActualPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllSituacionActualPage');
  }

  llegada(valor){
    this.navCtrl.push(TiempoSituacionActualPage,{
        llegada: valor
      });

  }

}
