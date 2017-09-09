import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Steps } from '../../providers/steps';
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

  public steps;



  constructor(public navCtrl: NavController, public navParams: NavParams, private stepsJSON:Steps) {

    this.stepsJSON.getSteps().subscribe(
            data => {
                //.testData = data.json();
                this.steps = data.json();
            },
            err => console.error(err),
            () => console.log( JSON.stringify(this.steps))
        );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LineaPasosPage');
  }

  navigate(miurl){
  	if(miurl == 'HomePage') {
  		this.navCtrl.push(HomePage);
  	}
  }

  cerrar(){
    
  }

}
