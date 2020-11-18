import { Component, OnInit } from '@angular/core';
import {Product} from '../../stockcontrol/models/product.model';
import {ProductService} from '../../stockcontrol/services/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-store-product-details',
  templateUrl: './store-product-details.component.html',
  styleUrls: ['./store-product-details.component.css']
})
export class StoreProductDetailsComponent implements OnInit {
  product: Product;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.productService.getProduct(Number(this.route.snapshot.params.id)).subscribe(product => {
      this.product = product;
      console.log(product);
    });
  }
}
