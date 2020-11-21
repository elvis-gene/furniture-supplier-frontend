import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

declare let toastr;
@Component({
  selector: 'app-return-product',
  templateUrl: './return-product.component.html',
  styleUrls: ['./return-product.component.css']
})
export class ReturnProductComponent implements OnInit {
  returnItemsForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  getSaleInfo(returnItemsForm: any) {

  }

  returnItems() {
    toastr.success('Request made!');
    // toastr.info('Request Made');
    // toastr.warning('thass');
  }
}
