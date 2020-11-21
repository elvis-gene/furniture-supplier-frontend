import { Component, OnInit } from '@angular/core';
import {Sale} from './models/sale.model';
import {SaleService} from './services/sale.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  opened: boolean;
  sales: Sale[];

  constructor(private saleService: SaleService) { }

  ngOnInit(): void {
    this.getSales();
  }

  getSales(){
    this.saleService.getSales().subscribe(sale => {
      console.log(sale);
      this.sales = Object.values(sale);
      console.log(this.sales);
    });
  }

}
