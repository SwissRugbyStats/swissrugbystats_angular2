import { Injectable } from '@angular/core';
import {BaseService} from "../core/base-service.service";
import { Http } from '@angular/http';
import { Team } from './team';

@Injectable()
export class TeamService extends BaseService<Team> {

  constructor(public http: Http) {
    super(http, "teams");
  }



}
