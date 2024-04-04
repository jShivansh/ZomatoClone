import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './features/components/about/about.component';
import { CartComponent } from './features/components/cart/cart.component';
import { ItemsComponent } from './features/components/items/items.component';
import { UserDetailsComponent } from './features/components/user-details/user-details.component';
import { PaymentPageComponent } from './features/components/payment-page/payment-page.component';
import { LoginPageComponent } from './features/components/login-page/login-page.component';
import { CanActiveService } from './core/services/can-active.service';
import { PageNotFoundComponent } from './features/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'about', component:AboutComponent},
  // {path:'cart', component:CartComponent},
  {path:'', component:ItemsComponent},
  {path:'userDetails', component:UserDetailsComponent, canActivate: [CanActiveService]},
  {path:'payments', component:PaymentPageComponent, canActivate: [CanActiveService]},
  {path:'login', component:LoginPageComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

