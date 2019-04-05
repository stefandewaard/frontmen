import { CacheService } from './cache.service';
import { api, httpOptions } from './../../settings/config';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import * as AuthReducer from './../reducers/auth.reducer';
import { Effect, Actions } from '@ngrx/effects';
import { iUser, iLoginResponse, TOKEN, iVerify } from '../models/user.model';
import { Observable } from 'rxjs';
import { filter, map, catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/fromPromise';
import { of } from 'rxjs/observable/of';


@Injectable()
export class AuthService {

  constructor(private actions: Actions,
    private readonly http: HttpClient,
    private router: Router,
    private cache: CacheService
  ) {
  }
  @Effect()
  GetUser: Observable<Action> = this.actions.pipe(
    filter(action => action.type === AuthReducer.GET_USER)
  ).map((action: AuthReducer.GetUser) => action)
    .switchMap(() => { return Observable.fromPromise(this.user()) })
    .pipe(map((user) => {
      this.router.navigate(['/list']);
      return new AuthReducer.Login(user);
    }),
    catchError(() => {
      this.router.navigate(['']);
      return  of(new AuthReducer.Logout());
    })
    );

  @Effect()
  OnLogin: Observable<Action> = this.actions.pipe(filter(action => action.type === AuthReducer.ONLOGIN))
    .map((action: AuthReducer.OnLogin) => { return action })
    .switchMap((action) => { return Observable.fromPromise(this.login(action.payload)) })
    .pipe(map((user) => {
      this.router.navigate(['/list']);
      return new AuthReducer.Login(user);
    }),
    catchError((err) => {
      new AuthReducer.Error(err.error.err);
      return  of(new AuthReducer.Error(err.error.err));
    })
    )

  @Effect()
  OnLogout: Observable<Action> = this.actions.pipe(filter(action => action.type === AuthReducer.ONLOGOUT))
    .map((action: AuthReducer.OnLogout) => action)
    .map(() => {
      this.logout();
      this.router.navigate(['']);
      return new AuthReducer.Logout();
    })

  private user(): Promise<iUser | any> {
    return new Promise((resolve, reject) => {
      let token = this.cache.has(TOKEN) ? this.cache.get(TOKEN) : null;
      if (token) {
        this.http.get(api.profile, httpOptions(token)).subscribe((data: iLoginResponse) => {
          resolve(data.user as iUser)
        }, err => {
          reject(err)
        });
      } else {
        reject(null)
      }

    });

  }

  private login(value: Object): Promise<iUser> {
    return new Promise((resolve, reject) => {
      this.http.post(api.login, value, httpOptions()).subscribe((data: iLoginResponse) => {
        this.cache.set(TOKEN, data.token);
        console.log(JSON.stringify(data.user));
        resolve(data.user as iUser)
      }, err => {
        console.warn(err)
        reject(err)
      });
    });
  }

  private logout() {
    this.cache.clear();
  }

}
