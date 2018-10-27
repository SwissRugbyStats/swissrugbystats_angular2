import { Injectable } from '@angular/core';
import { BaseService } from '../../core/base.service';
import { HttpClient } from '@angular/common/http';
import { Team } from './team';
import { TeamDetail } from './team-detail';
import { Game } from '../game/game';
import { Observable } from "rxjs/Observable";

@Injectable()
export class TeamService extends BaseService<Team, TeamDetail> {

  constructor(public http: HttpClient) {
    super(http);
    this.endpointUrl = 'teams';
  }

  getGames(teamId: number): Observable<Game[]> {
    let url = `${this.getEndpointUrl()}/${teamId}/games`;
    console.log(`get ${url}`);
    return this.http.get<Game[]>(`${url}.json`);
  }


}
