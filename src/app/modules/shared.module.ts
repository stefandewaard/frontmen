import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from './material.module';

import { AuthDirective } from './../directives/auth.directive';

import { SanitizerPipe } from './../pipes/sanitizer.pipe';
import { MomentPipe } from './../pipes/moment.pipe';



@NgModule({
  declarations: [
    AuthDirective,
    SanitizerPipe,
    MomentPipe,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    TranslateModule.forChild()
  ],
  exports: [
    /*imports*/
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    TranslateModule,
    /*declarations*/
    AuthDirective,
    SanitizerPipe,
    MomentPipe
  ]
})
export class SharedModule { }
