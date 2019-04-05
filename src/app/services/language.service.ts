import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import 'moment/min/locales';
import { Store } from '@ngrx/store';
import * as Reducer from './../reducers';
@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(public translate: TranslateService, store: Store<Reducer.iState>) {
    store.select(Reducer.AppState).map(app => app.settings.languages).subscribe(langs => {
      this.translate.addLangs(langs);
      this.translate.setDefaultLang('nl');
    })
  }

  langConfig(language?: string) {
    if (language) {
      language = this.translate.langs.includes(language) ? language : this.translate.defaultLang;
      this.translate.use(language);
      moment.locale(language);

    } else {
      let language = this.translate.langs.includes(this.translate.getBrowserLang()) ? this.translate.getBrowserLang() : this.translate.defaultLang;
      this.translate.use(language);
      moment.locale(language);
    }
  }
}
