import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaisPage } from '../pais/pais';

/**
 * Generated class for the SexoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sexo',
  templateUrl: 'sexo.html',
})
export class SexoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SexoPage');
  }



  genero(valor){
  	var url = "";
  	if(valor == 'F') {
  		url = "femenino.png"
  	}else{
  		url = "masculino.png"
  	}

  	this.navCtrl.push(PaisPage,{
  			imagen: url,
  			genero: valor

  		});

  }
}
