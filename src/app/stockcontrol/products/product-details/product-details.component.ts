import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Router} from '@angular/router';
import {IProduct} from '../../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.productService.getProduct(2).subscribe(product => {
      this.product = product;
      console.log(product);
    });
  }

}
