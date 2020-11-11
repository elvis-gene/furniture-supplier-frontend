export interface IProduct {
  id: number;
  name: string;
  categoryId: number;
  description: string;
  price: number;
  image: File;
}

// todo: add link to products on the left sidebar of the stock component
