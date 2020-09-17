import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('REQUESTTTTTTTTTTTTTTTTTTTTTTTTTTTT: ', request);

    const token = this.authService.getToken();

    if (token) {
      request = request.clone({
        url: request.url.indexOf('?') > -1 ? `${request.url}&auth=${token}` : `${request.url}?auth=${token}`
      });
    }
    console.log('TOKEN: ', localStorage.getItem('auth'));

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401){
          this.handleError();
        }
        return throwError('Erroooor');
      })
    );

  }

  private handleError(): Observable<any> {
    this.authService.logout();
    return throwError('ERROR 401');
  }
}
