import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RestAuthToken } from "./models/rest-auth.token";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Rx";
import { User } from "./models/user";
import { environment } from '../../../environments/environment';
import { NotificationService } from "../notification/notification.service";

export const AUTH_TOKEN_KEY = 'authToken';

export enum AuthenticationEvent {
  LOGIN,
  LOGOUT,
  SOCIAL_CONNECTED,
  SOCIAL_DISCONNECTED,
}

// rest auth endpoints: https://django-rest-auth.readthedocs.io/en/latest/api_endpoints.html

const REST_AUTH_LOGIN_URL = '/rest-auth/login';
const REST_AUTH_LOGOUT_URL = '/rest-auth/logout';
const REST_AUTH_PASSWORD_RESET_URL = '/rest-auth/password/reset';
const REST_AUTH_PASSWORD_RESET_CONFIRM_URL = '/rest-auth/password/reset/confirm';
const REST_AUTH_PASSWORD_CHANGE_URL = '/rest-auth/password/change';
const REST_AUTH_USER_URL = '/rest-auth/user';
const REST_AUTH_REGISTRATION_URL = '/rest-auth/registration';
const REST_AUTH_REGISTRATION_VERIFY_EMAIL_URL = '/rest-auth/registration/verify-email';
const REST_AUTH_FACEBOOK_LOGIN_URL = '/rest-auth/facebook';
const REST_AUTH_FACEBOOK_CONNECT_URL = '/rest-auth/facebook/connect';
const REST_AUTH_TWITTER_LOGIN_URL = '/rest-auth/twitter';
const REST_AUTH_SOCIALACCOUNTS = '/socialaccounts';

// JWT urls - currently disabled
const JWT_LOGIN_URL = '/api-token-auth';
const JWT_REFRESH_URL = '/api-token-refresh';

@Injectable()
export class AuthenticationService {

  apiUrl: string;

  private authenticationEventSubject = new BehaviorSubject<AuthenticationEvent>(null);
  authenticationEvents$ = this.authenticationEventSubject.asObservable();

  constructor(private httpClient: HttpClient, private notificationService: NotificationService) {
    this.apiUrl = environment.apiUrl;
  }

  loginRestAuth(username: string, password: string): void {
    this.resetAuthToken();
    const body = {
      username: username,
      password: password
    };
    this.httpClient.post(this.apiUrl + REST_AUTH_LOGIN_URL, body, {})
      .catch(err => {
        this.notificationService.showNotification('There was an error logging in. Please try again.');
        return Observable.empty();
      })
      .subscribe((val: RestAuthToken) => {
        this.notificationService.showNotification('Login successful.');
        this.setAuthToken(val.key);
      });
  }

  loginFacebook(token: string): void {
    this.resetAuthToken();
    const body = {
      access_token: token
    };
    this.httpClient.post(this.apiUrl + REST_AUTH_FACEBOOK_LOGIN_URL, body, {})
      .catch(err => {
        console.error('Error with Facebook login', err);
        this.notificationService.showNotification('There was an error when logging in with Facebook');
        return Observable.empty();
      })
      .subscribe((val: RestAuthToken) => {
        this.notificationService.showNotification('Facebook Login successful.');
        this.setAuthToken(val.key);
      });
  }

  connectFacebook(token: string): void {
    const body = {
      access_token: token
    };
    this.httpClient.post(this.apiUrl + REST_AUTH_FACEBOOK_CONNECT_URL, body, {})
      .catch(err => {
        console.error('Error connecting Facebook', err);
        this.notificationService.showNotification('There was an error when connecting account to Facebook');
        return Observable.empty();
      })
      .subscribe((val: RestAuthToken) => {
        this.notificationService.showNotification('Facebook connection successful.');
        this.authenticationEventSubject.next(AuthenticationEvent.SOCIAL_CONNECTED);
      });
  }

  disconnectFacebook(token: string, pk: number): void {
    const body = {
      access_token: token
    };
    this.httpClient.post(this.apiUrl + REST_AUTH_SOCIALACCOUNTS + "/" + pk + '/disconnect', body, {})
      .catch(err => {
        console.error('Error disconnecting Facebook', err);
        this.notificationService.showNotification('There was an error when disconnecting account to Facebook');
        return Observable.empty();
      })
      .subscribe((val: RestAuthToken) => {
        this.notificationService.showNotification('Facebook disconnection successful.');
        this.authenticationEventSubject.next(AuthenticationEvent.SOCIAL_DISCONNECTED);
      });
  }

  logout() {
    this.httpClient.post(this.apiUrl + REST_AUTH_LOGOUT_URL, {})
      .catch(err => {
        this.notificationService.showNotification('There was a problem during logout.');
        return Observable.empty();
      })
      .subscribe(val => {
        this.resetAuthToken();
        this.notificationService.showNotification('Logout successful.');
      });
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
