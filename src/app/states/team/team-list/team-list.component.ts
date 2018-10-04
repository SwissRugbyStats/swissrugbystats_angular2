import {Component, OnInit} from '@angular/core';
import {Team} from '../team';
import {TeamService} from '../team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
  providers: [TeamService]
})
export class TeamListComponent implements OnInit {

  private _teams: Array<Team> = [];
  public filter: string;

  constructor(private teamservice: TeamService) {
  }

  ngOnInit() {
    this.teamservice.getList().subscribe((t => {
      this._teams = t;
    }));
  }

  get teams(): Array<Team> {
    if (this.filter) {
      return this._teams.filter(val => val.name.toLowerCase().indexOf(this.filter.toLowerCase()) !== -1);
    } else {
      return this._teams;
    }
  }

}
