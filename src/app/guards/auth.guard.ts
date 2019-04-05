import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { iUser } from '../models/user.model';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import * as Reducer from './../reducers';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  $user: Observable<iUser>;

  constructor(store: Store<Reducer.iState>){
    this.$user = store.select(Reducer.UserState).map(auth => auth.user);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const id:string = next.params.id;
      return this.$user.pipe(
        take(1),
        map(user => user && this.checkAuthorization(user, id) ? true : false)
      );
  }

  private checkAuthorization(user: iUser, id?:string):boolean {
    return user != null;
  }
}
