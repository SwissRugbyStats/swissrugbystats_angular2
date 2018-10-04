import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/observable";
import {Injectable} from "@angular/core";
import {AUTH_TOKEN_KEY} from "../authentication.service";

@Injectable()
export class RestAuthTokenInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    console.log('set headers', sessionStorage.getItem(AUTH_TOKEN_KEY));

    let headers;

    if (sessionStorage.getItem(AUTH_TOKEN_KEY)) {
      headers = request.headers
        .set('Content-Type', 'application/json')
        .set('Authorization', `Token ${sessionStorage.getItem(AUTH_TOKEN_KEY)}`);
    }

    console.log('set headers', headers);

    const cloneReq = request.clone({headers});

    return next.handle(cloneReq);
  }
}
