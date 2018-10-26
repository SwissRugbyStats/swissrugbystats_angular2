import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { environment } from "../../../environments/environment";
import { NotificationService } from "../notification/notification.service";
import { Game } from "../../states/game/game";

@Injectable()
export class CrawlerService {

  apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient, private notificationService: NotificationService) {
  }

  start(season?: number, deep?: boolean, async?: boolean): void {
    const requestBody = {};
    if (season) requestBody['season'] = season;
    if (deep) requestBody['deep'] = season;
    if (async) requestBody['async'] = season;

    this.httpClient.post(this.apiUrl + '/crawler/start', requestBody, {})
      .catch(err => {
        console.error('error when starting crawler', err);
        this.notificationService.showNotification('Crawler Error');
        return Observable.empty();
      })
      .subscribe(val => {
        console.log('crawler started', val);
        this.notificationService.showNotification('Crawler started');
      });
  }

  crawlGame(gameId: number): Observable<Game> {
    return this.httpClient.post(this.apiUrl + '/crawler/game/' + gameId)
      .catch(err => {
        console.error('error when crawling game', err)
        this.notificationService.showNotification('Crawler Error')
        return Observable.empty()
      })
      .subscribe(val => {
        console.log('crawler started', val)
        this.notificationService.showNotification('Game crawled')
      })
  }

}
