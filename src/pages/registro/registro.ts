import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilExitosoPage } from '../perfil-exitoso/perfil-exitoso';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the RegistroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  public valores;
  public valida_nombre;
  public valida_password;
  public valida_password2;
  public valida_comuna;
  public valida_terminos;

  
  private todo : FormGroup;


  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.valida_nombre = "";
    this.valida_comuna = "";
    this.valida_password = "";
    this.valida_password2 = "";
    this.valida_terminos = "";

    this.todo = this.formBuilder.group({
      nombre: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required],
      comuna: [''],
      termino: ['']      
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  logForm(){
    console.log(this.todo.value);
    this.navCtrl.push(PerfilExitosoPage);
  }

  navigate(){
      
  }

}
