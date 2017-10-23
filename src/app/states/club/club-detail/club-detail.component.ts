import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Club} from '../club';
import {ClubService} from '../club.service';

@Component({
  selector: 'app-club-detail',
  templateUrl: './club-detail.component.html',
  styleUrls: ['./club-detail.component.css'],
  providers: [ClubService]
})
export class ClubDetailComponent implements OnInit {

  club: Club;

  constructor( private route: ActivatedRoute,
              private router: Router,
              private clubService: ClubService) {
                this.club = new Club;
  }

  ngOnInit() {
     this.route.params.forEach((params: Params) => {
       let id = +params['id']; // (+) converts string 'id' to a number
       console.log(id);
       this.clubService.getOne(id).subscribe((t => {
          console.log(t);
          this.club = t;
       }));
   });

  }

}
