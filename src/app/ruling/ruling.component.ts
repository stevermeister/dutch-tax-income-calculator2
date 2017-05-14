import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { CalculateService } from '../shared/calculate.service';

@Component({
  selector: 'app-ruling',
  templateUrl: 'ruling.component.html',
  styleUrls: ['ruling.component.css'],
  providers: [CalculateService],
  host:{'background-color':'red'},
})
export class RulingComponent implements OnInit {
  private _calculateService: CalculateService;
  public ruling: any;
  public year: number;

  constructor(_calculateService: CalculateService) {
    this._calculateService = _calculateService;
  }

  ngOnInit() {
    if (this._calculateService.constants) {
      this.year = this._calculateService.constants.currentYear;
      this.ruling = this._calculateService.constants.rulingThreshold;
    }
  }


}
