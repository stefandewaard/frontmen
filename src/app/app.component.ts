import { Component, OnInit } from '@angular/core';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private language: LanguageService) {
  }

  get height(): number{
    return window.innerHeight;
  }

  ngOnInit() {
    this.language.langConfig();
  }
}
