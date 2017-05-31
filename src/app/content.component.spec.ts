/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { TestBed, async, inject } from '@angular/core/testing';

import { ContentComponent } from './content.component';
import { CalculateService } from './calculate.service';

describe('Component: Content', () => {
  it('should create an instance', () => {
    let service: CalculateService;
    let component = new ContentComponent(service);
    expect(component).toBeTruthy();
  });
});
