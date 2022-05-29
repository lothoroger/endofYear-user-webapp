import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AuthComponent } from './components/auth/auth.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { CartlistComponent } from './components/pages/cartlist/cartlist.component';
import { InvoiceComponent } from './components/pages/invoice/invoice.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { SummaryComponent } from './components/pages/summary/summary.component';
import { WishlistComponent } from './components/pages/wishlist/wishlist.component';
import { ViewComponent } from './components/products/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    AuthComponent,
    FooterComponent,
    NotFoundComponent,
    OrdersComponent,
    ProductsComponent,
    UsersComponent,
    RegisterComponent,
    LoginComponent,
    ChangePasswordComponent,
    CartlistComponent,
    InvoiceComponent,
    ProfileComponent,
    SummaryComponent,
    WishlistComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
