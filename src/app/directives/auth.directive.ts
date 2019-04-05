import { iUser} from './../models/user.model';
import { Directive, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as Reducer from './../reducers';
@Directive({
  selector: '[auth]'
})
export class AuthDirective implements OnInit {

  private $user: Observable<iUser>;

  constructor(store: Store<Reducer.iState>,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {
    this.$user = store.select(Reducer.UserState).map(auth => auth.user);
  }

  ngOnInit() {
    this.$user.subscribe((user: iUser) => {
      this.updateView(user);
    });
  }

  private updateView(user: iUser): void {
    if (this.checkPermission(user)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  private checkPermission(user: iUser): boolean {
    if (user != null) {
      return true;
    } else { return false; }
  }

}
