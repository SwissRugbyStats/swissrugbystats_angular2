import { Component, OnInit } from '@angular/core';
import { VenueService } from "../../core/venue/venue.service";
import { Venue } from "../../core/venue/venue";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.scss']
})
export class VenueComponent implements OnInit {

  venue: Venue;

  constructor(private venueService: VenueService, private route: ActivatedRoute) {
    console.log('ngOninit venue comp');
  }

  ngOnInit() {
    console.log(this.route);
    const id = this.route.snapshot.params['id'];
    this.venueService.getOne(id).subscribe(v => this.venue = v);
  }

}
