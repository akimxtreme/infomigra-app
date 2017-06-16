import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { Info3Page } from '../info3/info3';
/**
 * Generated class for the Info2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-info2',
  templateUrl: 'info2.html',
})
export class Info2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigate(miurl){
  	if(miurl == 'InfoPage') {
  		this.navCtrl.push(InfoPage);
  	}
  	if(miurl == 'Info3Page') {
  		this.navCtrl.push(Info3Page);
  	}
  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Info2Page');
  }

}
