import { Component, OnInit } from '@angular/core';
import { merchandise } from '../places';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';


@Component({
  selector: 'merch',
  templateUrl: './merch.component.html',
  styleUrls: ['./merch.component.scss']
})
  
export class MerchComponent implements OnInit {

  merchandise = merchandise;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart(merchandise: any) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(merchandise);
  }

  


    ngOnInit(): void {
    }
}
