import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Reducer from './../../reducers';
import { iCompany } from 'src/app/reducers/app.reducer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  $company:Observable<iCompany>;
  constructor(private store: Store<Reducer.iState>) {
    this.$company = this.store.select(Reducer.AppState).map(app => app.company);
  }

  ngOnInit() {
  }

}
