import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs/Rx';
import {environment} from '../../environments/environment';

@Injectable()
export abstract class BaseService<ListType, DetailType> {

  apiUrl: string;
  endpointUrl: string;

  protected constructor(protected http: HttpClient) {
    this.apiUrl = environment.apiUrl;
    this.endpointUrl = '';
  }

  getEndpointUrl(): string {
    return `${this.apiUrl}/${this.endpointUrl}`;
  }

  getOne(id: number): Observable<DetailType> {
    return this.http.get<DetailType>(`${this.getEndpointUrl()}/${id}.json`);
  }

  getList(): Observable<Array<ListType>> {
    console.log(`get ${this.getEndpointUrl()}`);
    return this.http.get<Array<ListType>>(`${this.getEndpointUrl()}.json`);
  }

}
