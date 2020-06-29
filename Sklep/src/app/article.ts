export class Article {
    nr: number;
    name: string;
    price: number;
    amount: number;
  
  
    constructor(nr: number, name: string, price: number, amount: number) {
      this.nr = nr;
      this.name = name;
      this.price = price;
      this.amount = amount;
    }
  }