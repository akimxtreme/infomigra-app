import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Region provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Region {
	public direccion = "https://infomigra-app.herokuapp.com/";
	// public direccion = "https://fast-fjord-45847.herokuapp.com/";

  constructor(public http: Http) {
    console.log('Hello Region Provider');

  }

  getRegions() {
        // let repos = this.http.get('https://infomigra-app.herokuapp.com/regions.json');
        let repos = this.http.get(this.direccion + 'regions.json');
        return repos;
    }

}
