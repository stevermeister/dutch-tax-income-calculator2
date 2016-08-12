import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {creditRatesBase} from './creditRatesBase.json';
import {creditRatesSocial} from './creditRatesSocial.json';
import {creditRatesBaseRuling} from './creditRatesBaseRuling.json';
import {creditRatesSocialRuling} from './creditRatesSocialRuling.json';

type InputParams = {
  grossYear: number,
  allowance: boolean,
  taxableYear: number,
  ruling: boolean,
  socialSecurity: boolean,
  age: boolean,
  year: number
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

      let grossYear = input.grossYear || 0,
        output:OutputParams = {
          generalCredit: 0,
          labourCredit: 0,
          grossMonth: 0,
          netYear: 0,
          netMonth: 0,
          incomeTax: 0
        };
      if(input.allowance){
        grossYear = input.grossYear / 1.08;  //-8%
      }

      let taxableYear = grossYear;
      if(input.ruling){
        taxableYear = taxableYear * 0.7;
      }
      output.generalCredit = this.getCredits(grossYear, input.ruling, input.socialSecurity).lk;
      output.labourCredit = this.getCredits(grossYear, input.ruling, input.socialSecurity).ak;
      output.grossMonth = ~~(grossYear / 12);
      output.netYear = grossYear - this.getTaxAmount(taxableYear, input.age, input.socialSecurity, input.year);
      output.netYear += input.generalCredit + input.labourCredit;
      output.netMonth = ~~(input.netYear / 12);
      output.incomeTax = this.getTaxAmount(taxableYear, input.age, input.socialSecurity, input.year);

      CalculateService._outputSubject.next(output);
    })
  }

  set input(value) {
    CalculateService._inputSubject.next(value);
  }


  public get calculateResult() {
    return CalculateService._outputSubject;
  }


  getTaxRates(ratesYear, age, socialSecurity) {
    let taxRates = {
      2015: {
        normal: [.365, .42, .42, .52],
        withoutSocial: [.0835, .1385, .42, .52],
        over64: [0.1860, 0.2410, .42, .52]
      },
      2016: {
        normal: [.3655, .404, .404, .52],
        withoutSocial: [.0835, .1385, .404, .52],
        over64: [0.1860, 0.2250, .404, .52]
      },
    }, currentTaxRates = taxRates[ratesYear]['normal'];

    if (!socialSecurity) {
      currentTaxRates = taxRates[ratesYear]['withoutSocial'];
    }

    if (age) {
      currentTaxRates = taxRates[ratesYear]['over64'];
    }

    return currentTaxRates;
  }

  getTaxAmountPeriods(year) {
    const taxAmountPeriods = {
      2015: [
        19822, // 0 - 19,822
        13767, // 33,589 - 19,822
        23996, // 57,585 - 33,589
        Infinity
      ],
      2016: [
        19922, // 0 - 19,922
        13793, // 33,715 - 19,922
        32697, // 66,421 - 33,715
        Infinity
      ],
    };

    return taxAmountPeriods[year];
  }

  getTaxAmount(taxableIncome, age, socialSecurity, ratesYear) {

    const taxAmountPeriods = this.getTaxAmountPeriods(ratesYear);
    const taxRates = this.getTaxRates(ratesYear, age, socialSecurity);
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

  getCredits(salary, ruling, socialSecurity) {
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
