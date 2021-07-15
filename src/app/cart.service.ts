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

  total(merchandise: {productName: string, productPrice: number, productDetail:string, productImage:string}) {
   this.items.productPrice;
    return
    
  }

  getItems() {

    return this.items;

  }

  clearCart() {

    this.items = [];

    return this.items;

  }
}