import { Action } from '@ngrx/store';
import { DEFAULT_BREAKPOINTS, BreakPoint } from '@angular/flex-layout';

export interface iAppReducer {
  settings: iAppSettings;
  company: iCompany;

}
export interface iAppSettings {
  loading: boolean;
  languages: string[];
}
export interface iCompany {
  name: string;
  address: string;
  zipcode: string;
  location: string;
  desc: string;
  logo: string;
  mail: string;
  phone: string;
}


export const initialState: iAppReducer = {
  settings: {
    loading: true,
    languages: []
  },
  company: null
}

export const LOADING = "LOADING";
export const NOT_LOADING = "NOT_LOADING";
export const INITIALIZE = "INITIALIZE";
export const GET_DATA = "GET_DATA"
export const GET_LANGUAGES = "GET_LANGUAGES";

export class Loading implements Action {
  readonly type = LOADING;
  constructor() {

  }
}
export class NotLoading implements Action {
  readonly type = NOT_LOADING;
  constructor() {
  }
}

export class Initialize implements Action {
  readonly type = INITIALIZE;

}

export class GetData implements Action {
  readonly type = GET_DATA;
  payload: iCompany;
  constructor(payload:iCompany) {
    this.payload = payload;
  }
}

export class GetLanguages implements Action {
  readonly type = GET_LANGUAGES;
  payload:string[];

  constructor(payload: string[]) {
    this.payload = payload;
  }

}

export type AppStateActions = Loading | NotLoading | Initialize | GetData | GetLanguages;

export function AppReducer(state = initialState, action: AppStateActions) {
  switch (action.type) {
    case LOADING:
      return { ...state, settings: { ...state.settings, loading: true } };
    case NOT_LOADING:
      return { ...state, settings: { ...state.settings, loading: false } };
    case GET_DATA:
      return { ...state, company: action.payload, settings: { ...state.settings, loading: false } };
    case GET_LANGUAGES: {
      return { ...state, settings: { ...state.settings, languages: action.payload } }
    };
    case INITIALIZE:
      return { ...state, settings: { ...state.settings, loading: true } }
    default:
      return state;
  }
}


