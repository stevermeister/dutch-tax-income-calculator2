import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { CalculateService } from './calculate.service';
import { CONSTANTS } from './calculate.const';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [CalculateService],
})
export class ContentComponent implements OnInit {
  
  private _calculateService: CalculateService;

  public selectedTab = 0;
  public years: number[];
  public ruling: boolean;
  public options: any;
  public output: any;
  public choices: string[];
  public getKeys = Object.keys;

  constructor(_calculateService: CalculateService) {
    this._calculateService = _calculateService;
  }

  ngOnInit() {
    this.output = CONSTANTS.default.output;
    this.options = CONSTANTS.default.options;
    this.options.type = CONSTANTS.default.options.type;
    this.years = CONSTANTS.years;
    this.options.year = this.years[0];
    this.ruling = this.options.ruling ? true : false;
    let choices = [];
    Object.keys(CONSTANTS.default.input).forEach(function(key) {
      choices.push(key);
    });
    this.choices = choices;
    this.changeOption(this.options.type);
    this._calculateService.calculateResult.subscribe(results=> {
      this.output = results;
    });
  }

  public rename(str: string): string {
    let text = str.replace(/([a-z][A-Z])/g, function (g) {
      return g[0] + '_' + g[1];
    }).toUpperCase();
    return text;
  }

  public changeOption(additional: any = false) {
    if (additional === true) {
      this.options.ruling = this.ruling ? 'normal' : '';
    } else if (additional) {
      this.options.type = additional;
      this.options.income = CONSTANTS.default.input[this.options.type];
    }
    this._calculateService.input = this.options;
  }

  public getPositive(value: number = 0, type: string = ''): boolean {
    return (value > 0 && /credit$/i.test(type));
  }
}
