import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {

  checker: number = 0;

  constructor(public cartService: CartService,
              private router: Router) { }

  ngOnInit(): void {
    setTimeout(()=> {
      this.checker++;
      this.cartService.emptyCart();
      this.navigateToHome();
    }, 3000)
  }

  navigateToHome(){
    if (this.checker>0) {
      setTimeout(() => {
        console.log("Its working")
        this.router.navigate(['']);
        this.checker = 0;
      }, 3000);
    }
  }

}
