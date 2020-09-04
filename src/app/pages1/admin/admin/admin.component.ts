import { ProductService } from './../../../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {

  productForm: FormGroup;
  productSubs: Subscription;
  productGetSubs: Subscription;
  products = [];
  constructor(private formBuilder: FormBuilder, private productService: ProductService) {
    this.productGetSubs = this.productService.getProducts().subscribe(res => {
      console.log('respuesta ', res);
      console.log('respuesta ', Object.entries(res));

      Object.entries(res).map(p => this.products.push(p[1]));
    });
   }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      description: ['descr', [ Validators.required, Validators.minLength(3)]],
      imageURL: '',
      ownerId: '',
      price: '',
      title: ''
    });
  }

  onEnviar123(): void {
    console.log('form group: ', this.productForm.value);
    this.productSubs = this.productService.addProducts(this.productForm.value).subscribe(
      res => {
        console.log('resp ', res);
      },
      err => {
        console.log('ERROR EN EL SERVIDOR');
      }
    );
  }

  ngOnDestroy(): void {
    this.productSubs ? this.productSubs.unsubscribe() : '';
    this.productGetSubs ? this.productGetSubs.unsubscribe() : '';
  }

}
