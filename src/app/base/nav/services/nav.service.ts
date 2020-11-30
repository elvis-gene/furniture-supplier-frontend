import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor() {
    NavService.numProducts = 0;
  }

  private static numProducts;

  static getNumProducts(){
    NavService.numProducts += 1;
    return NavService.numProducts;
  }

}
