import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Game} from "./game";
import {BaseService} from "../../core/base.service";

@Injectable()
export class GameService extends BaseService<Game, Game> {

  constructor(public http: HttpClient) {
    super(http);
    this.endpointUrl = 'games';
  }

}
