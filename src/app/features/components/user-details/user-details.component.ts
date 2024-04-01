import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  cartItems: any[] = [];
  grandTotalPrice: number = 0;
  promoCode: string = '';
  
  constructor(private router: Router,
              private cartService: CartService,
              private titleService: Title
              ) {
                titleService.setTitle('ZomatoClone | Order Summary')
               }

  ngOnInit(): void {
    this.cartService.cartItem$.subscribe(item => {
      this.cartItems = item;
    });
  }

  fullName: string = '';
  phoneNumber: number;
  address: string = '';
  formData: any[] = [];
  checker: number = 0;
  isDisable: boolean = true;

  submitForm() {
    const newData = {
      fullName: this.fullName,
      phoneNumber: this.phoneNumber,
      address: this.address
    };
    this.formData.push(newData);
    // Clear form fields after submitting
    // this.fullName = '';
    // this.phoneNumber = null ;
    // this.address = '';
    console.log(`Name:${this.formData[0].fullName}; Phone number: ${this.formData[0].phoneNumber}`);
  }

  grandTotal(): number {
    let totalPrice = 0;
  for (const item of this.cartItems) {
    totalPrice += item.quantity * item.price;
  }
  return totalPrice;
  }

  grandTotalPromo(): number {
    let totalPrice = 0;
  for (const item of this.cartItems) {
    totalPrice += item.quantity * item.price;
  }
  if(this.promoCode ==='CODE10'){
    return (totalPrice + totalPrice * 18/100) * 9/10;
  }
  if(this.promoCode ==='CODE20'){
    return (totalPrice + totalPrice * 18/100) * 4/5;
  }
  if(this.promoCode ==='CODE25'){
    return (totalPrice + totalPrice * 18/100) * 3/4;
  }
  else return (totalPrice + totalPrice * 18/100);
  }

  submitCheck(){
    setTimeout(()=>this.checker++,1000);
  }

  paymentCheck(){
    this.checker = 0;
    this.fullName = '';
    this.phoneNumber = null ;
    this.address = '';
  }

  // ------------------------------
  handler:any = null;
  
 
  pay(amount: any) {    
    const totalAmount: number = Number(this.grandTotalPromo().toFixed(2));
    if(this.cartItems.length == 0){
      alert("Please add items to the cart first");
      return;
    }
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51OuYpvSDsWvFKZl6QcAj4JeTWpDUVspEXBCe50RYZolfJ4C5gHHksOeMpkfeOsswJ2quxwU6iL0So9zPHNK2n82W00HIrog03X',
      locale: 'auto',
      token: (token: any) => {
        console.log(token);
        this.router.navigate(['/payments']);
      }
    });
 
    handler.open({
      name: this.fullName,
      description: `Amout to be paid is ₹${totalAmount}`,
      // amount: (totalAmount+(totalAmount*18/100)) * 100
      amout: amount
    });
 
  }
 
  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51OuYpvSDsWvFKZl6QcAj4JeTWpDUVspEXBCe50RYZolfJ4C5gHHksOeMpkfeOsswJ2quxwU6iL0So9zPHNK2n82W00HIrog03X',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }
       
      window.document.body.appendChild(s);
    }
  }
}
