import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FamilyBond provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FamilyBond {
	public direccion = "http://localhost:3000/";
	// public direccion = "https://fast-fjord-45847.herokuapp.com/";


  constructor(public http: Http) {
    console.log('Hello FamilyBond Provider');
  }

  getFamilyBond() {
        // let repos = this.http.get('https://infomigra-app.herokuapp.com/family_bonds.json');
        let repos = this.http.get(this.direccion + 'family_bonds.json');
        return repos;
    }

}
