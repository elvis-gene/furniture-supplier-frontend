import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../stockcontrol/models/product.model';
import {CartService} from '../../sales/services/cart.service';
import {NavComponent} from '../../base/nav/nav.component';

declare let toastr;
@Component({
  selector: 'app-store-product-thumbnail',
  templateUrl: './store-product-thumbnail.component.html',
  styleUrls: ['./store-product-thumbnail.component.css']
})
export class StoreProductThumbnailComponent implements OnInit {
  private static numProducts: number;
  @Input() product: Product;
  @Output() eventEmitter = new EventEmitter();

  constructor(private cartService: CartService) {
    StoreProductThumbnailComponent.numProducts = 0;
  }

  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.addProductToCart(this.product);
    toastr.success(this.product.name + ' added to the cart');

    StoreProductThumbnailComponent.numProducts += 1;
    this.eventEmitter.emit(StoreProductThumbnailComponent.numProducts);

    // NavComponent.updateCartIcon();
  }
}
