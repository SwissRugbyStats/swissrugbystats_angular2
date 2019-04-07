import { GameParticipation } from "./gameparticipation";

export class Game {
  id: number;
  host: GameParticipation;
  guest: GameParticipation;
  fsrID: string;
  fsrUrl: string;
  date: string;
  competition: number;
  venue: any;
  referee: any;
}
