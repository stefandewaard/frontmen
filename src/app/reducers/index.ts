import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import * as AuthReducer from './auth.reducer';
import * as AppReducer from './app.reducer';

export interface iState{
  auth:AuthReducer.iAuthState,
  app:AppReducer.iAppReducer
}
export const reducers: ActionReducerMap<iState> ={
  auth:AuthReducer.AuthReducer,
  app:AppReducer.AppReducer
}

export const UserState = createFeatureSelector<AuthReducer.iAuthState>('auth');
export const AppState = createFeatureSelector<AppReducer.iAppReducer>('app');
