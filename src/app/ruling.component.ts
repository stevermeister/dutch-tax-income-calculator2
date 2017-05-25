import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { CONSTANTS } from './calculate.const';

@Component({
  selector: 'app-ruling',
  templateUrl: './ruling.component.html',
  styleUrls: ['./ruling.component.scss'],
})
export class RulingComponent {
  public ruling: any;
  public year: number;

  constructor() {
    this.year = CONSTANTS.years[0];
    this.ruling = CONSTANTS.rulingThreshold;
  }
}
