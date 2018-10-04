/* tslint:disable:no-unused-variable */

import {getTestBed, TestBed} from '@angular/core/testing';
import {LeagueService} from './league.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('Service: League', () => {

  let injector: TestBed;
  let service: LeagueService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LeagueService]
    });

    injector = getTestBed();
    service = injector.get(LeagueService);
    httpMock = injector.get(HttpTestingController);
  });


  it('should ...', () => {
    expect(service).toBeTruthy();
  });
});
