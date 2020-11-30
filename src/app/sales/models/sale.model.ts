import {Product} from '../../stockcontrol/models/product.model';

export class Sale {
  saleCode: number;
  totalAmount: number;
  saleTime: Date;
  products: Product[];
}
