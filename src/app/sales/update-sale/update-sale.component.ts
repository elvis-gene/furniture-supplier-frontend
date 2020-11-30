import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Sale} from '../models/sale.model';
import {ActivatedRoute, Router} from '@angular/router';
import {SaleService} from '../services/sale.service';

@Component({
  selector: 'app-update-sale',
  templateUrl: './update-sale.component.html',
  styleUrls: ['./update-sale.component.css']
})
export class UpdateSaleComponent implements OnInit {
  updatedSaleForm: FormGroup;
  oldSale: Sale;

  constructor(private saleService: SaleService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getSaleToUpdate();
  }

  getNewSale(updatedSaleForm: FormGroup) {

  }

  getSaleToUpdate() {
    this.saleService.getSale(Number(this.route.snapshot.params.id)).subscribe(sale => {
      this.oldSale = sale;
      console.log(sale.products);

      // Instead of updating the sale, delete it and create a new one. No manual creation of a sale.
      //   You come to the shop, use computer to buy online
    });
  }

  cancel(){
    this.router.navigate(['staff/sales']).then(r => {
      console.log((r));
    });
  }
}
