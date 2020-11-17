import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';
import {IProduct} from '../models/product.model';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  opened = false;
  // products: Observable<IProduct[]>;
  products: IProduct[];
  // products: any;

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(product => {
      console.log(product);
      this.products = Object.values(product);
      console.log(this.products);
      });
  }

}
