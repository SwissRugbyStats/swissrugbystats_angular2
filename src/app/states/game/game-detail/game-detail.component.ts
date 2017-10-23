import { Component, OnInit } from '@angular/core';
import {GameService} from "../game.service";
import {Game} from "../game";
import {Router, ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css'],
  providers: [GameService]
})
export class GameDetailComponent implements OnInit {

  game: Game;

   constructor( private route: ActivatedRoute,
              private router: Router,
              private service: GameService) {
                this.game = new Game;
   }

  ngOnInit() {
     this.route.params.forEach((params: Params) => {
       let id = +params['id']; // (+) converts string 'id' to a number
       this.service.getOne(id).subscribe((t => {
          this.game = t;
       }));
   });
  }

}
