import {getTestBed, TestBed} from '@angular/core/testing';

import {CrawlerService} from './crawler.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('CrawlerService', () => {

  let injector: TestBed;
  let service: CrawlerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CrawlerService]
    });

    injector = getTestBed();
    service = injector.get(CrawlerService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
