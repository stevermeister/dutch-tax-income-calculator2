import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { CalculateService } from '../shared/calculate.service';
import { ResultComponent } from '../result/result.component';

@Component({
  selector: 'app-income',
  templateUrl: 'income.component.html',
  styleUrls: ['income.component.css'],
  providers: [CalculateService],
})
export class IncomeComponent implements OnInit {
  @Input()
  public incomeType;
  private _calculateService: CalculateService;

  public options = {
    income: 36000,
    allowance: false,
    ruling: false,
    socialSecurity: false,
    age: false,
    type: ''
  };


  constructor(_calculateService: CalculateService) {
    this._calculateService = _calculateService;
  }

  ngOnInit() {
    this.options.type = this.incomeType;
    this._calculateService.input = this.options;
  }

  public changeOption(key, value) {
    this.options[key] = value;
    this._calculateService.input = this.options;
  }
}
