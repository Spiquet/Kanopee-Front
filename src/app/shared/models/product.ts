export class Product {
  title: string;
  description: string;
  imgUrl: string;
  provider: string;
  km: number;
  publicPrice: number;
  BoughtPrice: number;

  constructor(input?: Product) {
    if (input) {
      Object.assign(this, input);
    }
  }
}
