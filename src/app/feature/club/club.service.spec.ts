/* tslint:disable:no-unused-variable */

import {getTestBed, TestBed} from '@angular/core/testing';
import {ClubService} from './club.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('Service: Club', () => {

  let injector: TestBed;
  let service: ClubService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClubService]
    });

    injector = getTestBed();
    service = injector.get(ClubService);
    httpMock = injector.get(HttpTestingController);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
