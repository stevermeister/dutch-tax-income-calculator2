/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from "rxjs/Observable";
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';

let translations: any = {"TITLE": "Dutch Income Tax Calculator"};
class FakeLoader implements TranslateLoader {
    getTranslation(lang: string): Observable<any> {
        return Observable.of(translations);
    }
}

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        TranslateModule.forRoot({
            loader: {provide: TranslateLoader, useClass: FakeLoader}
        })
      ],
      declarations: [ AppComponent ], // declare the test component
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [ TranslateService, TranslatePipe ],
    }).compileComponents();
  }));

  it('should create an instance', () => {
    let fixture = TestBed.createComponent(AppComponent);
    let comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });
});
