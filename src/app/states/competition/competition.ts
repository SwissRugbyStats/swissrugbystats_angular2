import { League } from "../league/league";
import { Season } from "../season/season";

export class Competition {
  id: number;
  league: League;
  season: Season;
}
