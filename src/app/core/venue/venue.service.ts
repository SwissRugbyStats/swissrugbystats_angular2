import { Injectable } from '@angular/core';
import { BaseService } from "../base.service";
import { Venue } from "./venue";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class VenueService extends BaseService<Venue, Venue> {

  constructor(protected http: HttpClient) {
    super(http);
    this.endpointUrl = 'venues';
  }

}
