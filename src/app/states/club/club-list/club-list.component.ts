import {Component, OnInit} from '@angular/core';
import {Club} from '../club';
import {ClubService} from '../club.service';

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.css'],
  providers: [ClubService]
})
export class ClubListComponent implements OnInit {

  clubs: Array<Club> = [];

  constructor(private clubService: ClubService) {
  }

  ngOnInit() {
    this.clubService.getList().subscribe((t => {
      this.clubs = t;
    }));
  }

}
