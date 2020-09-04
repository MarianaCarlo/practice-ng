import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<any> {
    return this.http.get('https://course-angular-upb.firebaseio.com/products.json');
  }

  public addProducts(product): Observable<any> {
    return this.http.post('https://course-angular-upb.firebaseio.com/products.json', product);
  }
}
