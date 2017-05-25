import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { CONSTANTS } from './calculate.const';

type InputParams = {
  type: string,
  income: number,
  year: number,
  allowance: boolean,
  social: boolean,
  older: boolean,
  ruling: string,
  hours: number,
  truncate: boolean,
};

type OutputParams = {
  grossAllowance: number,
  grossYear: number,
  grossMonth: number,
  grossWeek: number,
  grossDay: number,
  grossHour: number,
  taxFreeYear: number,
  taxFree: number,
  taxableYear: number,
  payrollTax: number,
  socialTax: number,
  generalCredit: number,
  labourCredit: number,
  incomeTax: number,
  netAllowance: number,
  netYear: number,
  netMonth: number,
  netWeek: number,
  netDay: number,
  netHour: number,
};

@Injectable()
export class CalculateService {
  private static _inputSubject: Subject<InputParams> = new Subject();
  private static _outputSubject: Subject<OutputParams> = new Subject();

  constructor() {
    CalculateService._inputSubject.subscribe(input=> {

      let output: OutputParams = CONSTANTS.default.output;
      let income: number = +input.income || 0;
      let grossYear: number = 0;

      if (input.type === 'netMonth') {
        let netYear: number = income * 12;
        if (netYear > 0) {
          grossYear = netYear * 1.35; // Initial guess

          let options = {
            maxIter: 20,
            verbose: false,
          };

          let f = (x: number): number => {
            let inputChanged = input;
            inputChanged.truncate = false;
            let output = this.calculate(x, inputChanged, false);
            return output.netYear - netYear;
          };

          grossYear = this.newtonRaphson(f, grossYear, options);
          output = this.calculate(grossYear, input, true);
        }
        output.netYear = netYear;
      } else {
        output.grossYear = output.grossMonth = output.grossWeek = output.grossDay = output.grossHour = 0;
        output[input.type] = income;
        grossYear = output.grossYear + output.grossMonth * 12 + output.grossWeek * CONSTANTS.workingWeeks;
        grossYear += output.grossDay * CONSTANTS.workingDays + output.grossHour * CONSTANTS.workingWeeks * input.hours;
        if (grossYear > 0) {
          output = this.calculate(grossYear, input, true);
        }
        output.grossYear = grossYear;
      }
      output[input.type] = income;
      for (let key in output) {
        output[key] = ~~(output[key]);
      }
      console.log(JSON.stringify(input), JSON.stringify(output));
      CalculateService._outputSubject.next(output);
    });
  }

  set input(value) {
    CalculateService._inputSubject.next(value);
  }

  public get calculateResult() {
    return CalculateService._outputSubject;
  }

  // For calculation instructions:
  // https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/themaoverstijgend/brochures_en_publicaties/rekenvoorschriften-voor-de-geautomatiseerde-loonadministratie-januari-2017
  private calculate(grossYear: number, input: InputParams, full: boolean): OutputParams {
    let output: OutputParams = CONSTANTS.default.output;

    output.grossYear = grossYear;
    output.grossAllowance = (input.allowance) ? grossYear * (0.08 / 1.08) : 0; // Vakantiegeld (8%)

    output.taxFreeYear = 0;
    output.taxableYear = grossYear;
    if (input.ruling) {
      let rulingIncome: number = this.getRulingIncome(input.year, input.ruling);
      if (output.taxableYear > rulingIncome) {
        output.taxFreeYear = output.taxableYear * 0.30;
        output.taxableYear -= output.taxFreeYear;
        if (output.taxableYear < rulingIncome) { // For partial scheme
          output.taxFreeYear = grossYear - rulingIncome;
          output.taxableYear = rulingIncome;
        }
      }
    }
    let grossBase = output.taxableYear - output.grossAllowance;

    output.payrollTax = -1 * this.getPayrollTax(input.year, grossBase);
    output.socialTax = (input.social) ? -1 * this.getSocialTax(input.year, grossBase, input.older) : 0;
    let socialCredit: number = this.getSocialPercent(input.year, input.older, input.social);
    output.generalCredit = socialCredit * this.getGeneralCredit(input.year, grossBase);
    output.labourCredit = socialCredit * this.getLabourCredit(input.year, grossBase);
    output.incomeTax = output.payrollTax + output.socialTax + output.generalCredit + output.labourCredit;
    output.incomeTax = (output.incomeTax < 0) ? output.incomeTax : 0;

    output.netYear = grossBase + output.incomeTax + output.taxFreeYear;

    if (full) {
      output.grossMonth = grossYear / 12;
      output.grossWeek = grossYear / CONSTANTS.workingWeeks;
      output.grossDay = grossYear / CONSTANTS.workingDays;
      output.grossHour = grossYear / (CONSTANTS.workingWeeks * input.hours);

      output.taxFree = output.taxFreeYear / grossYear * 100;
      output.netAllowance = (input.allowance) ? output.grossAllowance * (1 - this.getSpecialRate(input.year, grossYear, input.older, input.social)) : 0;

      output.netMonth = output.netYear / 12;
      output.netWeek = output.netYear / CONSTANTS.workingWeeks;
      output.netDay = output.netYear / CONSTANTS.workingDays;
      output.netHour = output.netYear / (CONSTANTS.workingWeeks * input.hours);
    }
    return output;
  }

