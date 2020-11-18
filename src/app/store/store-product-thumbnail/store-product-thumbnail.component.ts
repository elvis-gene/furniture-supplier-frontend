import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../stockcontrol/models/product.model';

@Component({
  selector: 'app-store-product-thumbnail',
  templateUrl: './store-product-thumbnail.component.html',
  styleUrls: ['./store-product-thumbnail.component.css']
})
export class StoreProductThumbnailComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
