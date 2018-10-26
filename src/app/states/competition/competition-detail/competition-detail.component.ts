import { Component, OnInit } from '@angular/core';
import { Observable } from "../../../../../node_modules/rxjs/Rx";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { CompetitionService } from "../competition.service";
import { Competition } from "../competition";

@Component({
  selector: 'app-competition-detail',
  templateUrl: './competition-detail.component.html',
  styleUrls: ['./competition-detail.component.scss'],
  providers: [CompetitionService]
})
export class CompetitionDetailComponent implements OnInit {

  competition: Competition;
  games: Observable<any>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private competitionService: CompetitionService) {
    this.competition = new Competition();
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id']; // (+) converts string 'id' to a number
      console.log(id);

      this.games = this.competitionService.getGames(id);

      this.competitionService.getOne(id).subscribe((l => {
        console.log(l);
        this.competition = l;

      }));
    });

  }

}
