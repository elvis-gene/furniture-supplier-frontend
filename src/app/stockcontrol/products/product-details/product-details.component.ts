import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {
  product: Product;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.productService.getProduct(Number(this.route.snapshot.params.id)).subscribe(product => {
      this.product = product;
      console.log(product);
    });
  }

  deleteProduct() {
    this.productService.deleteProduct(Number(this.route.snapshot.params.id)).subscribe(data => {
      console.log(data);
    });

    this.router.navigate(['staff/stock/products']).then(r => {
      console.log((r));
    });
  }
}
