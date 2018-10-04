import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JWTToken} from "./models/jwt.token";
import {RestAuthToken} from "./models/rest-auth.token";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Rx";
import {User} from "./models/user";
import {environment} from '../../../environments/environment';

export const AUTH_TOKEN_KEY = 'authToken';

export enum AuthenticationEvent {
  LOGIN,
  LOGOUT
}

// rest auth endpoints: https://django-rest-auth.readthedocs.io/en/latest/api_endpoints.html

const REST_AUTH_LOGIN_URL = '/rest-auth/login/';
const REST_AUTH_LOGOUT_URL = '/rest-auth/logout/';
const REST_AUTH_PASSWORD_RESET_URL = '/rest-auth/password/reset/';
const REST_AUTH_PASSWORD_RESET_CONFIRM_URL = '/rest-auth/password/reset/confirm/';
const REST_AUTH_PASSWORD_CHANGE_URL = '/rest-auth/password/change/';
const REST_AUTH_USER_URL = '/rest-auth/user/';
const REST_AUTH_REGISTRATION_URL = '/rest-auth/registration/';
const REST_AUTH_REGISTRATION_VERIFY_EMAIL_URL = '/rest-auth/registration/verify-email';
const REST_AUTH_FACEBOOK_LOGIN_URL = '/rest-auth/facebook/';
const REST_AUTH_TWITTER_LOGIN_URL = '/rest-auth/twitter/';
const REST_AUTH_SOCIALACCOUNTS = '/socialaccounts/';

// JWT urls - currently disabled
const JWT_LOGIN_URL = '/api-token-auth';
const JWT_REFRESH_URL = '/api-token-refresh';

@Injectable()
export class AuthenticationService {

  apiUrl: string;

  private authenticationEventSubject = new BehaviorSubject<AuthenticationEvent>(null);
  authenticationEvents$ = this.authenticationEventSubject.asObservable();

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  /**
   * TODO: currently disabled on the backend
   * @param {string} username
   * @param {string} password
   */
  loginJWT(username: string, password: string): void {
    this.resetAuthToken();
    const body = {
      username: username,
      password: password
    };
    this.httpClient.post(this.apiUrl + JWT_LOGIN_URL, body, {})
      .subscribe((val: JWTToken) => {
        console.log('login success', val);
        this.setAuthToken(val.token);
      });
  }

  /**
   *
   * @param {string} username
   * @param {string} password
   */
  loginRestAuth(username: string, password: string): void {
    this.resetAuthToken();
    const body = {
      username: username,
      password: password
    };
    this.httpClient.post(this.apiUrl + REST_AUTH_LOGIN_URL, body, {})
      .subscribe((val: RestAuthToken) => {
        console.log('login success', val);
        this.setAuthToken(val.key);
      });
  }

  loginFacebook(token: string): void {
    this.resetAuthToken();
    const body = {
      access_token: token
    };
    this.httpClient.post(this.apiUrl + REST_AUTH_FACEBOOK_LOGIN_URL, body, {})
      .subscribe((val: RestAuthToken) => {
        console.log('login success', val);
        this.setAuthToken(val.key);
      });
  }

  logout() {
    this.httpClient.post(this.apiUrl + REST_AUTH_LOGOUT_URL, {}).subscribe(val => console.log('logged out'));
    this.resetAuthToken();
  }

  setAuthToken(authToken: string) {
    sessionStorage.setItem(AUTH_TOKEN_KEY, authToken);
    this.authenticationEventSubject.next(AuthenticationEvent.LOGIN);
  }

  resetAuthToken() {
    sessionStorage.removeItem(AUTH_TOKEN_KEY);
    this.authenticationEventSubject.next(AuthenticationEvent.LOGOUT);
  }

  getAuthToken() {
    return sessionStorage.getItem(AUTH_TOKEN_KEY);
  }

  /**
   * Only works when authenticated.
   * @returns {Observable<any>}
   */
  getUserDetails(): Observable<User> {
    return this.httpClient.get(this.apiUrl + REST_AUTH_USER_URL) as Observable<User>;
  }

  getSocialAccounts(): Observable<any> {
    return this.httpClient.get(this.apiUrl + REST_AUTH_SOCIALACCOUNTS);
  }

}
