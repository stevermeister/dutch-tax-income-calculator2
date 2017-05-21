/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CalculateService } from './calculate.service';

describe('Service: Calculate', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [CalculateService]
    }).compileComponents();
  }));

  it('should ...',
    inject([CalculateService],
      (service: CalculateService) => {
        expect(service).toBeTruthy();
      }));
});
