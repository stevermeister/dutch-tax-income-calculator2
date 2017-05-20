/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { CalculateService } from './calculate.service';

describe('Service: Calculate', () => {
  beforeEach(() => {
    addProviders([CalculateService]);
  });

  it('should ...',
    inject([CalculateService],
      (service: CalculateService) => {
        expect(service).toBeTruthy();
      }));
});
