import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { Info2Page } from '../info2/info2';
import { WelcomePage } from '../welcome/welcome';
/**
 * Generated class for the Info3Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-info3',
  templateUrl: 'info3.html',
})
export class Info3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigate(miurl){
  	if(miurl == 'InfoPage') {
  		this.navCtrl.push(InfoPage);
  	}
  	if(miurl == 'Info2Page') {
  		this.navCtrl.push(Info2Page);
  	}
    if(miurl == 'WelcomePage') {
      this.navCtrl.push(WelcomePage);
    }
  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Info3Page');
  }

}
