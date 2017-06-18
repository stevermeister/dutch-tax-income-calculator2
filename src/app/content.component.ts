import {
  Component,
  Input,
  OnInit,
  OnDestroy,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { TranslatePipe } from '@ngx-translate/core';
import { Subscription } from 'rxjs/Subscription';

import { CalculateService } from './calculate.service';
import { CONSTANTS } from './calculate.const';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  providers: [CalculateService],
  animations: [
    trigger('slideDown', [
      state('up', style({height: 0})),
      transition(':enter', animate('.5s ease-in')),
      transition(':leave', animate('.5s ease-out'))
    ])
  ]
})
export class ContentComponent implements OnInit, OnDestroy {

  private _subscription: Subscription;

  public selectedTab = 0;
  public years: number[];
  public ruling: boolean;
  public options: any;
  public output: any;
  public choices: string[];
  public show: boolean = false;
  public getKeys = Object.keys;

  constructor(private _calculateService: CalculateService) { }

  ngOnInit() {
    this.output = CONSTANTS.default.output;
    this.options = CONSTANTS.default.options;
    this.options.type = CONSTANTS.default.options.type;
    this.years = CONSTANTS.years;
    this.options.year = this.years[0];
    this.ruling = this.options.ruling ? true : false;
    this.options.truncate = true;
    let choices = [];
    Object.keys(CONSTANTS.default.input).forEach(key => {
      choices.push(key);
    });
    this.choices = choices;
    this.changeOption(true, this.options.type);
    this._subscription = this._calculateService.calculateResult.subscribe(results => {
      this.output = results;
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  public rename(str: string): string {
    let text = str.replace(/([a-z][A-Z])/g, g => {
      return g[0] + '_' + g[1];
    }).toUpperCase();
    return text;
  }

  public changeOption(additional: boolean, type?: string) {
    if (additional && !type) {
      this.options.ruling = this.ruling ? 'normal' : '';
    } else if (additional && type) {
      this.options.type = type;
      this.options.income = CONSTANTS.default.input[type];
    } else if (type) {
      this.options.type = type;
    }
    this._calculateService.input = this.options;
  }

  public getPositive(value: number = 0, type: string = ''): boolean {
    return (value > 0 && /credit$/i.test(type));
  }
}
