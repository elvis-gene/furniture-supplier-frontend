import { Component, OnInit } from '@angular/core';
import {Product} from '../stockcontrol/models/product.model';
import {ProductService} from '../stockcontrol/services/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  opened: boolean;
  products: Product[];

  constructor(private productService: ProductService) {
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
