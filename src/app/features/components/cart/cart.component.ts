import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { UserLoginService } from 'src/app/core/services/user-login.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: any[] = [];
  userLogin: boolean = false;

  constructor(private cartService: CartService,
              private authService: UserLoginService,
              private router: Router) { }

  ngOnInit(): void {
    this.cartService.cartItem$.subscribe(item => {
      this.cartItems = item;
    });

    this.authService.userLoggedIn$.subscribe(logedIn => {
      this.userLogin = logedIn;
    })
  }

  calculateGrandTotal(): number {
    let grandTotal = 0;
    for (const item of this.cartItems) {
        grandTotal += item.price * item.quantity;
    }
    return grandTotal;
}

increaseQty(item: any){
  item.quantity++;
}

decreaseQty(item: any){
  if(item.quantity>1){
    item.quantity--;
  }
}

deleteItem(item: any){
  const index = this.cartItems.findIndex((data)=> data.id === item.id);
  this.cartItems.splice(index,1);
}

chekcUserLogin(){
  if(this.userLogin){
    this.router.navigate(['/userDetails']);
  }
  else this.router.navigate(['/login']);
}

}
