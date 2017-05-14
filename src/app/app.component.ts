import { Component } from '@angular/core';
import { IncomeComponent } from './income/income.component';

import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedLang: string;

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'nl', 'pt', 'ru']);
    translate.setDefaultLang('en');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|nl|pt|ru/) ? browserLang : 'en');
  }
}
