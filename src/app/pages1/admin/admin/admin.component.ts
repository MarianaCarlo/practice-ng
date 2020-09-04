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

  productDeleteSubs: Subscription;
  productUpdateSubs: Subscription;
  idEdit: any;
  constructor(private formBuilder: FormBuilder, private productService: ProductService) {
   }

  ngOnInit(): void {
    this.loadProducts();
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

  loadProducts(): void {
    this.products = [];
    this.productGetSubs = this.productService.getProducts().subscribe( res => {
      // console.log('RESPUESTA: ', Object.entries(res));
      Object.entries(res).map((p: any) => this.products.push({id: p[0],  ...p[1]}));
    });

  }

  onDelete(id: any): void {
    this.productService.deleteProducts(id).subscribe(
      res => {
        console.log(res);
        this.loadProducts();
      },
      err => {
        console.log('ERROR DE SERVIDOR');
      }
    );
  }

  onEdit(product): void {
    this.idEdit = product.id;
    this.productForm.patchValue(product);
  }

  onUpdateProduct(): void {
    this.productUpdateSubs = this.productService.updateProducts(this.idEdit, this.productForm.value).subscribe(
      res => {
        console.log(res);
        this.loadProducts();
      },
      err => {
        console.log('ERROR DE SERVIDOR');
      }
    );
  }
  ngOnDestroy(): void {
    this.productSubs ? this.productSubs.unsubscribe() : '';
    this.productGetSubs ? this.productGetSubs.unsubscribe() : '';
    this.productDeleteSubs ? this.productDeleteSubs.unsubscribe() : '';
    this.productUpdateSubs ? this.productUpdateSubs.unsubscribe() : '';
  }

}
