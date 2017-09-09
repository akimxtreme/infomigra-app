import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CurrentStatus provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CurrentStatus {
	public direccion = "https://infomigra-app.herokuapp.com/";
	// public direccion = "https://fast-fjord-45847.herokuapp.com/";

  constructor(public http: Http) {
    console.log('Hello CurrentStatus Provider');
  }

  getCurrent() {
        // let repos = this.http.get('https://infomigra-app.herokuapp.com/current_statuses.json');
        let repos = this.http.get(this.direccion + 'current_statuses.json');
        return repos;
    }

   getCurrent3() {
        // let repos = this.http.get('https://infomigra-app.herokuapp.com/current_statuses/current_statuses_three.json');
        let repos = this.http.get(this.direccion + 'current_statuses/current_statuses_three.json');
        return repos;
    }

}
