import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../models/product.model';
import {ProductService} from '../../services/product.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html'
})
export class CreateProductComponent implements OnInit {
  newProductForm: FormGroup;
  name: FormControl;
  categoryId: FormControl;
  description: FormControl;
  price: FormControl;
  quantity: FormControl;
  image: FormControl;
  product: Product;
  imageName: string;


  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.name = new FormControl('', Validators.required);
    this.categoryId = new FormControl('', Validators.required);
    this.description = new FormControl('', Validators.required);
    this.price = new FormControl('', Validators.required);
    this.quantity = new FormControl('', Validators.required);
    this.image = new FormControl();

    Validators.maxLength(500);

    this.newProductForm = new FormGroup({
      name: this.name,
      categoryId: this.categoryId,
      description: this.description,
      price: this.price,
      quantity: this.quantity,
      image: this.image
    });
  }

  createProduct(formValues) {
    this.product = new Product();

    this.product.name = formValues.name;
    this.product.categoryId = Number(formValues.categoryId);
    this.product.description = formValues.description;
    this.product.price = formValues.price;
    this.product.quantity = formValues.quantity;
    this.product.image = formValues.image;

    this.productService.createProduct(this.product)
      .subscribe(data => console.log(data), error => console.log(error));
  }

  cancel() {
    this.router.navigate(['staff/stock/products']).then(r => {
      console.log(r);
    });
  }
}
