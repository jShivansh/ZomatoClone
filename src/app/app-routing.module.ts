import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './features/components/about/about.component';
import { CartComponent } from './features/components/cart/cart.component';
import { ItemsComponent } from './features/components/items/items.component';
import { UserDetailsComponent } from './features/components/user-details/user-details.component';
import { PaymentPageComponent } from './features/components/payment-page/payment-page.component';
import { LoginPageComponent } from './features/components/login-page/login-page.component';

const routes: Routes = [
  {path:'about', component:AboutComponent},
  // {path:'cart', component:CartComponent},
  {path:'', component:ItemsComponent},
  {path:'userDetails', component:UserDetailsComponent},
  {path:'payments', component:PaymentPageComponent},
  {path:'login', component:LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

