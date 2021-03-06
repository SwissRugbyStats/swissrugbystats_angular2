import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Rx";
import {Injectable} from "@angular/core";
import {AUTH_TOKEN_KEY} from "../authentication.service";

@Injectable()
export class JWTTokenInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let headers;

    if (sessionStorage.getItem(AUTH_TOKEN_KEY)) {
      headers = request.headers
        .set('Content-Type', 'application/json')
        .set('Authorization', `JSONWT ${sessionStorage.getItem(AUTH_TOKEN_KEY)}`);
    }

    const cloneReq = request.clone({headers});

    return next.handle(cloneReq);
  }
}
