import { Injectable } from '@angular/core';
import {Cart} from '../models/cart.model';
import {Product} from '../../stockcontrol/models/product.model';
import {Observable} from 'rxjs';
import {SaleService} from './sale.service';
import {Sale} from '../models/sale.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Cart;
  products: Product[];
  totalAmount: number;
  // saleTime: string;
  sale: Sale;


  constructor(private saleService: SaleService) {
    this.cart = new Cart();
    this.products = [];
    // this.saleTime = '';
    this.sale = new Sale();
  }

  addProductToCart(product: Product){
    this.products.push(product);
  }

  // To be a component
  getProducts(){
    return this.products;
  }

  getNumberOfItems(){
    return this.products.length;
  }

  // To make better. getTotalAmount is being run twice. When purchase button is clicked and when view cart is clicked
  setTotalAmount(){
    this.totalAmount = 0;
    this.products.forEach(product => {
      this.totalAmount += product.price;
    });
  }

  getTotalAmount(){
    this.setTotalAmount();
    return this.totalAmount;
  }

  // Insert sale into db and update products.
  purchase(){
    this.sale.saleTime = new Date();
    this.sale.totalAmount = this.getTotalAmount();
    this.sale.products = this.products;

    this.saleService.createSale(this.sale).subscribe(data => {
      console.log(data);
    });

    // return this.products.forEach(product => {
    //   this.productService.update(product)
    // });
  }
}
