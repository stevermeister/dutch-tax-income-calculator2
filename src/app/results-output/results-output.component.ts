import {Component, OnInit} from "@angular/core";
import {CalculateService} from "../shared/calculate.service";
@Component({
    selector: 'app-results-output',
    templateUrl: 'results-output.component.html',
    styleUrls: ['results-output.component.css'],
    providers: [CalculateService]
})
export class ResultsOutputComponent implements OnInit {
    private _calculateService: CalculateService;

    constructor(_calculateService: CalculateService) {
        this._calculateService = _calculateService;
        this._calculateService.calculateResult.subscribe(result=> {
            console.log(result)
        })
    }

    ngOnInit() {
    }

}
