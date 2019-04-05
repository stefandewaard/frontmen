import { FAVORITES } from './../../models/data.model';
import { CacheService } from './../../services/cache.service';
import { api } from './../../../settings/config';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { iResponse, iJokes } from 'src/app/models/data.model';
import { of } from 'rxjs/observable/of';


@Component({
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss']

})
export class ListPage implements OnInit {
  $jokes: Observable<iJokes[]>;
  favorites: iJokes[];


  constructor(private http: HttpClient, private cache: CacheService) {
    this.$jokes = this.cache.has(api.jokes) ?
      of(this.cache.get(api.jokes)) :
      this.http.get(api.jokes).map((data: iResponse) => {
        this.cache.set(api.jokes, data.value);
        return data.value as iJokes[];
      });
  }

  ngOnInit() {
    this.favorites = this.cache.has(FAVORITES) ? this.cache.get(FAVORITES) : [];
  }



  pushFavorite(){
    this.$jokes.subscribe(jokes =>{
      const joke:iJokes = jokes[Math.floor(Math.random() * jokes.length)];
      this.setFavorite(joke);
    })
  }


  setFavorite(joke: iJokes) {
    if (this.favorites.length < 10) {
      joke.favorite = true;
      this.favorites.push(joke);
      this.cache.set(FAVORITES, this.favorites);
    }
  }

  removeFavorite(joke: iJokes) {
    joke.favorite = false;
    const i: number = this.favorites.map(favorite => { return favorite.id }).indexOf(joke.id);
    this.favorites.splice(i, 1);
    this.cache.set(FAVORITES, this.favorites);
  }

}
