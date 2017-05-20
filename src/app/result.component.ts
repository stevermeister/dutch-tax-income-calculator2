import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { CalculateService } from './calculate.service';
import { CONSTANTS } from './calculate.const';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  providers: [CalculateService],
})
export class ResultComponent implements OnInit {
  @Input()
  public incomeType: string;
  
  private _calculateService: CalculateService;

  public years: number[];
  public ruling: boolean;
  public options: any = {
    type: 'grossYear',
    income: 36000,
    year: 2017,
    allowance: false,
    social: true,
    older: false,
    ruling: '',
    hours: 40,
    grossAllowance: false,
    grossYear: false,
    grossMonth: false,
    grossWeek: false,
    grossDay: false,
    grossHour: false,
    taxFreeYear: false,
    taxFree: false,
    taxableYear: true,
    payrollTax: true,
    socialTax: true,
    generalCredit: true,
    labourCredit: true,
    incomeTax: true,
    netAllowance: false,
    netYear: true,
    netMonth: true,
    netWeek: false,
    netDay: false,
    netHour: false,
  };
  public items: any;
  public getKeys = Object.keys;

  constructor(_calculateService: CalculateService) {
    this._calculateService = _calculateService;
  }

  ngOnInit() {
    this.options.type = this.incomeType;
    this.options.income = CONSTANTS.initial[this.incomeType];
    this.options.year = CONSTANTS.years[0];
    this.options.hours = CONSTANTS.defaultWorkingHours;
    this.years = CONSTANTS.years;
    this.ruling = false;
    this._calculateService.calculateResult.subscribe(results=> {
      this.items = results;
    });
    this.changeOption();
    let items = this.items;
    this.getKeys(items).forEach(function(key) {
      items[key] = 0;
    });
  }

  public rename(str: string) {
    let text = 'OUTPUT.' + str.replace(/([a-z][A-Z])/g, function (g) {
      return g[0] + '_' + g[1];
    }).toUpperCase();
    return text;
  }

  public changeOption(ruling: boolean = false) {
    if (ruling) this.options.ruling = this.ruling ? 'normal' : '';
    this._calculateService.input = this.options;
  }
}
