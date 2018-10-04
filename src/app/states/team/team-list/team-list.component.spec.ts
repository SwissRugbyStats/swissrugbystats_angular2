/* tslint:disable:no-unused-variable */

import {getTestBed, TestBed} from '@angular/core/testing';
import {TeamListComponent} from './team-list.component';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {TeamService} from "../team.service";

describe('Component: TeamList', () => {

  let injector: TestBed;
  let service: TeamService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TeamService]
    });

    injector = getTestBed();
    service = injector.get(TeamService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create an instance', () => {
    let component = new TeamListComponent(null);
    expect(component).toBeTruthy();
  });
});
