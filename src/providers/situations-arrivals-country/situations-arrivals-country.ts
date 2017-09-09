import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SituationsArrivalsCountryProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SituationsArrivalsCountryProvider {
  public direccion = "https://infomigra-app.herokuapp.com/";
	// public direccion = "https://fast-fjord-45847.herokuapp.com/";

  constructor(public http: Http) {
    console.log('Hello SituationsArrivalsCountryProvider Provider');
  }

  getSituation() {
        // let repos = this.http.get('https://infomigra-app.herokuapp.com/situations_arrivals_countries.json');
        let repos = this.http.get(this.direccion + 'situations_arrivals_countries.json');
        return repos;
    }

   getSituation3() {
        // let repos = this.http.get('https://infomigra-app.herokuapp.com/situations_arrivals_countries_three.json');
        let repos = this.http.get(this.direccion + 'situations_arrivals_countries/situations_arrivals_countries_three.json');
        return repos;
    }

}
