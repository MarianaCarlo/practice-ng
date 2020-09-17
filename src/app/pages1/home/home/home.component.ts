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
  cart = [];
  HomeSubs: Subscription;
  total = 1;
  constructor(private store: Store<any>, private productService: ProductService) { }

  ngOnInit(): void {
    this.HomeSubs = this.store.select(s => s.home).subscribe(res => {
      console.log('HOMEEEEEEE', res);
      this.cart = Object.assign([], res.items);
      this.total = res.totalAmount;
      // res.totalAmount = res.items.length;
      console.log('TOTAL AMOUNTTTTTTTTTTT ', this.total);
    });

    this.productsSubs = this.productService.getProducts().subscribe(res => {
      console.log('respuesta ', res);
      console.log('respuesta ', Object.entries(res));

      Object.entries(res).map(p => this.products.push(p[1]));
    });
  }
  ngOnDestroy(): void {
    this.productsSubs ? this.productsSubs.unsubscribe() : '';
    this.HomeSubs ? this.HomeSubs.unsubscribe() : '';
  }

  onComprar(product: any): void {
    this.store.dispatch(AddProduct({product: Object.assign({}, product), amount: 0}));
  }

}
