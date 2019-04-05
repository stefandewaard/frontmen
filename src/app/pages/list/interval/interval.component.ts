import { interval, Observable , Subject} from 'rxjs';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';
import { switchMap, takeUntil  } from 'rxjs/operators';

@Component({
  selector: 'list-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit{
  @Output() push: EventEmitter<any> = new EventEmitter<any>();

  timer:any;
  intervalState:boolean = true;
  time:number = 5000;

  constructor() { }



  ngOnInit(){
    this.setInterval();
  }

  setInterval():void{
    this.intervalState ?
    this.startInterval() :
    this.stopInterval();
  }

  startInterval():void{
    this.timer = setInterval(()=>{
      this.push.emit()

    }, this.time)
  }
  stopInterval():void{
    clearInterval(this.timer);
  }



}
