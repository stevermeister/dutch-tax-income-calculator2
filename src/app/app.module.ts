import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdRadioModule,
  MdSelectModule,
  MdSidenavModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { IncomeComponent } from './income/income.component';
import { ResultComponent } from './result/result.component';
import { RulingComponent } from './ruling/ruling.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
  // Default path /assets/i18n/en.json
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    IncomeComponent,
    ResultComponent,
    RulingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [Http]
        }
    }),
    BrowserAnimationsModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdRadioModule,
    MdSelectModule,
    MdSidenavModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
