import { Component, OnInit } from '@angular/core';
import {Game} from "../game";
import {GameService} from "../game.service";
import {DataSource} from "@angular/cdk/collections";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
  providers: [GameService]
})
export class GameListComponent implements OnInit {

  games: Array<Game> = [];
  loading = true;
  dataSource: GamesDataSource;

  constructor(private service: GameService) {}

  ngOnInit() {
    const result = this.service.getList();

    this.dataSource = new GamesDataSource(result);
    result.subscribe((g => {
      this.loading = false;
      // this.games.concat(g);
    }));
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

  disconnect() {}
}
