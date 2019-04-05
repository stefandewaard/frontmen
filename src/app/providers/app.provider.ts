import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Reducer from './../reducers';
import * as AppReducer from './../reducers/app.reducer';
import * as AuthReducer from './../reducers/auth.reducer';


@Injectable({
  providedIn: 'root'
})
export class AppProvider {
  $done:Observable<boolean>;
  constructor(
    private store: Store<Reducer.iState>) {
      this.$done = this.store.select(Reducer.AppState).map(app => app.settings.loading);
    }
  load(): Promise<boolean> {
    return new Promise((resolve) =>{
    this.store.dispatch(new AuthReducer.GetUser());
    this.store.dispatch(new AppReducer.Initialize());
    this.$done.subscribe(done =>{
      if (!done){
        resolve(true)
      }
    })
    });
  }
}
