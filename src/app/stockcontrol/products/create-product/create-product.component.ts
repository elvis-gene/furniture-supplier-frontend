import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IProduct} from '../../models/product.model';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  newProductForm: FormGroup;
  name: FormControl;
  categoryId: FormControl;
  description: FormControl;
  price: FormControl;
  image: FormControl;


  constructor() { }

  ngOnInit(): void {
    this.name = new FormControl('', Validators.required);
    this.categoryId = new FormControl('', Validators.required),
    this.description = new FormControl('', Validators.required);
    this.price = new FormControl('', Validators.required);
    this.image = new FormControl('', Validators.required);

    Validators.maxLength(500);

    this.newProductForm = new FormGroup({
      name: this.name,
      categoryId: this.categoryId,
      description: this.description,
      price: this.price,
      image: this.image
    });
  }

  createProduct(formValues) {
    console.log(formValues);

    const product: IProduct = {
      id: undefined,
      name: formValues.name,
      categoryId: Number(formValues.categoryId),
      description: formValues.description,
      price: formValues.price,
      image: formValues.image
    };

    console.log(product);
  }
}
