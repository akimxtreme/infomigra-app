import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Steps provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Steps {
	public direccion = "https://infomigra-app.herokuapp.com/";
	// public direccion = "https://fast-fjord-45847.herokuapp.com/";

  constructor(public http: Http) {
    console.log('Hello Steps Provider');
  }

  getSteps() {
        // let repos = this.http.get('https://infomigra-app.herokuapp.com/regions.json');
        let repos = this.http.get(this.direccion + 'steps.json');
        return repos;
    }

}
