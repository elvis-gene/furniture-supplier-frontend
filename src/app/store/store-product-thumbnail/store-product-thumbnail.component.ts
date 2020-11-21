import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../stockcontrol/models/product.model';
import {CartService} from '../../sales/services/cart.service';

declare let toastr;
@Component({
  selector: 'app-store-product-thumbnail',
  templateUrl: './store-product-thumbnail.component.html',
  styleUrls: ['./store-product-thumbnail.component.css']
})
export class StoreProductThumbnailComponent implements OnInit {
  @Input() product: Product;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.addProductToCart(this.product);
    toastr.success('Product added to the cart');
  }
}
