import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'account-overview',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: []
})
export class AccountComponent implements OnInit {

  public token;
  private fb_app_id = 526206374398565;
  private host = 'http://swissrugbystats-frontend.herokuapp.com';

  ngOnInit(): void {
    this.getToken();
  }

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  getToken(): void {
    this.route.fragment.subscribe((fragment: string) => {
      console.log('My hash fragment is here => ', fragment);
      this.token = fragment;
      return fragment;
    })
  }

  getFacebookAuthUrl(): string {
    return `https://www.facebook.com/v2.3/dialog/oauth?app_id=${this.fb_app_id}&redirect_uri=${this.host}/account&response_type=token`;
  }

  signUp() {
    console.log('sign up');
  }

}