  // 30% Ruling (30%-regeling)
  // https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/internationaal/werken_wonen/tijdelijk_in_een_ander_land_werken/u_komt_in_nederland_werken/30_procent_regeling/voorwaarden_30_procent_regeling/u_hebt_een_specifieke_deskundigheid
  private getRulingIncome(year: number, ruling: string): number {
    return CONSTANTS.rulingThreshold[year][ruling || 'normal'];
  }

  // Payroll Tax Rates (Loonbelasting)
  // https://www.belastingdienst.nl/bibliotheek/handboeken/html/boeken/HL/stappenplan-stap_7_loonbelasting_premie_volksverzekeringen.html
  private getPayrollTax(year: number, salary: number): number {
    return this.getRates(CONSTANTS.payrollTax[year], salary);
  }

  // Social Security Contribution (Volksverzekeringen - AOW, Anw, Wlz)
  // https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/werk_en_inkomen/sociale_verzekeringen/premies_volks_en_werknemersverzekeringen/volksverzekeringen/volksverzekeringen?projectid=98f8c360-e92a-4fe2-aea6-27e9087ce4a1&projectid=98f8c360-e92a-4fe2-aea6-27e9087ce4a1
  private getSocialTax(year: number, salary: number, older: boolean): number {
    return this.getRates(CONSTANTS.socialPercent[year], salary, (older) ? 'older' : 'social');
  }

  // General Tax Credit (Algemene Heffingskorting)
  // https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/inkomstenbelasting/heffingskortingen_boxen_tarieven/heffingskortingen/algemene_heffingskorting/
  private getGeneralCredit(year: number, salary: number): number {
    return this.getRates(CONSTANTS.generalCredit[year], salary);
  }

  // Labour Tax Credit (Arbeidskorting)
  // https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/inkomstenbelasting/heffingskortingen_boxen_tarieven/heffingskortingen/arbeidskorting/
  private getLabourCredit(year: number, salary: number): number {
    return this.getRates(CONSTANTS.labourCredit[year], salary);
  }

  // Social Security Contribution (Volksverzekeringen) Component of Tax
  // https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/internationaal/fiscale_regelingen/sociale_zekerheid_bij_grensoverschrijdend_werken_en_ondernemen/hoe_wordt_de_premie_berekend/berekening_premie_volksverzekeringen_heffingskorting_deel_van_het_jaar_premieplichtig/heffingskortingen/
  private getSocialPercent(year: number, older: boolean, social: boolean): number {
    /*
    * JSON properties for socialPercent object
    * rate: Higher full rate including social contributions to be used to get proportion
    * social: Percentage of social contributions (AOW + Anw + Wlz)
    * older: Percentage for retirement age (Anw + Wlz, no contribution to AOW)
    */
    let bracket: any = CONSTANTS.socialPercent[year][0],
      percentage = 1;
    if (!social) {
      percentage = (bracket.rate - bracket.social) / bracket.rate; // Removing AOW + Anw + Wlz from total
    } else if (older) {
      percentage = (bracket.rate + bracket.older - bracket.social) / bracket.rate; // Removing only AOW from total
    }
    return percentage;
  }

