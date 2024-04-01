import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  private userLoggedInSubject = new BehaviorSubject<boolean>(false);
  userLoggedIn$ = this.userLoggedInSubject.asObservable();
  private userNameSubject = new BehaviorSubject<string>('');
  userName$ = this.userNameSubject.asObservable();

  constructor() { }

  loginUser(userName: string): void {
    this.userNameSubject.next(userName);
    this.userLoggedInSubject.next(true);
  }

  logoutUser(): void {
    this.userNameSubject.next('');
    this.userLoggedInSubject.next(false);
  }
}
