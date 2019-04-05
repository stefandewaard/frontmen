import { LanguageService } from './../../services/language.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Reducer from './../../reducers';
import * as AuthReducer from './../../reducers/auth.reducer';

import { iUser } from 'src/app/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  $logo:Observable<string>;
  $user:Observable<iUser>;
  constructor(private store: Store<Reducer.iState>, public lang:LanguageService) {
    this.$logo = this.store.select(Reducer.AppState).map(app => app.company.logo);
    this.$user = this.store.select(Reducer.UserState).map(auth => auth.user);
  }

  logout(){
    this.store.dispatch(new AuthReducer.Logout());
  }

  ngOnInit() {
  }

}
