import { Component } from '@angular/core';

import { TranslateService, TranslatePipe } from '@ngx-translate/core';

import { ContentComponent } from './content.component';
import { RulingComponent } from './ruling.component';
import { CONSTANTS } from './calculate.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public translate: TranslateService;
  public year: number;
  public selectedLang: string;
  public selectedTab: any;

  constructor(private translation: TranslateService) {
    this.year = CONSTANTS.years[0];

    translation.addLangs(['en', 'nl', 'pt', 'ru']);
    translation.setDefaultLang('en');

    let browserLang = translation.getBrowserLang();
    translation.use(browserLang.match(/en|nl|pt|ru/) ? browserLang : 'en');
    this.translate = translation;
  }
}
