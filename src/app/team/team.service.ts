import { Injectable } from '@angular/core';
import {BaseService} from "../core/base.service";
import { Http } from '@angular/http';
import { Team } from './team';
import {TeamDetail} from "./team-detail";

@Injectable()
export class TeamService extends BaseService<Team, TeamDetail> {

  constructor(public http: Http) {
    super(http, "teams");
  }



}
