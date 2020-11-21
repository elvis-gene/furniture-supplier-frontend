import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../stockcontrol/models/product.model';

@Component({
  selector: 'app-cart-product-thumbnail',
  templateUrl: './cart-product-thumbnail.component.html',
  styleUrls: ['./cart-product-thumbnail.component.css']
})
export class CartProductThumbnailComponent implements OnInit {

  @Input() product: Product;
  constructor() { }

  ngOnInit(): void {
  }

}
