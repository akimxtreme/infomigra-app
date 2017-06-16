import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ThemePage } from '../theme/theme';
import { SeguridadPage } from '../seguridad/seguridad';
/**
 * Generated class for the WelcomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  navigate(miurl){
  	if(miurl == 'ThemePage') {
  		this.navCtrl.push(ThemePage);
  	}
  	if(miurl == 'SeguridadPage') {
  		this.navCtrl.push(SeguridadPage);
  	}
  }

}
