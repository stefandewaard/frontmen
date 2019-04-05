import { Action } from '@ngrx/store';

export interface iAuthState {
  user: null | any;
  load: boolean;
  error: string;
}
export const initialState: iAuthState = {
  user: null,
  load: false,
  error: null
}

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const ONLOGIN = 'ONLOGIN';
export const ONLOGOUT = 'ONLOGOUT';
export const GET_USER = 'GET_USER';
export const LOGINERROR = 'LOGINERROR';

export class GetUser implements Action {
  readonly type = GET_USER;
  payload: any;
  constructor(payload?: any) {
    this.payload = payload;
  }
}

export class OnLogin implements Action {
  readonly type = ONLOGIN;
  payload: any;
  constructor(payload?: any) {
    this.payload = payload;
  }
}
export class Login implements Action {
  readonly type = LOGIN;
  payload: any;
  constructor(payload?: any) {
    this.payload = payload;
  }
}
export class OnLogout implements Action {
  readonly type = ONLOGOUT;
  constructor(payload?: any) {
  }
}
export class Logout implements Action {
  readonly type = LOGOUT;
  constructor(payload?: any) {
  }
}
export class Error implements Action {
  readonly type = LOGINERROR;
  payload: string;
  constructor(payload: any) {
    this.payload = payload;
  }
}

export type UserActions = OnLogin | OnLogout | GetUser | Login | Logout | Error;

export function AuthReducer(state = initialState, action: UserActions) {
  switch (action.type) {
    case GET_USER:
      return { ...state, load:true };
    case LOGINERROR:
      return { ...state, error: action.payload, load: false };
    case ONLOGIN:
      return { ...state, load: true, error: null };
    case ONLOGOUT:
      return { ...state, error: null, load:false };
    case LOGIN:
      return { ...state, user: action.payload, error: null, load: false }
    case LOGOUT:
      return { ...state, user: null, error: null, load: false };
    default:
      return state;
  }
}
