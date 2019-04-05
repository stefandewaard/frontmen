import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as Reducer from '../../reducers';
import * as AuthReducer from '../../reducers/auth.reducer';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']

})
export class LoginPage implements OnInit {
  hide:boolean = true;
  loginForm: FormGroup;
  $error: Observable<string>;
  $load: Observable<boolean>;

  constructor(private store: Store<Reducer.iState>, private fb: FormBuilder, private http: HttpClient
  ) {
    this.$error = this.store.select(Reducer.UserState).map(auth => auth.error);
    this.$load = this.store.select(Reducer.UserState).map(auth => auth.load);
  }
  ngOnInit(){
    this.$error.subscribe(e => console.log(e))
    this.loginForm = this.fb.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  onSubmit():void {
    this.store.dispatch(new AuthReducer.OnLogin(this.loginForm.value))
  }

}
