import {Component, OnInit} from "@angular/core";
import {CalculateService} from "../shared/calculate.service";

@Component({
    selector: 'app-input-income',
    templateUrl: 'input-income.component.html',
    styleUrls: ['input-income.component.css'],
    providers: [CalculateService]
})
export class InputIncomeComponent implements OnInit {
    private _calculateService: CalculateService;

    constructor(_calculateService: CalculateService) {
        this._calculateService = _calculateService;
    }

    ngOnInit() {
    }

    public setIncome(income) {
        this._calculateService.input = {income};
    }

}
