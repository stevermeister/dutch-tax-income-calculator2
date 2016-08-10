import {Component} from "@angular/core";
import {InputIncomeComponent} from "./input-income/input-income.component";
import {ResultsOutputComponent} from "./results-output/results-output.component";
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [InputIncomeComponent, ResultsOutputComponent]
})
export class AppComponent {

}
