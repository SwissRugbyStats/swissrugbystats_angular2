import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
  providers: [TeamService]
})
export class TeamListComponent implements OnInit {

  teams: Array<Team> = [];

  constructor(teamservice: TeamService) {
    teamservice.getList().subscribe((t => {
      this.teams = t;
    }));
  }

  ngOnInit() {
  }

}
