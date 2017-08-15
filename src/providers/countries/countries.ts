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

  constructor(public http: Http) {
    console.log('Hello CountriesProvider Provider');
  }

   getCountries() {
        // let repos = this.http.get('https://infomigra-app.herokuapp.com/countries.json');
        let repos = this.http.get('http://localhost:3000/countries.json');
        return repos;
    }

   getCountries3() {
        // let repos = this.http.get('https://infomigra-app.herokuapp.com/countries.json');
        let repos = this.http.get('http://localhost:3000/countries/countries_three.json');
        return repos;
    }

}
