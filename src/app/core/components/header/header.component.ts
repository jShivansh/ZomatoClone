import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from 'src/app/features/components/cart/cart.component';
import { CartService } from '../../services/cart.service';
import { UserLoginService } from 'src/app/core/services/user-login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartItems: any[] = [];

  constructor(public dialog: MatDialog,
              public cartService: CartService,
              private authService: UserLoginService) { }

  opeCart(){
    this.dialog.open(CartComponent);
  }

  userLoggedIn: boolean = false;
  userName: string = '';
  ngOnInit(): void {
    this.cartService.cartItem$.subscribe(item => {
      this.cartItems = item;
    });

    //For user details
    this.authService.userLoggedIn$.subscribe(loggedIn => {
      this.userLoggedIn = loggedIn;
    });
    this.authService.userName$.subscribe(name => {
      this.userName = name;
    });
  }
  logout(): void {
    this.authService.logoutUser();
}

showLogout: boolean = false;
toggleLogout(): void {
  this.showLogout = !this.showLogout;
}

}
