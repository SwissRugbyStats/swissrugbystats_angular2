import { Component, OnInit } from '@angular/core';
import { Competition } from "../competition";
import { CompetitionService } from "../competition.service";
import { AuthenticationService } from "../../../core/auth/authentication.service";
import { CrawlerService } from "../../../core/crawler/crawler.service";

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

  constructor(private competitionService: CompetitionService,
              private authenticationService: AuthenticationService,
              private crawlerService: CrawlerService) {

  }

  ngOnInit() {
    this.competitionService.getList().subscribe((c => {
      this._competitions = c;
    }));

    this.authenticated = !!this.authenticationService.getAuthToken();
  }

  get competitions(): Array<Competition> {
    if (this.filter) {
      return this._competitions.filter(val => {
        return (val.league.name.toLowerCase().indexOf(this.filter.toLowerCase()) !== -1)
          || (val.season.name.toLowerCase().indexOf(this.filter.toLowerCase()) !== -1)
      });

    } else {
      return this._competitions;
    }
  }

  crawlCompetition(competition: Competition): void {
    this.crawlerService.crawlCompetition(competition);
  }
}
