import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../models/product.model';
import {Observable} from 'rxjs';
import {FormControl, FormGroup, FormsModule, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  // private product: Observable<Product>;
  oldProduct: Product;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.getProduct();
  }

  updateProduct(form: NgForm){
    console.log('on submit: ', form.value);
    this.productService.updateProduct(this.oldProduct).subscribe(data => {
        console.log(data);
      }
    );
  }

  getProduct(){
    // this.product = this.productService.getProduct(id);
    this.productService.getProduct(Number(this.route.snapshot.params.id)).subscribe(product => {
      this.oldProduct = product;
      console.log('Product to update: ' + product);
    });

  }

  cancel() {
    this.router.navigate(['staff/stock/products']).then(r => {
      console.log((r));
    });
  }
}
