import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { iJokes } from 'src/app/models/data.model';

@Component({
  selector: 'list-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  _favorites: iJokes[];

  get favorites(): iJokes[] {
    return this._favorites;
  }

  @Input() set favorites(jokes: iJokes[]) {
    this._favorites = jokes;
  };

  @Output() remove: EventEmitter<iJokes> = new EventEmitter<iJokes>();

  constructor() { }

  removeJoke(joke: iJokes):void {
    joke.favorite = false;
    this.remove.emit(joke);
  }


}
