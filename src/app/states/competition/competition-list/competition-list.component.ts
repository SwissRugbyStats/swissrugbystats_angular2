import { Component, OnInit } from '@angular/core';
import { Competition } from "../competition";
import { CompetitionService } from "../competition.service";

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.scss'],
  providers: [CompetitionService]
})
export class CompetitionListComponent implements OnInit {

  private _competitions: Array<Competition> = [];
  public filter: string;

  constructor(private competitionService: CompetitionService) {

  }

  ngOnInit() {
    this.competitionService.getList().subscribe((c => {
      this._competitions = c;
    }));
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
}
