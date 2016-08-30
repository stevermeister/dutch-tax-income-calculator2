import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from '@angular/http';
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {MdInputModule} from "@angular2-material/input";
import {MdButtonModule} from "@angular2-material/button";
import {MdButtonToggleModule} from "@angular2-material/button-toggle";
import {MdTabsModule} from "@angular2-material/tabs";
import {MdListModule} from "@angular2-material/list";
import {MdCheckboxModule} from "@angular2-material/checkbox";
import {MdRadioModule} from "@angular2-material/radio";
import {TranslateModule} from 'ng2-translate/ng2-translate';
import {InputIncomeComponent} from "./input-income/input-income.component";
import {ResultsOutputComponent} from "./results-output/results-output.component";

@NgModule({
  declarations: [
    AppComponent,
    InputIncomeComponent,
    ResultsOutputComponent,
  ],
  imports: [
    MdInputModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdListModule,
    MdCheckboxModule,
    MdRadioModule,
    MdTabsModule,
    TranslateModule.forRoot(),
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
