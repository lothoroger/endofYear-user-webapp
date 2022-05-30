import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component'
import { ProductsComponent } from './components/products/products.component'
import { OrdersComponent } from './components/orders/orders.component'
import { NotFoundComponent } from './components/not-found/not-found.component'
import { WishlistsComponent } from './components/wishlists/wishlists.component'
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component'
import { CheckoutComponent } from './components/checkout/checkout.component'
import { UserProfileComponent } from './components/user-profile/user-profile.component'
import { RegisterComponent } from './components/auth/register/register.component'
import { LoginComponent } from './components/auth/login/login.component'
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component'

const routes: Routes = [
  { path: "", redirectTo: "/products", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "changepassword", component: ChangePasswordComponent },
  { path: "orders", component: OrdersComponent },
  {
    path: "products", children: [
      { path: "", component: ProductsComponent },
      { path: "categories", component: CategoriesComponent }
    ],

  },
  { path: "wishlists", component: WishlistsComponent },
  { path: "shoppingcart", component: ShoppingCartComponent },
  { path: "checkout", component: CheckoutComponent },
  { path: "userprofile", component: UserProfileComponent },
  { path: "**", component: NotFoundComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
