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
      console.log(results.netYear)
      this.results = results;
    })
  }

  ngOnInit() {
  }


}
