import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  routerPath = new BehaviorSubject('');
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(localStorage.getItem('login')){
        if(state.url == '/login'){
          return false;
        }
        else{
          return true;
        }
      }
      else{
        if(state.url == '/login'){
          return true;
        }
        else{
          return false;
        }
      }
  }
}
