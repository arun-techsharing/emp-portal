import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthRouteGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    let userRole = localStorage.getItem('userRole');
    let usrTkn = localStorage.getItem('token');
    if (userRole == 'admin') {
      return true;
    }
    else {
      alert('you are not authorized to view this page');
      return false;
    }

  }

}
