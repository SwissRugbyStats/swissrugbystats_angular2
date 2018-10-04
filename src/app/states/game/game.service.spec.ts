/* tslint:disable:no-unused-variable */

import {getTestBed, TestBed} from '@angular/core/testing';
import {GameService} from './game.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('Service: Game', () => {

  let injector: TestBed;
  let service: GameService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GameService]
    });

    injector = getTestBed();
    service = injector.get(GameService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should ...', () => {
    expect(service).toBeTruthy();
  });
});
