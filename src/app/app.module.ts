import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { SharedModule } from './shared/shared.module';
import { PopUpComponent } from './shared/components/pop-up/pop-up.component';
import { BuyPopupComponent } from './shared/components/buy-popup/buy-popup.component';
import { CartService } from './core/services/cart.service';
import { ItemListService } from './core/services/item-list.service';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './features/components/cart/cart.component';
import { LoginPageComponent } from './features/components/login-page/login-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FeaturesModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
  ],
  entryComponents: [PopUpComponent, BuyPopupComponent, CartComponent],
  providers: [CartService, ItemListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
