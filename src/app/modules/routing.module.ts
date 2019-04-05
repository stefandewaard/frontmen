import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: '../pages/login/login.page.module#LoginPageModule' },
  { path: 'list', canActivate: [AuthGuard], loadChildren: '../pages/list/list.page.module#ListPageModule' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
