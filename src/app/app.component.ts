import { Component } from '@angular/core';

import { TranslateService, TranslatePipe } from '@ngx-translate/core';

import { ResultComponent } from './result.component';
import { RulingComponent } from './ruling.component';
import { CONSTANTS } from './calculate.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public translate: any;
  public year: number;
  public selectedLang: string;
  public choices: string[];

  constructor(private translation: TranslateService) {
    this.year = CONSTANTS.years[0];
    this.choices = [];
    let that = this;
    Object.keys(CONSTANTS.initial).forEach(function(key) {
      that.choices.push(key);
    });
    translation.addLangs(['en', 'nl', 'pt', 'ru']);
    translation.setDefaultLang('en');

    let browserLang = translation.getBrowserLang();
    translation.use(browserLang.match(/en|nl|pt|ru/) ? browserLang : 'en');
    this.translate = translation;
  }

  public rename(str: string) {
    let text = str.replace(/([a-z][A-Z])/g, function (g) {
      return g[0] + '_' + g[1];
    }).toUpperCase();
    return text;
  }
}
