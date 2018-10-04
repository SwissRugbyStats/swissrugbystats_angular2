import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs/Rx';
import {environment} from '../../environments/environment';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BaseService<ListType, DetailType> {

  apiUrl: string = environment.apiUrl;
  epUrl: string;

  constructor(protected http: HttpClient, public endpoint: string) {
    this.apiUrl = 'http://api3.swissrugbystats.ch/';
    // this.apiUrl = 'http://swissrugbystats-backend.herokuapp.com/';
    this.epUrl = `${this.apiUrl}${endpoint}`;
  }

  getOne(id: number): Observable<DetailType> {
    return this.http.get<DetailType>(`${this.epUrl}/${id}.json`);
  }

  getList(): Observable<Array<ListType>> {
    console.log(`get ${this.epUrl}`);
    return this.http.get<Array<ListType>>(`${this.epUrl}.json`);
  }

}
