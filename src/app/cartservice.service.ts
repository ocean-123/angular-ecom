import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() { }
  // removeItem(item: any): void {
  //   const cart = this.getCart();
  //   const updatedCart = cart.filter(cartItem => cartItem !== item);
  //   localStorage.setItem(this.cartKey, JSON.stringify(updatedCart));
  // }

  private cartKey = 'cart'; 

  
  getCart(): any[] {
    const storedCart = localStorage.getItem(this.cartKey);
    return storedCart ? JSON.parse(storedCart) : [];
  }

  addToCart(item: any): void {
    const cart = this.getCart();
    cart.push(item);
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }
  clearCart(): void {
    localStorage.removeItem(this.cartKey);
  }

  

}
