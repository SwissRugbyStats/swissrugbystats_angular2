import { Injectable } from '@angular/core';
import { BaseService } from '../../core/base.service';
import { HttpClient } from '@angular/common/http';
import { Club } from './club';

@Injectable()
export class ClubService extends BaseService<Club, Club> {

  constructor(public http: HttpClient) {
    super(http, 'clubs');
  }

}