  // Special Rate for One-off Rewards (Loonheffing Bijzonder Tarief)
  // https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/themaoverstijgend/rekenhulpen/loonbelastingtabellen
  private getSpecialRate(year: number, salary: number, older: boolean, social: boolean): number {
    let rate = 0;
    if (social) {
      rate = this.getRates(CONSTANTS.specialRate[year], salary, (older) ? 'older' : 'rate', false);
    }
    return rate;
  }

  // https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/themaoverstijgend/brochures_en_publicaties/handboek-loonheffingen-2017
  private getRates(brackets: any, salary: number, type: string = 'rate', cumulative: boolean = true): number {
    let amount: number = 0;
    let tax: number, delta: number, percent: boolean;

    brackets.some((bracket, index) => {
      bracket.max = bracket.max || Infinity; // Consider infinity when no upper bound
      tax = (type && bracket[type]) ? bracket[type] : bracket['rate'];
      salary = Math.trunc(salary);
      if (cumulative) {
        delta = bracket.max - bracket.min;
        percent = (tax != 0 && tax > -1 && tax < 1); // Check if rate is percentage or fixed
        if (salary <= delta) {
          if (percent) {
            amount += Math.trunc((salary * 100) * tax) / 100; // Round down at 2 decimal places
          } else {
            amount = tax;
          }
          //console.log(index, salary, delta, tax, percent, amount);
          return true; // Break loop when reach last bracket
        } else {
          if (percent) {
            amount += (delta * tax);
          } else {
            amount = tax;
          }
          salary -= delta;
        }
      } else if (salary >= bracket.min && salary <= bracket.max) {
        amount = tax;
        return true;
      }
    });
    return amount;
  }

  // Approximation using Newton-Raphson method with numerical derivative
  // https://github.com/scijs/newton-raphson-method
  private newtonRaphson(f: any, x0: number, options: any): number {
    let x1, y, yp, tol, maxIter, iter, yph, ymh, yp2h, ym2h, h, hr, verbose, eps;

    options = options || {};
    tol = options.tolerance === undefined ? 1e-7 : options.tolerance;
    eps = options.epsilon === undefined ? 2.220446049250313e-16 : options.epsion;
    maxIter = options.maxIterations === undefined ? 20 : options.maxIterations;
    h = options.h === undefined ? 1e-4 : options.h;
    verbose = options.verbose === undefined ? false : options.verbose;
    hr = 1 / h;

    iter = 0;
    while (iter++ < maxIter) {
      // Compute the value of the function:
      y = f(x0);

      // Calculate numerical derivatives:
      yph = f(x0 + h);
      ymh = f(x0 - h);
      yp2h = f(x0 + 2 * h);
      ym2h = f(x0 - 2 * h);

      yp = ((ym2h - yp2h) + 8 * (yph - ymh)) * hr / 12;

      // Check for badly conditioned update (extremely small first deriv relative to function):
      if (Math.abs(yp) <= eps * Math.abs(y)) {
        if (verbose) {
          console.log('Newton-Raphson: failed to converged due to nearly zero first derivative.');
        }
        return x0;
      }

      // Update the guess:
      x1 = x0 - y / yp;

      if (verbose) {
        console.log(iter, x1, x0, y, yp);
      }

      // Check for convergence:
      if (Math.abs(x1 - x0) <= tol * Math.abs(x1)) {
        if (verbose) {
          console.log('Newton-Raphson: converged to x = ' + x1 + ' after ' + iter + ' iterations.');
        }
        return x1;
      }

      // Transfer update to the new guess:
      x0 = x1;
    }

    if (verbose) {
      console.log('Newton-Raphson: Maximum iterations reached (' + maxIter + ').');
    }

    return x0;
  }
}
