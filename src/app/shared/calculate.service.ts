import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {creditRatesBase} from "./creditRatesBase";
import {creditRatesSocial} from "./creditRatesSocial";
import {creditRatesBaseRuling} from "./creditRatesBaseRuling";
import {creditRatesSocialRuling} from "./creditRatesSocialRuling";

type InputParams = {
  income: number,
  allowance: boolean,
  ruling: boolean,
  socialSecurity: boolean,
  age: boolean
};

type OutputParams = {
  generalCredit: number,
  labourCredit: number,
  grossMonth: number,
  netYear: number,
  netMonth: number,
  incomeTax: number
};

@Injectable()
export class CalculateService {
  private static _inputSubject: Subject<InputParams> = new Subject();
  private static _outputSubject: Subject<OutputParams> = new Subject();
  private static output = {};

  constructor() {
    CalculateService._inputSubject.subscribe(input=> {
      let grossYear = +input.income || 0,
        output: OutputParams = {
          generalCredit: 0,
          labourCredit: 0,
          grossMonth: 0,
          netYear: 0,
          netMonth: 0,
          incomeTax: 0
        },
        netYear = 0;
      if (input.allowance) {
        grossYear = +input.income / 1.08;  //-8%
      }
      let taxableYear = grossYear;
      if (input.ruling) {
        taxableYear = taxableYear * 0.7;
      }
      output.generalCredit = this.getCredits(grossYear, input.ruling, input.socialSecurity).lk;
      output.labourCredit = this.getCredits(grossYear, input.ruling, input.socialSecurity).ak;
      output.grossMonth = ~~(grossYear / 12);
      netYear = grossYear - this.getTaxAmount(taxableYear, input.age, input.socialSecurity);
      netYear += output.generalCredit + output.labourCredit;
      output.netMonth = ~~(netYear / 12);
      output.incomeTax = this.getTaxAmount(taxableYear, input.age, input.socialSecurity);

      CalculateService._outputSubject.next(output);
    })
  }

  set input(value) {
    CalculateService._inputSubject.next(value);
  }


  public get calculateResult() {
    return CalculateService._outputSubject;
  }


  getTaxRates(age, socialSecurity) {
    let taxRates = {
      2016: {
        normal: [.3655, .404, .404, .52],
        withoutSocial: [.0835, .1385, .404, .52],
        over64: [0.1860, 0.2250, .404, .52]
      },
    }, currentTaxRates = taxRates[2016]['normal'];

    if (!socialSecurity) {
      currentTaxRates = taxRates[2016]['withoutSocial'];
    }

    if (age) {
      currentTaxRates = taxRates[2016]['over64'];
    }

    return currentTaxRates;
  }

  getTaxAmountPeriods() {
    const taxAmountPeriods = {
      2016: [
        19922, // 0 - 19,922
        13793, // 33,715 - 19,922
        32697, // 66,421 - 33,715
        Infinity
      ],
    };

    return taxAmountPeriods[2016];
  }

  getTaxAmount(taxableIncome=0, age=false, socialSecurity=true) {
    const taxAmountPeriods = this.getTaxAmountPeriods();
    const taxRates = this.getTaxRates(age, socialSecurity);
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

  getCredits(salary, ruling = false, socialSecurity = true) {

    let index,
      currentRates = creditRatesBase;

    if (!socialSecurity) {
      if (!ruling) {
        currentRates = creditRatesBase;
      } else {
        currentRates = creditRatesBaseRuling;
      }
    } else {
      if (!ruling) {
        currentRates = creditRatesSocial;
      } else {
        currentRates = creditRatesSocialRuling;
      }
    }

    for (index = 0; index < currentRates.length; index++) {
      if (currentRates[index].salary > salary) {
        break;
      }
    }
    return index ? currentRates[index - 1] : currentRates[0];
  }

}
