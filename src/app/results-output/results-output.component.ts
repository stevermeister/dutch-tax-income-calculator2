import {Component, OnInit} from "@angular/core";
import {CalculateService} from "../shared/calculate.service";

@Component({
  selector: 'app-results-output',
  templateUrl: 'results-output.component.html',
  styleUrls: ['results-output.component.css'],
  providers: [CalculateService],
  host:{'background-color':'red'}
})
export class ResultsOutputComponent implements OnInit {
  private _calculateService: CalculateService;
  public results: any;

  constructor(_calculateService: CalculateService) {
    this._calculateService = _calculateService;
    this._calculateService.calculateResult.subscribe(results=> {
      this.results = [];
      this.results.push({key: 'generalCredit', value: results['generalCredit']});
      this.results.push({key: 'labourCredit', value: results['labourCredit']});
      this.results.push({key: 'grossMonth', value: results['grossMonth']});
      this.results.push({key: 'netYear', value: results['netYear']});
      this.results.push({key: 'netMonth', value: results['netMonth']});
      this.results.push({key: 'incomeTax', value: results['incomeTax']});
    })
  }

  ngOnInit() {
  }


}
