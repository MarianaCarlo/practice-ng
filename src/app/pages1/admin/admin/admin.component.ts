import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  productForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

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
  }



}
