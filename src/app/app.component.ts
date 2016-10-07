import { Component } from '@angular/core';
import { TeamService } from './team/team.service';
import { Team } from './team/team';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TeamService]
})
export class AppComponent {
  title = 'app works!';
  teams: Array<Team> = [];

  constructor(teamservice: TeamService) {
    teamservice.getList().subscribe((t => {
      this.teams = t;
    }));


  }
}
