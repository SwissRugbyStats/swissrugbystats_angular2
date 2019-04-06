import {Component, OnInit} from '@angular/core';
import {LeagueService} from '../league.service';
import {League} from '../league';

@Component({
  selector: 'app-team-list',
  templateUrl: './league-list.component.html',
  styleUrls: ['./league-list.component.css'],
  providers: [LeagueService]
})
export class LeagueListComponent implements OnInit {

  private _leagues: Array<League> = [];
  public filter: string;

  constructor(private leagueService: LeagueService) {

  }

  ngOnInit() {
    this.leagueService.getList().subscribe((t => {
      this._leagues = t;
    }));
  }

  get leagues(): Array<League> {
    if (this.filter) {
      return this._leagues.filter(val => val.name.toLowerCase().indexOf(this.filter.toLowerCase()) !== -1);
    } else {
      return this._leagues;
    }
  }

}
