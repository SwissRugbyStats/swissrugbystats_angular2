import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Game} from "./game";
import {BaseService} from "../../core/base.service";

@Injectable()
export class GameService extends BaseService<Game, Game> {

  constructor(public http: Http) {
    super(http, "games");
  }

}
