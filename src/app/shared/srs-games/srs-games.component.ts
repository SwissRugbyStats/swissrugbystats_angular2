import { Component, Input, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Game } from '../../states/game/game';

@Component({
  selector: 'srs-games',
  templateUrl: './srs-games.component.html',
  styleUrls: ['./srs-games.component.css'],
  providers: []
})
export class SRSGamesComponent implements OnInit {

  // _games: Array<Game> = [];
  loading = true;
  dataSource: GamesDataSource;

  @Input() games: Observable<Array<Game>>;

  constructor() {  }

  ngOnInit() {
    this.dataSource = new GamesDataSource(this.games);
    // let result = Observable.from([]);
    this.games.subscribe((g => {
      this.loading = false;
      // this.games.concat(g);
    }));

    /*this.dataSource = new GamesDataSource(result);
    result.subscribe((g => {
      this.loading = false;
      // this.games.concat(g);
    }));*/
  }

}

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class GamesDataSource extends DataSource<any> {

  private observable: Observable<any>;
  private games: Game[];

  constructor(obs: Observable<any>) {
    super();
    this.observable = obs;
    // this.observable = Observable.of([]);
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Game[]> {
    return this.observable;
  }

  disconnect() {
  }
}
