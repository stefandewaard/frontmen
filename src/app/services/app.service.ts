import { api, httpOptions } from './../../settings/config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as AppReducer from './../reducers/app.reducer';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private actions: Actions,
    private http:HttpClient
  ) { }

  @Effect()
  Initialize: Observable<Action> = this.actions.pipe(
    filter(action => action.type === AppReducer.INITIALIZE)
  ).map((action: AppReducer.Initialize) => action)
    .switchMap(() => { return Observable.fromPromise(this.init()) })
    .map((data) => {
    return new AppReducer.GetData(data as AppReducer.iCompany);
    });

  init() {
    return new Promise((resolve) => {
      this.http.get(api.company).subscribe(company =>{
        resolve(company);
      })
    });
  }

}
