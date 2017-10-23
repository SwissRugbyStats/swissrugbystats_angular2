import { Component, OnInit } from '@angular/core';
import {Game} from "../game";
import {GameService} from "../game.service";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
  providers: [GameService]
})
export class GameListComponent implements OnInit {

  games: Array<Game> = [];
  loading: boolean = true;

  constructor(private service: GameService) {}

  ngOnInit() {
    this.service.getList().subscribe((g => {
      this.loading = false;
      this.games = g;
    }));
  }

}
