import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../modules/shared.module';
import { LoginPage } from './login.page';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginPage,
      },
    ])
  ],
  providers: [
  ], declarations: [LoginPage]
})
export class LoginPageModule { }
