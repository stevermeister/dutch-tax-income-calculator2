import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {MdInputModule} from "@angular2-material/input";
import {MdButtonModule} from "@angular2-material/button";
import {InputIncomeComponent} from "./input-income/input-income.component";
import { ResultsOutputComponent } from './results-output/results-output.component';

@NgModule({
    declarations: [
        AppComponent,
        InputIncomeComponent,
        ResultsOutputComponent,
    ],
    imports: [
        MdInputModule,
        MdButtonModule,
        BrowserModule,
        CommonModule,
        FormsModule
    ],
    providers: [],
    entryComponents: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}
