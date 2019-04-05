import { ListPage } from './list.page';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../modules/shared.module';
import { JokesComponent } from './jokes/jokes.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { IntervalComponent } from './interval/interval.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListPage,
      },
    ])
  ],
  providers: [
  ], declarations: [ListPage, JokesComponent, FavoritesComponent, IntervalComponent]
})
export class ListPageModule { }
