import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../stockcontrol/models/product.model';

@Component({
  selector: 'app-sale-product-thumbnail',
  templateUrl: './sale-product-thumbnail.component.html',
  styleUrls: ['./sale-product-thumbnail.component.css']
})
export class SaleProductThumbnailComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
