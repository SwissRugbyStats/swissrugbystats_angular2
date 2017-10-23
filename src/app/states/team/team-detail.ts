import {Team} from "./team";
import {Game} from "../game/game";
export class TeamDetail extends Team {
  nextGame: Game;
  lastGame: Game;
}
