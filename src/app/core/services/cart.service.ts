import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  counter: number = 0;

  private cartItemSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  //Declared cartItemsubject as BehaviouSubject of array of any. new initializeses BehaviourSubject with value as empty array[].
  public cartItem$: Observable<any[]> = this.cartItemSubject.asObservable();
  //$ signify observable stream of data. cartItem declared as Observable of any type. It is initialized with cartItemSubject using asObservable() 

  constructor() { }

  addToCart(item: any){
    const currentItem = this.cartItemSubject.getValue();
    // console.log(item.id);
    currentItem.forEach((data)=>{
      if(item.id === data.id){
        data.quantity++;
        this.counter++;
      }
    })
    if(this.counter>0){
      this.cartItemSubject.next(currentItem);
    }
    else{
      const updatedItem = [...currentItem, item];
    // console.log(updatedItem);
      this.cartItemSubject.next(updatedItem);
    }
    // const updatedItem = [...currentItem, item];
    // console.log(updatedItem);
    // this.cartItemSubject.next(updatedItem);
  }

  emptyCart() {
    this.cartItemSubject.next([]); // Set the cart item subject to an empty array
  }
}
