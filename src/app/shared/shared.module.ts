import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { BuyPopupComponent } from './components/buy-popup/buy-popup.component';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PopUpComponent,
    BuyPopupComponent
  ],
  imports: [
    CommonModule, MaterialModule, FormsModule
  ]
})
export class SharedModule { }
