import {Product} from '../../stockcontrol/models/product.model';

export class Cart {
  products: Product[];
  numItems: number;
  totalAmount: number;
}
