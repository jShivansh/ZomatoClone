import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanActiveService implements CanActivate {

  constructor(private router: Router) { }

  userLogedIn: boolean = false;

  loginStatus(status: boolean){
    this.userLogedIn = status
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.userLogedIn){
      return true;
    }
    else{
      alert('Login First');
      return this.router.parseUrl('/login');
    }
  }
}
