/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CalculateService } from './calculate.service';

describe('Service: Calculate', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [CalculateService]
    }).compileComponents();
  }));

  let testArray = [{
    "input": {
      "type": "grossMonth",
      "income": 3250,
      "year": 2017,
      "allowance": false,
      "social": true,
      "older": false,
      "ruling": "",
      "hours": 40,
      "truncate": true
    },
    "output": {
      "grossAllowance": 0,
      "grossYear": 39000,
      "grossMonth": 3250,
      "grossWeek": 750,
      "grossDay": 150,
      "grossHour": 18,
      "taxFreeYear": 0,
      "taxFree": 0,
      "taxableYear": 39000,
      "payrollTax": -5720,
      "socialTax": -9343,
      "generalCredit": 1343,
      "labourCredit": 2986,
      "incomeTax": -10732,
      "netAllowance": 0,
      "netYear": 28267,
      "netMonth": 2355,
      "netWeek": 543,
      "netDay": 108,
      "netHour": 13
    }
  }, {
    "input": {
      "type": "grossYear",
      "income": 42120,
      "year": 2017,
      "allowance": true,
      "social": true,
      "older": false,
      "ruling": "",
      "hours": 40,
      "truncate": true
    },
    "output": {
      "grossAllowance": 3120,
      "grossYear": 42120,
      "grossMonth": 3510,
      "grossWeek": 810,
      "grossDay": 162,
      "grossHour": 20,
      "taxFreeYear": 0,
      "taxFree": 0,
      "taxableYear": 42120,
      "payrollTax": -5720,
      "socialTax": -9343,
      "generalCredit": 1343,
      "labourCredit": 2986,
      "incomeTax": -10732,
      "netAllowance": 1585,
      "netYear": 28267,
      "netMonth": 2355,
      "netWeek": 543,
      "netDay": 108,
      "netHour": 13
    }
  }];

  it('should ...',
    inject([CalculateService], (service: CalculateService) => {
        expect(service).toBeTruthy();
      }));
});
