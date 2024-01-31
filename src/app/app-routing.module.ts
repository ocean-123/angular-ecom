import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './Container/header/header.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';





const routes: Routes = [
  {path:'product/:id',component:ProductComponent},
  {path:'header',component:HeaderComponent},
  {path:'cart',component:CartComponent,},
  {path:'signIn',component:LoginComponent},
  {path:'register',component:RegisterComponent}
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
