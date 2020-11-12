import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IProduct} from '../../models/product.model';

@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.css']
})
export class ProductThumbnailComponent implements OnInit {
  @Input() product: IProduct;

  constructor() { }

  ngOnInit(): void {
  }

}
