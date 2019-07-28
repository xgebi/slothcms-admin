import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoggedInDetails } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedGuard implements CanActivate {
  constructor(private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!localStorage.getItem('sloth-user')) {
      this.router.navigateByUrl('/login');
      return false;
    }

    const user: LoggedInDetails = JSON.parse(localStorage.getItem('sloth-user'));

    if (!user || !user.expiryTime) {
      return false;
    }

    if ((new Date(user.expiryTime)) <= (new Date())) {
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }

}
