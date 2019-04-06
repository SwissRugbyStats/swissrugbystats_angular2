import { Component, OnInit } from '@angular/core';
import { Competition } from "../competition";
import { CompetitionService } from "../competition.service";
import { AuthenticationService } from "../../../core/auth/authentication.service";
import { CrawlerService } from "../../../core/crawler/crawler.service";
import { SeasonService } from "../../../core/season/season.service";
import { Season } from "../../../core/season/season";

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.scss'],
  providers: [CompetitionService]
})
export class CompetitionListComponent implements OnInit {

  private _competitions: Array<Competition> = [];
  public filter: string;
  public authenticated: boolean;
  public seasons: Season[];
  // public currentSeason: Season;
  public selectedSeason: Season;

  constructor(private competitionService: CompetitionService,
              private authenticationService: AuthenticationService,
              private crawlerService: CrawlerService,
              private seasonService: SeasonService
  ) {

  }

  ngOnInit() {
    this.seasonService.getList().subscribe(s => this.seasons = s);
    this.seasonService.getCurrentSeason().subscribe(s => {
      this.selectedSeason = s;
    });
    this.competitionService.getList().subscribe((c => {
      this._competitions = c;
    }));

    this.authenticated = !!this.authenticationService.getAuthToken();
  }

  get competitions(): Array<Competition> {
    let competitions = this._competitions.slice();
    if (this.filter) {
      competitions = this._competitions
        .filter(val => {
          return (val.league.name.toLowerCase().indexOf(this.filter.toLowerCase()) !== -1)
            || (val.season.name.toLowerCase().indexOf(this.filter.toLowerCase()) !== -1)
        })
    }
    if (this.selectedSeason) {
      competitions = competitions.filter(val => val.season.id === this.selectedSeason.id);
    }
    return competitions;
  }

  crawlCompetition(competition: Competition): void {
    this.crawlerService.crawlCompetition(competition);
  }
}
