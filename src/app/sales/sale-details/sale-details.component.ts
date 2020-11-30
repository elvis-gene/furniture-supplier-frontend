import { Component, OnInit } from '@angular/core';
import {Sale} from '../models/sale.model';
import {SaleService} from '../services/sale.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../stockcontrol/models/product.model';

@Component({
  selector: 'app-sale-details',
  templateUrl: './sale-details.component.html',
  styleUrls: ['./sale-details.component.css']
})
export class SaleDetailsComponent implements OnInit {
  sale: Sale;

  constructor(private saleService: SaleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getSale();
  }


  getSale() {
    this.saleService.getSale(Number(this.route.snapshot.params.id)).subscribe(sale => {
      this.sale = sale;
      console.log(sale.products);
    });
  }

}
