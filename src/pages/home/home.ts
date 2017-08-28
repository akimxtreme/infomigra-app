import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public clase_es;
  public clase_cr;
  public disabled_es;
  public disabled_cr;
  public ruta;

  private warmth;
  public valor;

  public idioma;

  public color_es;
  public color_cr;

  isChecked:boolean = false;
  constructor(public navCtrl: NavController) {
    this.clase_es = "bg_button";
    this.disabled_cr = true;
    this.disabled_es = false;
    this.warmth = 2;

    this.color_cr = "";
    this.color_es = "";
  
  }

  navigate(miurl){
  	if(miurl == 'InfoPage') {
  		this.navCtrl.push(InfoPage);      
  	}
   
  }

  doCheck(event) {
  		//console.log(event.target);
        //this.isChecked = !this.isChecked;
        if(this.isChecked == true){
        	this.clase_es = "bg_button";
          this.disabled_es = false;

          this.clase_cr = "";
          this.disabled_cr =true;
          this.isChecked = !this.isChecked;
        	
        }else{
          this.clase_es = "";
          this.disabled_es = true;

          this.clase_cr = "bg_button";
          this.disabled_cr =false;

          this.isChecked = !this.isChecked;
        }
        console.log(this.isChecked);
    }

  language(event){
  	console.log(event.currentTarget);
  	/*
  	if(event == true){
  		this.clase = "ES";
  	}else {
  		this.clase = "CR";
  	}
  	*/
  	//this.clase = event;
  	//this.clase = event.srcElement.attributes.value;
  	// this.clase = event.currentTarget.id;

  }

  /* 
    Toma el valor final del rango y redireciona el sitio al idioma seleccionado.
    
      1  =>  Español
      2  =>  Off
      3  =>  Creol  

  */

  valorRango(valor){
     //this.valor = valor.value;
     switch (valor.value) {
        case 1:
          this.color_es = "color_select";
          this.color_cr = "";
          //this.navCtrl.push(InfoPage, {idioma: "es"}, {animate: false});
          //this.navCtrl.push(InfoPage, {idioma: "es"});
          this.navCtrl.push(InfoPage, {idioma: "es"}, {animate: true, animation:'transition',duration:500,direction:'forward'});
        break;
        
        case 3:
          this.color_cr = "color_select";
          this.color_es = "";
          // this.navCtrl.push(InfoPage, {idioma: "cr"}, {animate: false});
          this.navCtrl.push(InfoPage, {idioma: "cr"}, {animate: true, animation:'transition',duration:500,direction:'forward'});
        break;
       
        default:
          this.color_cr = "";
          this.color_es = "";
        break;
     }
  }

}
