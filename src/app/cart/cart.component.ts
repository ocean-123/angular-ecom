import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartserviceService,private router:Router
    ) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
    
  }

  cartItems: any[] = []; // array to store products in the cart

  // Method to calculate the total amount
  calculateTotalAmount(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
  }
addmore():void{
this.router.navigate(['/header']);
}
  // deleteItems(item:any):void{
  //   this.cartService.removeItem(item);
  //  this.cartItems = this.cartService.getCart();

  // }

}
