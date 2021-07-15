import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items : any = [];

  constructor() { }



  addToCart(merchandise: {productName: string, productPrice: number, productDetail:string, productImage:string}) {

    this.items.push(merchandise);

  }

  // total(merchandise: {productName: string, productPrice: number, productDetail:string, productImage:string}) {
  //  this.items.productPrice;
  //   return
    
  // }

  total() {
    let total = 0;
    for (let val of this.items) {
      total = total + val.productPrice;
    }
    return total;
  }

  getItems() {

    return this.items;

  }

  clearCart() {

    this.items = [];

    return this.items;

  }
}