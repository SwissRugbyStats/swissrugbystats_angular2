import {Injectable} from '@angular/core';
import {BaseService} from '../../core/base.service';
import {HttpClient} from '@angular/common/http';
import {Club} from './club';
import {Team} from '../team/team';

@Injectable()
export class ClubService extends BaseService<Club, Club> {

  constructor(public http: HttpClient) {
    super(http);
    this.endpointUrl = 'clubs';
  }

  getTeams(clubId: number) {
    let url = `${this.apiUrl}/teams/?club=${clubId}`;
    console.log(`get ${url}`);
    return this.http.get<Array<Team>>(`${url}`);
  }

}
