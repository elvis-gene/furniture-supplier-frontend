import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../models/product.model';
import {Observable} from 'rxjs';
import {FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  // private product: Observable<Product>;
  oldProduct: Product;
  private newProduct: Product;

  updateProductForm: FormGroup;
  name: FormControl;
  categoryId: FormControl;
  description: FormControl;
  price: FormControl;
  image: FormControl;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) {
    this.name = new FormControl('', Validators.required);
    this.categoryId = new FormControl('', Validators.required);
    this.description = new FormControl('', Validators.required);
    this.price = new FormControl('', Validators.required);
    this.image = new FormControl();
    Validators.maxLength(500);
  }

  ngOnInit(): void {
  }

  // First get the product to be updated and load it
  getNewProduct(formValues) {
    this.updateProductForm = new FormGroup({
      name: this.name,
      categoryId: this.categoryId,
      description: this.description,
      price: this.price,
      image: this.image
    });

    this.newProduct = new Product();

    this.newProduct.name = formValues.name;
    this.newProduct.categoryId = Number(formValues.categoryId);
    this.newProduct.description = formValues.description;
    this.newProduct.price = formValues.price;
    this.newProduct.image = formValues.image;

    this.updateProduct();
  }

  updateProduct(){
    // this.product = this.productService.getProduct(id);
    this.productService.getProduct(Number(this.route.snapshot.params.id)).subscribe(product => {
      this.oldProduct = product;
      console.log('Product to update: ' + product);
    });

    this.productService.updateProduct(this.newProduct).subscribe(data => {
        console.log(data);
      }
    );
  }

  cancel() {
    this.router.navigate(['staff/stock/products']).then(r => {
      console.log((r));
    });
  }
}
