import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";

type InputParams = {
  income: number,
  allowance: boolean,
  ruling: boolean,
  type: string
};

type OutputParams = {
  generalCredit: number,
  labourCredit: number,
  grossMonth: number,
  netYear: number,
  netMonth: number,
  incomeTax: number,
  taxableYear: number
};

@Injectable()
export class CalculateService {
  private static _inputSubject: Subject<InputParams> = new Subject();
  private static _outputSubject: Subject<OutputParams> = new Subject();

  constructor() {
    CalculateService._inputSubject.subscribe(input=> {

      let output: OutputParams = {
        generalCredit: 0,
        labourCredit: 0,
        grossMonth: 0,
        netYear: 0,
        netMonth: 0,
        incomeTax: 0,
        taxableYear: 0
      };

      if (input.type === 'gross_year') {
        let grossYear = +input.income || 0;
        if (input.allowance) {
          grossYear = +input.income / 1.08;  //-8%
        }
        output.taxableYear = grossYear;
        if (input.ruling) {
          output.taxableYear = output.taxableYear * 0.7;
        }
        output.generalCredit = this.getAlgemeneHeffingskorting(output.taxableYear);
        output.labourCredit = this.getArbeidskorting(output.taxableYear);
        output.grossMonth = ~~(grossYear / 12);
        output.netYear = grossYear - this.getTaxAmount(output.taxableYear);
        output.netYear += output.generalCredit + output.labourCredit;
        output.netMonth = ~~(output.netYear / 12);
        output.incomeTax = this.getTaxAmount(output.taxableYear);
      } else {
        output.netMonth = +input.income || 0;
        output.netYear = output.netMonth * 12;
        output.generalCredit = 0;
        output.labourCredit = 0;
        output.grossMonth = 0;
        output.incomeTax = 0;
      }


      CalculateService._outputSubject.next(output);
    })
  }

  set input(value) {
    CalculateService._inputSubject.next(value);
  }

  public get calculateResult() {
    return CalculateService._outputSubject;
  }

  getTaxAmount(taxableIncome = 0) {

    const taxAmountPeriods = [
        19922, // 0 - 19,922
        13793, // 33,715 - 19,922
        32697, // 66,421 - 33,715
        Infinity
      ];
    let taxRates = [.3655, .404, .404, .52];
    let taxAmount = 0;

    for (let i = 0; i < taxRates.length; i++) {

      if (taxableIncome - taxAmountPeriods[i] < 0) {
        taxAmount += Math.floor(taxableIncome * taxRates[i]);
        break;
      } else {
        taxAmount += Math.floor(taxAmountPeriods[i] * taxRates[i]);
        taxableIncome = taxableIncome - taxAmountPeriods[i];
      }
    }
    return taxAmount;
  }

  //labor discount
  getArbeidskorting(salary:number):number {
    if (salary < 9147) {
      return salary * 1.793 / 100;
    }
    if (salary < 19758) {
      return 164 + (salary - 9147) * 27.698 / 100;
    }
    if (salary < 34015) {
      return 3103;
    }
    if (salary < 111590) {
      return 3103 - (salary - 39015) * 4 / 100;
    }

    return 0;
  }

  //general discount
  getAlgemeneHeffingskorting(salary:number):number {
    if (salary < 19922) {
      return 2242;
    }
    if (salary < 66417) {
      return 2242 - (salary - 19922) * 4.822 / 100;
    }

    return 0;
  }
}
