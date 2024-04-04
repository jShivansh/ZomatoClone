import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CartComponent } from './components/cart/cart.component';
import { CoreModule } from '../core/core.module';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { MaterialModule } from '../shared/material/material.module';
import { AboutComponent } from './components/about/about.component';
import { RouterModule } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';
import { FormsModule } from '@angular/forms';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PaymentPageComponent } from './components/payment-page/payment-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    HomePageComponent,
    CartComponent,
    ItemCardComponent,
    AboutComponent,
    ItemsComponent,
    UserDetailsComponent,
    PaymentPageComponent,
    PageNotFoundComponent
  ],
  exports: [
    HomePageComponent,
    CartComponent
  ],
  imports: [
    CommonModule, CoreModule, MaterialModule, RouterModule, FormsModule
  ]
})
export class FeaturesModule { }
