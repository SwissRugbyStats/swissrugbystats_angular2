import { Injectable } from '@angular/core';
import {BaseService} from '../../core/base.service';
import { HttpClient } from '@angular/common/http';
import { Team } from './team';
import {TeamDetail} from './team-detail';

@Injectable()
export class TeamService extends BaseService<Team, TeamDetail> {

  constructor(public http: HttpClient) {
    super(http, 'teams');
  }

  getGames(teamId: number) {
    let url = `http://api.swissrugbystats.ch/teams/${teamId}/games`;
    console.log(`get ${url}`);
    return this.http.get(`${url}.json`);
  }



}
