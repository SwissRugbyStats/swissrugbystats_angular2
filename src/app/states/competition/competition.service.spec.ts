/* tslint:disable:no-unused-variable */

import {getTestBed, TestBed} from '@angular/core/testing';
import {CompetitionService} from './competition.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('Service: Competition', () => {

  let injector: TestBed;
  let service: CompetitionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CompetitionService]
    });

    injector = getTestBed();
    service = injector.get(CompetitionService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should ...', () => {
    expect(service).toBeTruthy();
  });
});
