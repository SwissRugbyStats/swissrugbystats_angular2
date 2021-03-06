import {Component, OnInit} from '@angular/core';
import {TeamService} from '../team.service';
import {TeamDetail} from '../team-detail';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Chart} from 'chart.js';
import {GameService} from '../../game/game.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css'],
  providers: [TeamService, GameService]
})
export class TeamDetailComponent implements OnInit {

  team: TeamDetail;
  games: Observable<any>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private teamservice: TeamService) {
    this.team = new TeamDetail;
  }

  drawGameChart() {
    // Any of the following formats may be used
    let ctx = document.getElementById('myChart');
    let labels = ['wins', 'losses', 'draws'];
    let data = [this.team.win_count, this.team.loss_count, this.team.draw_count];

    const myDoughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [
          {
            'data': data,
            backgroundColor: [
              '#388E3C',
              '#D32F2F',
              '#FFA000'
            ],
            hoverBackgroundColor: [
              '#388E3C',
              '#D32F2F',
              '#FFA000'
            ]
          }
        ]
      },
      options: {
        responsive: true
      },
      labels: labels
    });
  }

  drawPointChart() {
    // Any of the following formats may be used
    let ctx = document.getElementById('myChart2');
    let labels = ['League Points', 'Score Points', 'Try Points', 'Red Cards'];
    let data = [this.team.point_count, this.team.score_count, this.team.try_count, this.team.card_count];

    const myBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            'data': data,
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56'
            ],
            hoverBackgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56'
            ]
          }
        ]
      },
      options: {
        responsive: true
      }
    });
  }

  drawCharts() {
    // setup charts
    this.drawGameChart();
    this.drawPointChart();
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let teamId = +params['id']; // (+) converts string 'id' to a number

      this.games = this.teamservice.getGames(teamId);

      console.log('Get games by team ', teamId);
      this.teamservice.getOne(teamId).subscribe((t => {
        console.log(t);
        this.team = t;
        this.drawCharts();
      }));
    });

  }

}
