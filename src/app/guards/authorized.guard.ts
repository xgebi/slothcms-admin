import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import UserDetails from '../models/user-details';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!localStorage.getItem('sloth-user')) {
      return false;
    }
    const user: UserDetails = UserDetails.fromJSON(localStorage.getItem('sloth-user'));

    if (user.getLastUpdated() <= (new Date())) {
      return false;
    }
    return true;
  }

}
