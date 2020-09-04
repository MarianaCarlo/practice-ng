import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  public getTickets(): Observable<any> {
    return this.http.get('https://super-ticket-test.firebaseio.com/concerts.json');
  }
}
