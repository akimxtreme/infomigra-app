import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CountriesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CountriesProvider {
  public direccion = "https://infomigra-app.herokuapp.com/";
  //public direccion = "https://fast-fjord-45847.herokuapp.com/";

  constructor(public http: Http) {
    console.log('Hello CountriesProvider Provider');
  }

   getCountries(continent_id) {
        // let repos = this.http.get('https://infomigra-app.herokuapp.com/countries.json');
        let repos = this.http.get(this.direccion + 'countries.json' + '?continent_id=' + continent_id);
        return repos;
    }

   getCountries3() {
        // let repos = this.http.get('https://infomigra-app.herokuapp.com/countries.json');
        let repos = this.http.get(this.direccion + 'countries/countries_three.json');
        return repos;
    }

}
