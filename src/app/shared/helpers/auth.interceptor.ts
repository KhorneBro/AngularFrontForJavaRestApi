import {Injectable} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {TokenStorageService} from '../services/token-storage.service';
import {Router} from '@angular/router';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private token: TokenStorageService,
              private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.token.getToken();
    if (token != null) {
      authReq = req.clone(
        {
          headers: req.headers.set(
            TOKEN_HEADER_KEY,
            'Bearer ' + token
          )
          // setHeaders: {
          //   TOKEN_HEADER_KEY: 'Bearer ' + token
          // }
        }
      );
    }
    return next.handle(authReq);
  }

  private handleAuthError(error: HttpErrorResponse): Observable<any> {
    if (error.status === 401) {
      this.router.navigate(['/login'], {
        queryParams: {
          sessionFailed: true
        }
      });
    }
    return throwError(error);
  }

}

export const authInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
];
