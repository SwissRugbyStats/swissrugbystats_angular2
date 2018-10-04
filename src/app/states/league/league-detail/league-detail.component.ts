import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Chart } from 'chart.js';
import { LeagueService } from '../league.service';
import { League } from '../league';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-team-detail',
  templateUrl: './league-detail.component.html',
  styleUrls: ['./league-detail.component.css'],
  providers: [LeagueService]
})
export class LeagueDetailComponent implements OnInit {

  league: League;
  games: Observable<any>;

  constructor( private route: ActivatedRoute,
              private router: Router,
              private leagueService: LeagueService) {
                this.league = new League;
  }

  ngOnInit() {
     this.route.params.forEach((params: Params) => {
       let id = +params['id']; // (+) converts string 'id' to a number
       console.log(id);

       this.games = this.leagueService.getGames(id);

       this.leagueService.getOne(id).subscribe((l => {
          console.log(l);
          this.league = l;

       }));
   });

  }

}
