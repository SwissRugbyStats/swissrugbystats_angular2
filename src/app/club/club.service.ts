import { Injectable } from '@angular/core';
import {BaseService} from '../core/base.service';
import { Http } from '@angular/http';
import {Club} from './club';

@Injectable()
export class ClubService extends BaseService<Club, Club> {

  constructor(public http: Http) {
    super(http, 'clubs');
  }

}
