import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-buy-popup',
  templateUrl: './buy-popup.component.html',
  styleUrls: ['./buy-popup.component.css']
})
export class BuyPopupComponent implements OnInit {

  quantity: number = 1;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private cartService: CartService) { }

  ngOnInit(): void {
  }

  calculateTotalPrice(): void {
    const totalPrice = this.quantity * this.data.item.price;
    console.log(`You selected ${this.quantity} ${this.data.item.name} and total is ${totalPrice}`);
    this.cartService.addToCart({...this.data.item, quantity: this.quantity});
  }

}
