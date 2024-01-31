import { Component, OnInit } from '@angular/core';

import { ActivatedRoute,Router } from '@angular/router';
import { laptopsData } from '../Container/header/data';
import { CartserviceService } from '../cartservice.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  [x: string]: any;
  product: any;
  buyClicked: boolean = false;
  cartClicked: boolean = false;

  constructor(private route: ActivatedRoute,private router:Router,private cartService: CartserviceService) { }

  ngOnInit(): void {
    // Fetch product details using the route parameters
    this.route.params.subscribe(params => {
      const productId = +params['id']; // Convert the id to a number

      // For demonstration purposes, replace this with your actual data fetching logic
      this.product = laptopsData
        .flat() // Flatten the laptopsData array
        .find(item => item.id === productId);

  
    });
  }


  buyProduct(): void {
    this.buyClicked = true ;
  }

  addToCart(): void {
    this.cartService.addToCart(this.product);
    this.router.navigate(['/cart']);
  }
}