import { api } from './../../settings/config';
import { HttpClient } from '@angular/common/http';
import * as Reducer from './../reducers';
import * as AppReducer from './../reducers/app.reducer';
import { TranslateLoader } from '@ngx-translate/core';
import { Store } from '@ngrx/store';

export class LanguageProvider implements TranslateLoader {

    constructor(private http:HttpClient,
      private store: Store<Reducer.iState>) {
      this.http.get(`${api.languages}.json`).subscribe(data =>{
        const langs = Object.keys(data);
        this.store.dispatch(new AppReducer.GetLanguages(langs));
      })
    }

    public getTranslation(l: string) {
       return this.http.get(`${api.languages}/${l}.json`).map((lang)=>{
         return lang;
       });
    }

}
