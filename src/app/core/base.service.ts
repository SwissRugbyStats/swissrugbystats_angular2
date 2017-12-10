import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BaseService<T, S> {

    apiUrl: string;
    epUrl: string;

    constructor(public http: HttpClient, private endpoint: string) {
        this.apiUrl = 'http://api.swissrugbystats.ch/';
        // this.apiUrl = 'http://swissrugbystats-backend.herokuapp.com/';
        this.epUrl = `${this.apiUrl}${endpoint}`;
    }

    getOne(id: number): Observable<S> {
          return this.http.get(`${this.epUrl}/${id}.json`);
    }

    getList(): Observable<T[]> {
      console.log(`get ${this.epUrl}`);
      return this.http.get(`${this.epUrl}.json`);
    }

}
