import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BaseService } from "../base.service";
import { Observable } from "rxjs";
import { Season } from "./season";

@Injectable({
  providedIn: 'root'
})
export class SeasonService extends BaseService<Season, Season> {

  constructor(public http: HttpClient) {
    super(http);
    this.endpointUrl = 'seasons';
  }

  getCurrentSeason(): Observable<Season> {
    return this.http.get<Season>(this.getEndpointUrl() + '/current');
  }
}
