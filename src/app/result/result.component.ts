import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { CalculateService } from '../shared/calculate.service';

@Component({
  selector: 'app-result',
  templateUrl: 'result.component.html',
  styleUrls: ['result.component.css'],
  providers: [CalculateService],
  host:{'background-color':'red'},
})
export class ResultComponent implements OnInit {
  private _calculateService: CalculateService;
  public results: any;


  constructor(_calculateService: CalculateService) {
    this._calculateService = _calculateService;
  }

  ngOnInit() {
    this._calculateService.calculateResult.subscribe(results=> {
      console.log(results)
      this.results = results;
    })
  }


}
