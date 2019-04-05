import { Observable } from 'rxjs/Observable';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { iJokes } from 'src/app/models/data.model';

@Component({
  selector: 'list-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent{
  @Input() $jokes:Observable<iJokes[]>;
  @Output() set: EventEmitter<iJokes> = new EventEmitter<iJokes>();
  @Output() remove:EventEmitter<iJokes> = new EventEmitter <iJokes>();
  constructor() { }


  toggleJoke(joke:iJokes){
    joke.favorite ? this.remove.emit(joke) : this.set.emit(joke) ;
  }

}
