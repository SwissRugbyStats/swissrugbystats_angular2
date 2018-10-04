import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseService} from '../../core/base.service';
import {League} from './league';
import {Game} from '../game/game';

@Injectable()
export class LeagueService extends BaseService<League, League> {

  constructor(public http: HttpClient) {
    super(http);
    this.endpointUrl = 'leagues';
  }

  getGames(leagueId: number) {
    // TODO: get games per league only
    let url = `${this.apiUrl}/games`;
    console.log(`get ${url}`);
    return this.http.get<Array<Game>>(`${url}.json`);
  }

}
