import {Component, Input, OnInit} from '@angular/core';
import {NavService} from './services/nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  numProducts: number;

  constructor(private navService: NavService) {
    this.numProducts = 0;
  }

  // updateCartIcon(){
  //   this.numProducts = this.navService.getNumProducts();
  // }

  ngOnInit(): void {
  }

}
