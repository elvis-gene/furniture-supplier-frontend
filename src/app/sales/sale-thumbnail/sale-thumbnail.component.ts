import {Component, Input, OnInit} from '@angular/core';
import {Sale} from '../models/sale.model';
import {SaleService} from '../services/sale.service';
import {Router} from '@angular/router';

declare let toastr;
@Component({
  selector: 'app-sale-thumbnail',
  templateUrl: './sale-thumbnail.component.html',
  styleUrls: ['./sale-thumbnail.component.css']
})
export class SaleThumbnailComponent implements OnInit {
  @Input() sale: Sale;

  constructor(private saleService: SaleService, private router: Router) { }

  ngOnInit(): void {
  }

  deleteSale(id: number) {
    this.saleService.deleteSale(id).subscribe(data => {
      console.log(data);

      toastr.success('Sale deleted!');
      // this.router.navigate(['staff/sales']);
      window.location.reload();
    });
  }
}
