import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the LineaPasosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-linea-pasos',
  templateUrl: 'linea-pasos.html',
})
export class LineaPasosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LineaPasosPage');
  }

  navigate(miurl){
  	if(miurl == 'HomePage') {
  		this.navCtrl.push(HomePage);
  	}
  }

}
