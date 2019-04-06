import {Component, OnInit} from '@angular/core';
import {TeamService} from './feature/team/team.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TeamService]
})
export class AppComponent implements OnInit {
  title = 'Swiss Rugby Stats 2.0';

  constructor() {
  }

  ngOnInit() {
  }
}
