import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './Container/container/container.component';
import { HeaderComponent } from './Container/header/header.component';
import { NavComponent } from './Container/nav/nav.component';
import { FooterComponent } from './Container/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { CartserviceService } from './cartservice.service';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    ProductComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, 
    BrowserAnimationsModule,MatCardModule
    ,MatButtonModule,MatIconModule,MatDividerModule
    ,MatListModule,MatTableModule,MatFormFieldModule,MatInputModule

  ],
  providers: [CartserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
