import {
  Component,
  Input,
  OnInit
} from "@angular/core";
import {CalculateService} from "../shared/calculate.service";
import {TranslatePipe} from "ng2-translate";
@Component({
  selector: 'app-input-income',
  templateUrl: 'input-income.component.html',
  styleUrls: ['input-income.component.css'],
  providers: [CalculateService],
  pipes: [TranslatePipe]
})
export class InputIncomeComponent implements OnInit {
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
