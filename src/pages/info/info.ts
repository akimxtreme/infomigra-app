import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Info2Page } from '../info2/info2';
import { Info3Page } from '../info3/info3';
/**
 * Generated class for the InfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	//this.navCtrl.push(WelcomePage);
  }

  navigate(miurl){
  	if(miurl == 'Info2Page') {
  		this.navCtrl.push(Info2Page);
  	}
  	if(miurl == 'Info3Page') {
  		this.navCtrl.push(Info3Page);
  	}
  	
  }

}
