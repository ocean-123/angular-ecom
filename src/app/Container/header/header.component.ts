import { Component, OnInit } from '@angular/core';
import { laptopsData } from './data';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  snackBar: any;

//   display:boolean =true;
//  onClick(){
//     this.display= !this.display;
//   }
// searchValue:string="hello";

// changeValue(eventData:Event){
// this.searchValue=(<HTMLInputElement>eventData.target).value;



data = laptopsData;

buyProduct(product:any):void{
  this.router.navigate(['/product',product.id])
}


// }








  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
