import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
  
export class CartComponent implements OnInit {
  items: any;
  checkoutForm: any;
  total: any = 0;
  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  // calculateTotal() {
  //   this.total = this.cartService.total();
  // }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.total = this.cartService.total();
  }


  onSubmit(customerData:any) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  

}
  
