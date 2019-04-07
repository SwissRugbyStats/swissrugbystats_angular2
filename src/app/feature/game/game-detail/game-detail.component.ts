import { Component, OnInit } from '@angular/core';
import { GameService } from "../game.service";
import { Game } from "../game";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { CrawlerService } from "../../../core/crawler/crawler.service";
import { AuthenticationService } from "../../../core/auth/authentication.service";

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss'],
  providers: [GameService]
})
export class GameDetailComponent implements OnInit {

  game: Game;
  authenticated: boolean;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: GameService,
              private authenticationService: AuthenticationService,
              private crawlerService: CrawlerService) {
    this.game = new Game;
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id']; // (+) converts string 'id' to a number
      this.service.getOne(id).subscribe((t => {
        this.game = t;
      }));
    });

    this.authenticated = !!this.authenticationService.getAuthToken();
  }

  startCrawler() {
    this.crawlerService.crawlGame(this.game.id)
      .subscribe((t => this.game = t));
  }

}
