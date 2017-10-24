import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../../core/base.service';
import { League } from './league';

@Injectable()
export class LeagueService extends BaseService<League, League> {

  constructor(public http: HttpClient) {
    super(http, 'leagues');
  }

}
