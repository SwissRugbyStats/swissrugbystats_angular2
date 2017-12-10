import { Component, OnInit } from '@angular/core';
import {TeamService} from '../team.service';
import {TeamDetail} from '../team-detail';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css'],
  providers: [TeamService]
})
export class TeamDetailComponent implements OnInit {

  team: TeamDetail;

  constructor( private route: ActivatedRoute,
              private router: Router,
              private teamservice: TeamService) {
                this.team = new TeamDetail;
  }

  ngOnInit() {
     this.route.params.forEach((params: Params) => {
       let id = +params['id']; // (+) converts string 'id' to a number
       console.log(id);
       this.teamservice.getOne(id).subscribe((t => {
          console.log(t);
          this.team = t;

          // setup charts
          // Any of the following formats may be used
          let ctx = document.getElementById('myChart');
          let labels = ['wins', 'losses', 'draws'];
          let data = [this.team.win_count, this.team.loss_count, this.team.draw_count];

          let myDoughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
              labels: labels,
              datasets: [
                {
                  'data': data,
                  backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                  ],
                  hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                  ]
                }
              ]
            },
            labels: labels
        });

       }));
   });

  }

}
