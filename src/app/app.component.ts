import { Component } from '@angular/core';
import { TeamService } from './states/team/team.service';
import { Team } from './states/team/team';
import { TeamListComponent } from './states/team/team-list/team-list.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TeamService]
})
export class AppComponent {
  title = 'Swiss Rugby Stats 2.0';
  teams: Array<Team> = [];

  constructor(teamservice: TeamService) {
    teamservice.getList().subscribe((t => {
      this.teams = t;
    }));


  }
}
