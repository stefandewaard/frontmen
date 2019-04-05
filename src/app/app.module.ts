import { HttpClient } from '@angular/common/http';
import { AppService } from './services/app.service';
import { AuthService } from './services/auth.service';
import { RoutingModule } from './modules/routing.module';
import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { LanguageProvider } from './providers/language.provider';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateLoader, MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { SharedModule } from './modules/shared.module';

import { reducers } from './reducers/index';

export class CustomMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    console.warn("Translation missing:", params.key)
    return '--translation missing--';
  }
}

import { AppProvider } from './providers/app.provider';
export const appProvider = (provider: AppProvider) => {
  return () => provider.load();
}


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([AuthService, AppService]),
    RoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: LanguageProvider,
        deps: [HttpClient, Store]
      },
      missingTranslationHandler: { provide: MissingTranslationHandler, useClass: CustomMissingTranslationHandler },
    }),
    StoreModule.forRoot(reducers),
    SharedModule
  ],
  providers: [{ provide: APP_INITIALIZER, useFactory: appProvider, deps: [AppProvider], multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule
    }
  }
}
