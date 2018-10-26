import { Injectable } from '@angular/core';
import { BaseService } from "../../core/base.service";
import { HttpClient } from "@angular/common/http";
import { Competition } from "./competition";
import { Game } from "../game/game";

@Injectable()
export class CompetitionService extends BaseService <Competition, Competition> {

  constructor(public http: HttpClient) {
    super(http);
    this.endpointUrl = 'competitions';
  }

  getGames(seasonId: number) {
    // TODO: get games per competition only
    let url = `${this.apiUrl}/games?season=${seasonId}`;
    console.log(`get ${url}`);
    return this.http.get<Array<Game>>(`${url}.json`);
  }

}
