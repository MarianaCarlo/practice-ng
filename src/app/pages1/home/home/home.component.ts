import { AddProduct } from './../store/home.actions';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  products = [];
  productsSubs: Subscription;

  constructor(private store: Store<any>, private productService: ProductService) { }

  ngOnInit(): void {
    this.productsSubs = this.productService.getProducts().subscribe(res => {
      console.log('respuesta ', res);
      console.log('respuesta ', Object.entries(res));

      Object.entries(res).map(p => this.products.push(p[1]));
    });
  }
  ngOnDestroy(): void {
    this.productsSubs.unsubscribe();
  }

  onComprar(product: any): void {
    this.store.dispatch(AddProduct({product: {productInfo: product}}));
  }

}
