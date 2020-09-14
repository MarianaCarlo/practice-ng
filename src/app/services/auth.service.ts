import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.auth.apiBaseUrl;
  key = environment.auth.key;
  constructor(private http: HttpClient) { }

  public login(body: any): Observable<any> {
    return this.http.post(`${this.url}/v1/accounts:signInWithPassword?key=${this.key}`, body)
    .pipe(map((res: any) => {
      this.authSuccess(res.idToken);
      return res;
    }));

  }

  // funcipon que guarda el token en localStorage
  private authSuccess(token: string): void {
    localStorage.setItem('auth', token);
  }

}
