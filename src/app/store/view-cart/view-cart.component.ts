import { Component, OnInit } from '@angular/core';
import {Product} from '../../stockcontrol/models/product.model';
import {CartService} from '../../sales/services/cart.service';
import {SaleService} from '../../sales/services/sale.service';
import {NgForm} from '@angular/forms';

declare let toastr;
@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {
  products: Product[];
  numberOfProducts: number;
  totalAmount: number;

  constructor(private cartService: CartService, private saleService: SaleService) {
    // this.products = [];
  }

  ngOnInit(): void {
    this.displayProductsInCart();
  }

  displayProductsInCart(){
    this.products = this.cartService.getProducts();
    this.numberOfProducts = this.cartService.getNumberOfItems();
    this.totalAmount = this.cartService.getTotalAmount();
  }

    purchase(form: NgForm) {
    this.cartService.purchase();
    toastr.success('Sale made!');

    console.log(form.value);

    if (form.value.delpick.toString().equals('Delivery')){
      // call create delivery service
    }
  }
}
