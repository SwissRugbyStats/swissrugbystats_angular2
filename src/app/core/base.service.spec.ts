/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BaseService } from './base.service';

describe('Service: BaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseService]
    });
  });

  it('should ...', inject([BaseService], (service: BaseService<any, any>) => {
    expect(service).toBeTruthy();
  }));
});
