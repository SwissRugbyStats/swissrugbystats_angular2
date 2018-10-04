import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Rx";
import {environment} from "../../../environments/environment";

@Injectable()
export class CrawlerService {

  apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  start(season?: number, deep?: boolean, async?: boolean): Observable<any> {
    const requestBody = {};
    if (season) requestBody['season'] = season;
    if (deep) requestBody['deep'] = season;
    if (async) requestBody['async'] = season;

    return this.httpClient.post(this.apiUrl + '/crawler/start', requestBody, {});
  }

}
