import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthenticationEvent, AuthenticationService} from "../../core/auth/authentication.service";
import {CrawlerService} from "../../core/crawler/crawler.service";
import {User} from "../../core/auth/models/user";

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

  protected username: string = '';
  protected password: string = '';

  public user: User = null;
  public socialAccounts: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private crawlerService: CrawlerService
  ) {
  }

  ngOnInit(): void {
    this.getTokenFromUrl();
    this.authenticationService.authenticationEvents$.subscribe(val => {
      if (val === AuthenticationEvent.LOGIN) {
        this.getUserDetails();
      } else if (val === AuthenticationEvent.LOGOUT) {
        this.user = null;
      }
    });
    if (this.authenticationService.getAuthToken()) {
      this.getUserDetails();
    }
  }

  getUserDetails(): void {
    this.authenticationService.getUserDetails().subscribe(user => this.user = user);
    this.authenticationService.getSocialAccounts().subscribe(socialAccounts => this.socialAccounts = socialAccounts);
  }

  logout(): void {
    this.authenticationService.logout();
  }

  restAuthLogin() {
    // TODO: validate
    this.authenticationService.loginRestAuth(this.username, this.password);
  }

  getTokenFromUrl(): void {
    this.route.fragment.subscribe((fragment: string) => {
      console.log('My hash fragment is here => ', fragment);
      // check if social token in url
      if (fragment && fragment.startsWith('access_token')) {
        // extract social token
        const fbToken = fragment.split('&')[0].split('=')[1];
        console.log('attempt facebook login', fbToken)
        this.authenticationService.loginFacebook(fbToken);
      }
      return fragment;
    })
  }

  getFacebookAuthUrl(): string {
    return `https://www.facebook.com/v2.3/dialog/oauth?app_id=${this.fb_app_id}&redirect_uri=${this.host}/account&response_type=token`;
  }

  startCrawler() {
    this.crawlerService.start();
  }

}
