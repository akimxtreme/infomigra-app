import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TiempoSituacionActualPage } from '../tiempo-situacion-actual/tiempo-situacion-actual';
import { AllSituacionActualPage } from '../all-situacion-actual/all-situacion-actual';
/**
 * Generated class for the SituacionActualPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-situacion-actual',
  templateUrl: 'situacion-actual.html',
})
export class SituacionActualPage {
  public img_pais;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.img_pais = navParams.get('img_pais');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SituacionActualPage');
  }

  
  navigate(){  	
  	this.navCtrl.push(TiempoSituacionActualPage);      
  }

  llegada(valor){
  	this.navCtrl.push(TiempoSituacionActualPage);      
  }

  allEstados(){
    this.navCtrl.push(AllSituacionActualPage);

  }
}
