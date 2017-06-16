import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SexoPage } from '../sexo/sexo';
/**
 * Generated class for the SeguridadPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-seguridad',
  templateUrl: 'seguridad.html',
})
export class SeguridadPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeguridadPage');
  }

  navigate(miurl){
  	if(miurl == 'SexoPage') {
  		this.navCtrl.push(SexoPage);
  	}
  }

}
