webpackJsonp([1,4],{

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 123;


/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(153);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calculate_const__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(translation) {
        this.translation = translation;
        this.year = __WEBPACK_IMPORTED_MODULE_2__calculate_const__["a" /* CONSTANTS */].years[0];
        translation.addLangs(['en', 'nl', 'pt', 'ru']);
        translation.setDefaultLang('en');
        var browserLang = translation.getBrowserLang();
        translation.use(browserLang.match(/en|nl|pt|ru/) ? browserLang : 'en');
        this.translate = translation;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(212),
        styles: [__webpack_require__(209)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__content_component__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ruling_component__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__euro_pipe__ = __webpack_require__(151);
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    // Default path /assets/i18n/en.json
    return new __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, 'assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__content_component__["a" /* ContentComponent */],
            __WEBPACK_IMPORTED_MODULE_11__ruling_component__["a" /* RulingComponent */],
            __WEBPACK_IMPORTED_MODULE_12__euro_pipe__["a" /* EuroPipe */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MdButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["c" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["d" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["e" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["f" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["g" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["h" /* MdRadioModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["i" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["j" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["k" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["l" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["m" /* MdTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["n" /* MdMenuModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__euro_pipe__["a" /* EuroPipe */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calculate_const__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculateService; });


var CalculateService = (function () {
    function CalculateService() {
        this._outputSubject$$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
    }
    Object.defineProperty(CalculateService.prototype, "input", {
        set: function (input) {
            var _this = this;
            var output = __WEBPACK_IMPORTED_MODULE_1__calculate_const__["a" /* CONSTANTS */].default.output;
            var income = +input.income || 0;
            var grossYear = 0;
            if (input.type === 'netMonth') {
                var netYear_1 = income * 12;
                if (netYear_1 > 0) {
                    grossYear = netYear_1 * 1.35; // Initial guess
                    var options = {
                        maxIter: 20,
                        verbose: false,
                    };
                    var f = function (x) {
                        var inputChanged = input;
                        inputChanged.truncate = false;
                        var output = _this.calculate(x, inputChanged, false);
                        return output.netYear - netYear_1;
                    };
                    grossYear = this.newtonRaphson(f, grossYear, options);
                    output = this.calculate(grossYear, input, true);
                }
                output.netYear = netYear_1;
            }
            else {
                output.grossYear = output.grossMonth = output.grossWeek = output.grossDay = output.grossHour = 0;
                output[input.type] = income;
                grossYear = output.grossYear + output.grossMonth * 12 + output.grossWeek * __WEBPACK_IMPORTED_MODULE_1__calculate_const__["a" /* CONSTANTS */].workingWeeks;
                grossYear += output.grossDay * __WEBPACK_IMPORTED_MODULE_1__calculate_const__["a" /* CONSTANTS */].workingDays + output.grossHour * __WEBPACK_IMPORTED_MODULE_1__calculate_const__["a" /* CONSTANTS */].workingWeeks * input.hours;
                if (grossYear > 0) {
                    output = this.calculate(grossYear, input, true);
                }
                output.grossYear = grossYear;
            }
            output[input.type] = income;
            for (var key in output) {
                output[key] = ~~(output[key]);
            }
            //console.log(JSON.stringify(input), JSON.stringify(output));
            this._outputSubject$$.next(output);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalculateService.prototype, "calculateResult", {
        get: function () {
            return this._outputSubject$$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    // For calculation instructions:
    // https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/themaoverstijgend/brochures_en_publicaties/rekenvoorschriften-voor-de-geautomatiseerde-loonadministratie-januari-2017
    CalculateService.prototype.calculate = function (grossYear, input, full) {
        var output = __WEBPACK_IMPORTED_MODULE_1__calculate_const__["a" /* CONSTANTS */].default.output;
        output.grossYear = grossYear;
        output.grossAllowance = (input.allowance) ? grossYear * (0.08 / 1.08) : 0; // Vakantiegeld (8%)
        output.taxFreeYear = 0;
        output.taxableYear = grossYear;
        if (input.ruling) {
            var rulingIncome = this.getRulingIncome(input.year, input.ruling);
            if (output.taxableYear > rulingIncome) {
                output.taxFreeYear = output.taxableYear * 0.30;
                output.taxableYear -= output.taxFreeYear;
                if (output.taxableYear < rulingIncome) {
                    output.taxFreeYear = grossYear - rulingIncome;
                    output.taxableYear = rulingIncome;
                }
            }
        }
        output.taxableYear -= output.grossAllowance;
        output.payrollTax = -1 * this.getPayrollTax(input.year, output.taxableYear);
        output.socialTax = (input.social) ? -1 * this.getSocialTax(input.year, output.taxableYear, input.older) : 0;
        var socialCredit = this.getSocialPercent(input.year, input.older, input.social);
        output.generalCredit = socialCredit * this.getGeneralCredit(input.year, output.taxableYear);
        output.labourCredit = socialCredit * this.getLabourCredit(input.year, output.taxableYear);
        output.incomeTax = output.payrollTax + output.socialTax + output.generalCredit + output.labourCredit;
        output.incomeTax = (output.incomeTax < 0) ? output.incomeTax : 0;
        output.netYear = output.taxableYear + output.incomeTax + output.taxFreeYear;
        if (full) {
            output.grossMonth = grossYear / 12;
            output.grossWeek = grossYear / __WEBPACK_IMPORTED_MODULE_1__calculate_const__["a" /* CONSTANTS */].workingWeeks;
            output.grossDay = grossYear / __WEBPACK_IMPORTED_MODULE_1__calculate_const__["a" /* CONSTANTS */].workingDays;
            output.grossHour = grossYear / (__WEBPACK_IMPORTED_MODULE_1__calculate_const__["a" /* CONSTANTS */].workingWeeks * input.hours);
            output.taxFree = output.taxFreeYear / grossYear * 100;
            output.netAllowance = (input.allowance) ? output.grossAllowance * (1 - this.getSpecialRate(input.year, grossYear, input.older, input.social)) : 0;
            output.netMonth = output.netYear / 12;
            output.netWeek = output.netYear / __WEBPACK_IMPORTED_MODULE_1__calculate_const__["a" /* CONSTANTS */].workingWeeks;
            output.netDay = output.netYear / __WEBPACK_IMPORTED_MODULE_1__calculate_const__["a" /* CONSTANTS */].workingDays;
            output.netHour = output.netYear / (__WEBPACK_IMPORTED_MODULE_1__calculate_const__["a" /* CONSTANTS */].workingWeeks * input.hours);
        }
        return output;
    };
    // 30% Ruling (30%-regeling)
    // https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/internationaal/werken_wonen/tijdelijk_in_een_ander_land_werken/u_komt_in_nederland_werken/30_procent_regeling/voorwaarden_30_procent_regeling/u_hebt_een_specifieke_deskundigheid
    CalculateService.prototype.getRulingIncome = function (year, ruling) {
        return __WEBPACK_IMPORTED_MODULE_1__calculate_const__["a" /* CONSTANTS */].rulingThreshold[year][ruling || 'normal'];
    };
    // Payroll Tax Rates (Loonbelasting)
    // https://www.belastingdienst.nl/bibliotheek/handboeken/html/boeken/HL/stappenplan-stap_7_loonbelasting_premie_volksverzekeringen.html
    CalculateService.prototype.getPayrollTax = function (year, salary) {
        return this.getRates(__WEBPACK_IMPORTED_MODULE_1__calculate_const__["a" /* CONSTANTS */].payrollTax[year], salary);
    };
    // Social Security Contribution (Volksverzekeringen - AOW, Anw, Wlz)
    // https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/werk_en_inkomen/sociale_verzekeringen/premies_volks_en_werknemersverzekeringen/volksverzekeringen/volksverzekeringen?projectid=98f8c360-e92a-4fe2-aea6-27e9087ce4a1&projectid=98f8c360-e92a-4fe2-aea6-27e9087ce4a1
    CalculateService.prototype.getSocialTax = function (year, salary, older) {
        return this.getRates(__WEBPACK_IMPORTED_MODULE_1__calculate_const__["a" /* CONSTANTS */].socialPercent[year], salary, (older) ? 'older' : 'social');
    };
    // General Tax Credit (Algemene Heffingskorting)
    // https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/inkomstenbelasting/heffingskortingen_boxen_tarieven/heffingskortingen/algemene_heffingskorting/
    CalculateService.prototype.getGeneralCredit = function (year, salary) {
        return this.getRates(__WEBPACK_IMPORTED_MODULE_1__calculate_const__["a" /* CONSTANTS */].generalCredit[year], salary);
    };
    // Labour Tax Credit (Arbeidskorting)
    // https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/inkomstenbelasting/heffingskortingen_boxen_tarieven/heffingskortingen/arbeidskorting/
    CalculateService.prototype.getLabourCredit = function (year, salary) {
        return this.getRates(__WEBPACK_IMPORTED_MODULE_1__calculate_const__["a" /* CONSTANTS */].labourCredit[year], salary);
    };
    // Social Security Contribution (Volksverzekeringen) Component of Tax
    // https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/internationaal/fiscale_regelingen/sociale_zekerheid_bij_grensoverschrijdend_werken_en_ondernemen/hoe_wordt_de_premie_berekend/berekening_premie_volksverzekeringen_heffingskorting_deel_van_het_jaar_premieplichtig/heffingskortingen/
    CalculateService.prototype.getSocialPercent = function (year, older, social) {
        /*
        * JSON properties for socialPercent object
        * rate: Higher full rate including social contributions to be used to get proportion
        * social: Percentage of social contributions (AOW + Anw + Wlz)
        * older: Percentage for retirement age (Anw + Wlz, no contribution to AOW)
        */
        var bracket = __WEBPACK_IMPORTED_MODULE_1__calculate_const__["a" /* CONSTANTS */].socialPercent[year][0], percentage = 1;
        if (!social) {
            percentage = (bracket.rate - bracket.social) / bracket.rate; // Removing AOW + Anw + Wlz from total
        }
        else if (older) {
            percentage = (bracket.rate + bracket.older - bracket.social) / bracket.rate; // Removing only AOW from total
        }
        return percentage;
    };
    // Special Rate for One-off Rewards (Loonheffing Bijzonder Tarief)
    // https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/themaoverstijgend/rekenhulpen/loonbelastingtabellen
    CalculateService.prototype.getSpecialRate = function (year, salary, older, social) {
        var rate = 0;
        if (social) {
            rate = this.getRates(__WEBPACK_IMPORTED_MODULE_1__calculate_const__["a" /* CONSTANTS */].specialRate[year], salary, (older) ? 'older' : 'rate', false);
        }
        return rate;
    };
    // https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/themaoverstijgend/brochures_en_publicaties/handboek-loonheffingen-2017
    CalculateService.prototype.getRates = function (brackets, salary, type, cumulative) {
        if (type === void 0) { type = 'rate'; }
        if (cumulative === void 0) { cumulative = true; }
        var amount = 0;
        var tax, delta, percent;
        brackets.some(function (bracket, index) {
            bracket.max = bracket.max || Infinity; // Consider infinity when no upper bound
            tax = (type && bracket[type]) ? bracket[type] : bracket['rate'];
            salary = Math.trunc(salary);
            if (cumulative) {
                delta = bracket.max - bracket.min;
                percent = (tax != 0 && tax > -1 && tax < 1); // Check if rate is percentage or fixed
                if (salary <= delta) {
                    if (percent) {
                        amount += Math.trunc((salary * 100) * tax) / 100; // Round down at 2 decimal places
                    }
                    else {
                        amount = tax;
                    }
                    //console.log(index, salary, delta, tax, percent, amount);
                    return true; // Break loop when reach last bracket
                }
                else {
                    if (percent) {
                        amount += (delta * tax);
                    }
                    else {
                        amount = tax;
                    }
                    salary -= delta;
                }
            }
            else if (salary >= bracket.min && salary <= bracket.max) {
                amount = tax;
                return true;
            }
        });
        return amount;
    };
    // Approximation using Newton-Raphson method with numerical derivative
    // https://github.com/scijs/newton-raphson-method
    CalculateService.prototype.newtonRaphson = function (f, x0, options) {
        var x1, y, yp, tol, maxIter, iter, yph, ymh, yp2h, ym2h, h, hr, verbose, eps;
        options = options || {};
        tol = options.tolerance === undefined ? 1e-7 : options.tolerance;
        eps = options.epsilon === undefined ? 2.220446049250313e-16 : options.epsion;
        maxIter = options.maxIterations === undefined ? 20 : options.maxIterations;
        h = options.h === undefined ? 1e-4 : options.h;
        verbose = options.verbose === undefined ? false : options.verbose;
        hr = 1 / h;
        iter = 0;
        while (iter++ < maxIter) {
            // Compute the value of the function:
            y = f(x0);
            // Calculate numerical derivatives:
            yph = f(x0 + h);
            ymh = f(x0 - h);
            yp2h = f(x0 + 2 * h);
            ym2h = f(x0 - 2 * h);
            yp = ((ym2h - yp2h) + 8 * (yph - ymh)) * hr / 12;
            // Check for badly conditioned update (extremely small first deriv relative to function):
            if (Math.abs(yp) <= eps * Math.abs(y)) {
                if (verbose) {
                    console.log('Newton-Raphson: failed to converged due to nearly zero first derivative.');
                }
                return x0;
            }
            // Update the guess:
            x1 = x0 - y / yp;
            if (verbose) {
                console.log(iter, x1, x0, y, yp);
            }
            // Check for convergence:
            if (Math.abs(x1 - x0) <= tol * Math.abs(x1)) {
                if (verbose) {
                    console.log('Newton-Raphson: converged to x = ' + x1 + ' after ' + iter + ' iterations.');
                }
                return x1;
            }
            // Transfer update to the new guess:
            x0 = x1;
        }
        if (verbose) {
            console.log('Newton-Raphson: Maximum iterations reached (' + maxIter + ').');
        }
        return x0;
    };
    return CalculateService;
}());

//# sourceMappingURL=calculate.service.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calculate_service__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calculate_const__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContentComponent = (function () {
    function ContentComponent(_calculateService) {
        this._calculateService = _calculateService;
        this.selectedTab = 0;
        this.show = false;
        this.getKeys = Object.keys;
    }
    ContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.output = __WEBPACK_IMPORTED_MODULE_3__calculate_const__["a" /* CONSTANTS */].default.output;
        this.options = __WEBPACK_IMPORTED_MODULE_3__calculate_const__["a" /* CONSTANTS */].default.options;
        this.options.type = __WEBPACK_IMPORTED_MODULE_3__calculate_const__["a" /* CONSTANTS */].default.options.type;
        this.years = __WEBPACK_IMPORTED_MODULE_3__calculate_const__["a" /* CONSTANTS */].years;
        this.options.year = this.years[0];
        this.ruling = this.options.ruling ? true : false;
        this.options.truncate = true;
        var choices = [];
        Object.keys(__WEBPACK_IMPORTED_MODULE_3__calculate_const__["a" /* CONSTANTS */].default.input).forEach(function (key) {
            choices.push(key);
        });
        this.choices = choices;
        this.changeOption(true, this.options.type);
        this._subscription = this._calculateService.calculateResult.subscribe(function (results) {
            _this.output = results;
        });
    };
    ContentComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    ContentComponent.prototype.rename = function (str) {
        var text = str.replace(/([a-z][A-Z])/g, function (g) {
            return g[0] + '_' + g[1];
        }).toUpperCase();
        return text;
    };
    ContentComponent.prototype.changeOption = function (additional, type) {
        if (additional && !type) {
            this.options.ruling = this.ruling ? 'normal' : '';
        }
        else if (additional && type) {
            this.options.type = type;
            this.options.income = __WEBPACK_IMPORTED_MODULE_3__calculate_const__["a" /* CONSTANTS */].default.input[type];
        }
        else if (type) {
            this.options.type = type;
        }
        this._calculateService.input = this.options;
    };
    ContentComponent.prototype.getPositive = function (value, type) {
        if (value === void 0) { value = 0; }
        if (type === void 0) { type = ''; }
        return (value > 0 && /credit$/i.test(type));
    };
    return ContentComponent;
}());
ContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-content',
        template: __webpack_require__(213),
        styles: [__webpack_require__(210)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__calculate_service__["a" /* CalculateService */]],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["a" /* trigger */])('slideDown', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* state */])('up', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ height: 0 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])(':enter', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('.5s ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])(':leave', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('.5s ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__calculate_service__["a" /* CalculateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__calculate_service__["a" /* CalculateService */]) === "function" && _a || Object])
], ContentComponent);

var _a;
//# sourceMappingURL=content.component.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EuroPipe; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var EuroPipe = (function (_super) {
    __extends(EuroPipe, _super);
    function EuroPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EuroPipe.prototype.transform = function (value, type) {
        if (type === void 0) { type = ''; }
        var formatted = _super.prototype.transform.call(this, Math.abs(value), '1.0-0');
        var custom = '€ ' + formatted;
        if (value < 0) {
            custom = '- ' + custom;
        }
        else if (value > 0 && /credit$/i.test(type)) {
            custom = '+ ' + custom;
        }
        return custom;
    };
    return EuroPipe;
}(__WEBPACK_IMPORTED_MODULE_1__angular_common__["g" /* DecimalPipe */]));
EuroPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Pipe */])({ name: 'euro' })
], EuroPipe);

//# sourceMappingURL=euro.pipe.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calculate_const__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RulingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RulingComponent = (function () {
    function RulingComponent() {
        this.year = __WEBPACK_IMPORTED_MODULE_1__calculate_const__["a" /* CONSTANTS */].years[0];
        this.ruling = __WEBPACK_IMPORTED_MODULE_1__calculate_const__["a" /* CONSTANTS */].rulingThreshold;
    }
    return RulingComponent;
}());
RulingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-ruling',
        template: __webpack_require__(214),
        styles: [__webpack_require__(211)],
    }),
    __metadata("design:paramtypes", [])
], RulingComponent);

//# sourceMappingURL=ruling.component.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// imports


// module
exports.push([module.i, ".toolbar {\n  padding-left: 0;\n  background-color: rgba(21, 101, 192, 0.03); }\n\n.title {\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  padding-left: 10px;\n  font-weight: bolder; }\n  @media all and (max-width: 699px) {\n    .title {\n      font-size: 14px;\n      padding-left: 0; } }\n\n.motto {\n  font-style: italic;\n  font-size: 14px;\n  letter-spacing: .02em;\n  margin-bottom: 2px;\n  opacity: 0.6; }\n\n.github {\n  width: 25px;\n  height: 25px;\n  background-size: 25px 25px;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc5MiIgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNjY0IDg5NnEwIDI1MS0xNDYuNSA0NTEuNXQtMzc4LjUgMjc3LjVxLTI3IDUtMzkuNS03dC0xMi41LTMwdi0yMTFxMC05Ny01Mi0xNDIgNTctNiAxMDIuNS0xOHQ5NC0zOSA4MS02Ni41IDUzLTEwNSAyMC41LTE1MC41cTAtMTIxLTc5LTIwNiAzNy05MS04LTIwNC0yOC05LTgxIDExdC05MiA0NGwtMzggMjRxLTkzLTI2LTE5Mi0yNnQtMTkyIDI2cS0xNi0xMS00Mi41LTI3dC04My41LTM4LjUtODYtMTMuNXEtNDQgMTEzLTcgMjA0LTc5IDg1LTc5IDIwNiAwIDg1IDIwLjUgMTUwdDUyLjUgMTA1IDgwLjUgNjcgOTQgMzkgMTAyLjUgMThxLTQwIDM2LTQ5IDEwMy0yMSAxMC00NSAxNXQtNTcgNS02NS41LTIxLjUtNTUuNS02Mi41cS0xOS0zMi00OC41LTUydC00OS41LTI0bC0yMC0zcS0yMSAwLTI5IDQuNXQtNSAxMS41IDkgMTQgMTMgMTJsNyA1cTIyIDEwIDQzLjUgMzh0MzEuNSA1MWwxMCAyM3ExMyAzOCA0NCA2MS41dDY3IDMwIDY5LjUgNyA1NS41LTMuNWwyMy00cTAgMzggLjUgODl0LjUgNTRxMCAxOC0xMyAzMHQtNDAgN3EtMjMyLTc3LTM3OC41LTI3Ny41dC0xNDYuNS00NTEuNXEwLTIwOSAxMDMtMzg1LjV0Mjc5LjUtMjc5LjUgMzg1LjUtMTAzIDM4NS41IDEwMyAyNzkuNSAyNzkuNSAxMDMgMzg1LjV6Ii8+PC9zdmc+); }\n\n.language {\n  cursor: default; }\n\n.flags {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.flag {\n  border: 1px solid #666;\n  border-radius: 5px;\n  width: 25px;\n  height: 25px;\n  background-size: 25px 25px; }\n  .flag.en {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB3aWR0aD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+ICA8ZGVmcz4gICAgPGNsaXBQYXRoIGlkPSJhIj4gICAgICA8cGF0aCBmaWxsLW9wYWNpdHk9Ii42NyIgZD0iTTI1MCAwaDUwMHY1MDBIMjUweiIvPiAgICA8L2NsaXBQYXRoPiAgPC9kZWZzPiAgPGcgY2xpcC1wYXRoPSJ1cmwoI2EpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjU2KSBzY2FsZSgxLjAyNCkiPiAgICA8ZyBzdHJva2Utd2lkdGg9IjFwdCI+ICAgICAgPHBhdGggZmlsbD0iIzAwNiIgZD0iTTAgMGgxMDAwLjAydjUwMC4wMUgweiIvPiAgICAgIDxwYXRoIGQ9Ik0wIDB2NTUuOTAzbDg4OC4yMTggNDQ0LjExaDExMS44MDJWNDQ0LjExTDExMS44MDIuMDAzSDB6bTEwMDAuMDIgMHY1NS45TDExMS44MDIgNTAwLjAxSDB2LTU1LjlMODg4LjIxOCAwaDExMS44MDJ6IiBmaWxsPSIjZmZmIi8+ICAgICAgPHBhdGggZD0iTTQxNi42NzUgMHY1MDAuMDFoMTY2LjY3VjBoLTE2Ni42N3pNMCAxNjYuNjd2MTY2LjY3aDEwMDAuMDJWMTY2LjY3SDB6IiBmaWxsPSIjZmZmIi8+ICAgICAgPHBhdGggZD0iTTAgMjAwLjAwNHYxMDAuMDAyaDEwMDAuMDJWMjAwLjAwNEgwek00NTAuMDEgMHY1MDAuMDFoMTAwVjBoLTEwMHpNMCA1MDAuMDFsMzMzLjM0LTE2Ni42N2g3NC41MzVMNzQuNTM1IDUwMC4wMUgwek0wIDBsMzMzLjM0IDE2Ni42N2gtNzQuNTM1TDAgMzcuMjdWMHptNTkyLjE0NSAxNjYuNjdMOTI1LjQ4NSAwaDc0LjUzNUw2NjYuNjggMTY2LjY3aC03NC41MzV6bTQwNy44NzUgMzMzLjM0TDY2Ni42OCAzMzMuMzRoNzQuNTM1bDI1OC44MDUgMTI5LjQwM3YzNy4yNjd6IiBmaWxsPSIjYzAwIi8+ICAgIDwvZz4gIDwvZz48L3N2Zz4=); }\n  .flag.nl {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB3aWR0aD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+ICA8ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS13aWR0aD0iMXB0IiB0cmFuc2Zvcm09Im1hdHJpeCguNDgxNjYgMCAwIC43MTkzMiAwIDApIj4gICAgPHJlY3Qgcng9IjAiIHJ5PSIwIiBoZWlnaHQ9IjcwOC42NiIgd2lkdGg9IjEwNjMiIGZpbGw9IiNmZmYiLz4gICAgPHJlY3Qgcng9IjAiIHJ5PSIwIiBoZWlnaHQ9IjIzNi4yMiIgd2lkdGg9IjEwNjMiIHk9IjQ3NS41NiIgZmlsbD0iIzIxNDY4YiIvPiAgICA8cGF0aCBmaWxsPSIjYWUxYzI4IiBkPSJNMCAwaDEwNjN2MjM2LjIySDB6Ii8+ICA8L2c+PC9zdmc+); }\n  .flag.pt {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB3aWR0aD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+ICA8ZyBzdHJva2Utd2lkdGg9IjFwdCI+ICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzIyOWU0NSIgZD0iTTAgMGg1MTJ2NTEySDB6Ii8+ICAgIDxwYXRoIGQ9Ik0yNjEuMzU4IDQwNS4zOTRMNDkxLjIzIDI1Ni4yIDI1OS45NjcgMTA2LjYwNSAyOS4zNCAyNTYuNTZsMjMyLjAxOCAxNDguODM0eiIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjZjhlNTA5Ii8+ICAgIDxwYXRoIGQ9Ik0zNjEuNTIgMjU2LjAwNGMwIDUzLjYyMi00My41NCA5Ny4wOTMtOTcuMjUgOTcuMDkzcy05Ny4yNDgtNDMuNDctOTcuMjQ4LTk3LjA5MyA0My41NC05Ny4wOTMgOTcuMjUtOTcuMDkzIDk3LjI0OCA0My40NyA5Ny4yNDggOTcuMDk0eiIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjMmI0OWEzIi8+ICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZmZmZlZiIgZD0iTTIzMi4zMDIgMzE0LjE1NmwtMy4wMDQtMS43MzQtMy4xMiAxLjU0NC42OTgtMy40NjgtMi40MS0yLjU0MiAzLjQ0Ni0uNDAzIDEuNjItMy4xMSAxLjQ0MyAzLjIxNiAzLjQuNjE3LTIuNTUgMi4zODdtNjUuNjQ4IDE5Ljk5NWwtMy4wMDUtMS43MzQtMy4xMiAxLjU0NC42OTgtMy40NjgtMi40MS0yLjU0IDMuNDQ2LS40MDUgMS42Mi0zLjExIDEuNDQzIDMuMjE3IDMuNC42MTctMi41NSAyLjM4N20tMjcuNjEzLTIyLjg2OWwtMi41OTUtMS40OTgtMi42OTYgMS4zMzMuNjA0LTIuOTk2LTIuMDgyLTIuMTk2IDIuOTc4LS4zNDggMS4zOTgtMi42ODcgMS4yNDggMi43OCAyLjkzNy41MzMtMi4yMDMgMi4wNjJtNjYuMjMxLTYuNDYybC0yLjU1LTEuNDctMi42NDYgMS4zMS41OTMtMi45NDMtMi4wNDYtMi4xNTYgMi45MjQtLjM0MyAxLjM3My0yLjYzOCAxLjIyNiAyLjcyOCAyLjg4NC41MjMtMi4xNjMgMi4wMjZtLTY2LjYwNC0xNi43N2wtMy4wMDUtMS43MzQtMy4xMiAxLjU0NS42OTgtMy40NjgtMi40MS0yLjU0MiAzLjQ0Ny0uNDA0IDEuNjE4LTMuMTEgMS40NDUgMy4yMTggMy40LjYxOC0yLjU1IDIuMzg3TTE4Ny45NSAyNDQuOTZsLTMuMDA1LTEuNzM1LTMuMTIgMS41NDQuNjk4LTMuNDctMi40MS0yLjU0IDMuNDQ3LS40MDQgMS42MTgtMy4xMSAxLjQ0NCAzLjIxNiAzLjQuNjE4LTIuNTUgMi4zODdtMTAuMTI4IDQzLjU2OGwtMy4wMDUtMS43MzQtMy4xMiAxLjU0NC42OTgtMy40NjgtMi40MS0yLjU0MiAzLjQ0Ny0uNDAzIDEuNjE4LTMuMTEgMS40NDQgMy4yMTggMy40LjYxNy0yLjU1IDIuMzg3bTEwMC42MTItNTEuMzM3bC0yLjY1NC0xLjUzLTIuNzU3IDEuMzYzLjYxNy0zLjA2NS0yLjEzLTIuMjQ1IDMuMDQ2LS4zNTcgMS40My0yLjc0OCAxLjI3NSAyLjg0MyAzLjAwNS41NDUtMi4yNTMgMi4xMW0tNS4wODMgMjkuMTU4bC0yLjA5LTEuMjA4LTIuMTcgMS4wNzQuNDg1LTIuNDEyLTEuNjc3LTEuNzcgMi4zOTgtLjI4IDEuMTI2LTIuMTY0IDEuMDA1IDIuMjQgMi4zNjYuNDI4LTEuNzc1IDEuNjZtLTEwOC40MjEgMzguNDQ4bC0yLjAwNi0xLjE1OC0yLjA4MyAxLjAzLjQ2Ny0yLjMxNC0xLjYxLTEuNjk3IDIuMzAyLS4yNyAxLjA4LTIuMDc3Ljk2NCAyLjE0OCAyLjI3LjQxMy0xLjcwMiAxLjU5NW0xNTIuNTk5IDExLjU2MWwtMS42MzQtLjg2Ni0xLjY5OC43NzIuMzgtMS43MzItMS4zMS0xLjI3IDEuODc0LS4yLjg4LTEuNTU1Ljc4NiAxLjYwNyAxLjg1LjMxLTEuMzg3IDEuMTkiLz4gICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjZmZmZmVmIiBkPSJNMTgzLjQ3NyAyOTIuMjk2bC0yLjAwNi0xLjE1OC0yLjA4MyAxLjAzLjQ2Ny0yLjMxNC0xLjYxLTEuNjk3IDIuMzAyLS4yNyAxLjA4LTIuMDc3Ljk2NCAyLjE0OCAyLjI3LjQxMy0xLjcwMiAxLjU5NSIvPiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNmZmZmZWYiIGQ9Ik0xODMuNDc3IDI5Mi4yOTZsLTIuMDA2LTEuMTU4LTIuMDgzIDEuMDMuNDY3LTIuMzE0LTEuNjEtMS42OTcgMi4zMDItLjI3IDEuMDgtMi4wNzcuOTY0IDIuMTQ4IDIuMjcuNDEzLTEuNzAyIDEuNTk1bTMyLjI1MSAyLjMyMmwtMi4wMDctMS4xNTctMi4wODMgMS4wMy40NjYtMi4zMTQtMS42MS0xLjY5NyAyLjMwMi0uMjcgMS4wOC0yLjA3Ny45NjUgMi4xNDggMi4yNy40MTMtMS43MDMgMS41OTRtLTMuNjUgMTIuOTUybC0yLjAwNC0xLjE1Ny0yLjA4NCAxLjAzLjQ2Ni0yLjMxNC0xLjYxLTEuNjk4IDIuMzAyLS4yNyAxLjA4LTIuMDc3Ljk2NSAyLjE0OCAyLjI3LjQxMy0xLjcwMiAxLjU5NG02Ni42MjUtMTcuMDA2bC0yLjAwNi0xLjE1Ny0yLjA4MyAxLjAzLjQ2NS0yLjMxNS0xLjYxLTEuNjk2IDIuMzAyLS4yNyAxLjA4LTIuMDc2Ljk2NSAyLjE0OCAyLjI3LjQxMi0xLjcwMyAxLjU5NG0tMTkuMTM4IDIuMzIzbC0yLjAwNS0xLjE1OC0yLjA4MyAxLjAzLjQ2Ni0yLjMxNC0xLjYxLTEuNjk3IDIuMzAyLS4yNyAxLjA4LTIuMDc3Ljk2NSAyLjE1IDIuMjcuNDEtMS43MDMgMS41OTVtLTUyLjQ1Ny00LjQ1MmwtMS4yNTctLjcyNi0xLjMwNS42NDYuMjkyLTEuNDUtMS4wMDgtMS4wNjQgMS40NDItLjE3LjY3Ni0xLjMuNjA0IDEuMzQ1IDEuNDIzLjI1OC0xLjA2NyAxbTEyNy45NyAzNC42MDZsLTIuMDA1LTEuMTU4LTIuMDg0IDEuMDMuNDY2LTIuMzE1LTEuNjEtMS42OTcgMi4zMDItLjI3IDEuMDgtMi4wNzYuOTY1IDIuMTQ4IDIuMjcuNDEzLTEuNzAzIDEuNTkzbS0xNS44ODMgNC40NTRsLTEuNjYyLS45Ni0xLjcyNC44NTUuMzg2LTEuOTIzLTEuMzMzLTEuNDEgMS45MDUtLjIyMy44OTUtMS43MjUuOCAxLjc4MyAxLjg4LjM0My0xLjQxIDEuMzI0bTcuOTA3IDEuNzUybC0xLjU0OC0uODk0LTEuNjA4Ljc5Ni4zNi0xLjc4OC0xLjI0Mi0xLjMxIDEuNzc1LS4yMS44MzQtMS42MDMuNzQzIDEuNjYgMS43NS4zMTgtMS4zMTIgMS4yM20yMi4xOTctMTcuMzUzbC0xLjQ5LS44Ni0xLjU1Ljc2Ni4zNDctMS43Mi0xLjE5Ni0xLjI2MiAxLjcxLS4yLjgwNC0xLjU0My43MTcgMS41OTYgMS42ODcuMzA1LTEuMjY1IDEuMTg1bS0yOS41NSAzMS44ODFsLTEuOTQ2LTEuMDYzLTIuMDIyLjk0Ny40NTMtMi4xMjYtMS41NjItMS41NTcgMi4yMzMtLjI0NiAxLjA1LTEuOTA2LjkzNSAxLjk3IDIuMjA0LjM4LTEuNjUzIDEuNDYybS40MTggMTAuODYxbC0xLjc3NS0xLjA2Mi0xLjg0NC45NDYuNDE0LTIuMTI1LTEuNDI1LTEuNTU3IDIuMDM2LS4yNDcuOTU3LTEuOTA2Ljg1MyAxLjk3IDIuMDEuMzgtMS41MDggMS40NjNtLTE0LjQzMi0xNy41ODFsLTEuNDktLjg2LTEuNTUuNzY1LjM0Ny0xLjcyLTEuMTk1LTEuMjYgMS43MS0uMjAyLjgwMy0xLjU0My43MTcgMS41OTYgMS42ODcuMzA2LTEuMjY1IDEuMTg0bS0xMy41NiAxLjczNGwtMS40OS0uODYtMS41NDcuNzY1LjM0Ni0xLjcyLTEuMTk3LTEuMjYgMS43MS0uMjAyLjgwMy0xLjU0My43MTcgMS41OTYgMS42ODcuMzA2LTEuMjY1IDEuMTg0TTI2NS4wNyAyOTEuMzhsLTEuNDkyLS44Ni0xLjU0OC43NjYuMzQ3LTEuNzItMS4xOTYtMS4yNiAxLjcxLS4yLjgwNC0xLjU0NS43MTYgMS41OTggMS42ODcuMzA2LTEuMjY1IDEuMTg0bTIuODQ3IDQzLjQ3N2wtMS4yNjQtLjczLTEuMzEuNjUuMjkzLTEuNDU3LTEuMDE0LTEuMDcgMS40NDgtLjE3LjY4LTEuMzA2LjYwNyAxLjM1MiAxLjQzLjI2LTEuMDcyIDEuMDAybS0zNS4xNzYtNjYuMDUybC0zLjAwNC0xLjczNC0zLjEyIDEuNTQ1LjY5OC0zLjQ2OC0yLjQxLTIuNTQyIDMuNDQ2LS40MDQgMS42Mi0zLjExIDEuNDQzIDMuMjE4IDMuNC42MTgtMi41NSAyLjM4NyIvPiAgICA8cGF0aCBkPSJNMzU1LjExMyAyOTAuOTM0YzEuNDgyLTMuODc2IDMuMzk0LTkuNzIgNC40MS0xNS4wODYtNTEuNjUzLTQ1LjM3NS0xMDkuMjMzLTY4LjYxOC0xODEuOTktNjMuODM2LTIuNjA3IDUtNC42OTUgMTAuMjM2LTYuNDU2IDE1LjkgODYuMjA3LTguMjIzIDE0OS4zOTYgMjkuOTQzIDE4NC4wMzggNjMuMDIyeiIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjZmZmIi8+ICAgIDxwYXRoIGQ9Ik0zMzEuODkzIDI2NS40MjVsMS44NDUgMS4wMDhjLS4yOS42NTQtLjM2NyAxLjIyNi0uMjM2IDEuNzE0LjEzNy40OTMuNDc2LjkyMiAxLjAxNyAxLjI4OC41NzMuMzkyIDEuMDg2LjU2NCAxLjUzNy41MTguNDU3LS4wNDYuNzk3LS4yMzMgMS4wMTgtLjU2LjE0LS4yMS4xOTYtLjQzLjE3LS42NTgtLjAyLS4yMy0uMTQ2LS41MDMtLjM3Ny0uODItLjE2LS4yMTMtLjU0OC0uNjY1LTEuMTY1LTEuMzU0LS43OTQtLjg4NC0xLjI2Ny0xLjYzLTEuNDItMi4yNC0uMjEyLS44NTQtLjA4My0xLjYzLjM5LTIuMzMyLjMwNC0uNDUuNzEzLS43ODYgMS4yMjgtMS4wMDUuNTI0LS4yMiAxLjA5NS0uMjcgMS43MS0uMTUuNjE4LjEyIDEuMjY4LjQxIDEuOTQ0Ljg3IDEuMTA3Ljc1MyAxLjc3NiAxLjU2MiAyLjAwNCAyLjQyNy4yMzMuODcuMDkgMS43Mi0uNDMgMi41NWwtMS44MzMtMS4xM2MuMjMtLjUwNy4yODYtLjk0NC4xNjYtMS4zMTMtLjExLS4zNy0uNDE4LS43MjUtLjkyLTEuMDY2LS41MTctLjM1LS45OTQtLjUxOC0xLjQzLS41MDRhLjc3Ni43NzYgMCAwIDAtLjY1NC4zNTcuODMzLjgzMyAwIDAgMC0uMDk4LjcxOGMuMDk4LjM0My41MS45MSAxLjI0IDEuNzA0LjcyNi43OTMgMS4yMjIgMS40NCAxLjQ4NiAxLjk0My4yNy41LjM5MyAxLjAyLjM2NyAxLjU2Mi0uMDE3LjUzOC0uMjE2IDEuMDg3LS41OTIgMS42NDdhMy4xMzMgMy4xMzMgMCAwIDEtMS4zOCAxLjEzOGMtLjU4LjI1Mi0xLjIuMzE0LTEuODYuMTgyLS42NTctLjEzNC0xLjM2OC0uNDYyLTIuMTMzLS45ODMtMS4xMTUtLjc1Ni0xLjgtMS41OTYtMi4wNS0yLjUxNy0uMjQ1LS45MjQtLjA5NC0xLjkyMy40NTgtMi45OTJ6bS04Ljc1My01Ljc0NWwxLjg4Ni45M2MtLjI2My42NjUtLjMxOCAxLjI0LS4xNjcgMS43MjMuMTU3LjQ4Ni41MS45MDMgMS4wNjYgMS4yNDcuNTkuMzY4IDEuMTA4LjUyIDEuNTU3LjQ1NS40NTctLjA2Ni43OS0uMjY0Ljk5NS0uNmEuOTU3Ljk1NyAwIDAgMCAuMTQ2LS42NjRjLS4wMy0uMjI4LS4xNjctLjQ5Ny0uNDEyLS44MDUtLjE2Ny0uMjA3LS41NzItLjY0LTEuMjE4LTEuMzA2LS44MjgtLjg1My0xLjMzLTEuNTgtMS41MDgtMi4xOC0uMjQ2LS44NDgtLjE0OC0xLjYzLjI5My0yLjM0OGEyLjc2NyAyLjc2NyAwIDAgMSAxLjE4OC0xLjA1M2MuNTE1LS4yNCAxLjA4My0uMzE2IDEuNzAyLS4yMjIuNjIzLjA5NyAxLjI4NC4zNiAxLjk3OC43OTQgMS4xMzguNzA1IDEuODM3IDEuNDg3IDIuMSAyLjM0My4yNjcuODYuMTYgMS43MTMtLjMyNiAyLjU2NmwtMS44OC0xLjA1NmMuMjEtLjUxNC4yNS0uOTU0LjExNS0xLjMxNy0uMTI4LS4zNjYtLjQ1LS43MDgtLjk2My0xLjAyOC0uNTMyLS4zMzItMS4wMTUtLjQ4LTEuNDUtLjQ0OGEuNzczLjc3MyAwIDAgMC0uNjM4LjM4NGMtLjEzMi4yMTUtLjE1Ni40NTMtLjA3LjcyLjExMi4zMzguNTQ2Ljg4OCAxLjMwNiAxLjY1My43NTcuNzYgMS4yOCAxLjM4OCAxLjU2MyAxLjg3OC4yOS40OS40MzQgMS4wMDUuNDMgMS41NDYuMDA1LjU0LS4xNzMgMS4wOTYtLjUyNSAxLjY3Mi0uMzIyLjUyLS43Ny45MTctMS4zMzYgMS4xOTMtLjU2OC4yNzUtMS4xODYuMzYtMS44NS4yNTYtLjY2LS4xMDgtMS4zODQtLjQxLTIuMTctLjg5Ny0xLjE0NC0uNzEzLTEuODYtMS41MjMtMi4xNDgtMi40MzQtLjI4NS0uOTE0LS4xNzQtMS45MTYuMzM1LTMuMDA2em0tMTAuODMtMi45MDNsNS41NDctOS4xMjMgNi43MzggNC4xMy0uOTQgMS41NDQtNC45LTMuMDA2LTEuMjMyIDIuMDIyIDQuNTYyIDIuNzk3LS45MzUgMS41MzctNC41NjItMi43OTUtMS41MSAyLjQ4MyA1LjA3NyAzLjExLS45MzYgMS41NC02LjkxLTQuMjM4em0tMTUuNzc4LTEyLjk1N2wuODIzLTEuNiA0LjExOCAyLjEzLTEuOTQgMy43ODVjLS42MDMuMTgyLTEuMzYuMjI1LTIuMjc1LjEzLS45MDctLjEtMS43NS0uMzUtMi41My0uNzUzLS45OS0uNTEyLTEuNzQ2LTEuMTYzLTIuMjY4LTEuOTYtLjUyLS44LS43Ny0xLjY4LS43NDMtMi42NDcuMDMtLjk3LjI3Ny0xLjkxLjc0NS0yLjgyMi41MDctLjk5IDEuMTY3LTEuNzYgMS45NzYtMi4zMTcuODA1LS41NTUgMS43MTQtLjgzIDIuNzItLjgzLjc3LS4wMDQgMS42MDUuMjMyIDIuNTEuNjk2IDEuMTc1LjYxIDEuOTY1IDEuMzMyIDIuMzY2IDIuMTcuNDEuODM2LjQ4NiAxLjczOC4yMjcgMi43MWwtMi4wOC0uNjI2YTIuMjI2IDIuMjI2IDAgMCAwLS4xOS0xLjQ5MmMtLjIyNS0uNDYyLS42MTQtLjgzNS0xLjE2My0xLjEyLS44MzctLjQzMy0xLjYzNy0uNTEtMi40MDYtLjIzMy0uNzYyLjI3OC0xLjQxLjkzOC0xLjk0NyAxLjk4NC0uNTggMS4xMjgtLjc2NiAyLjEwNC0uNTU3IDIuOTMuMjEyLjgxNy43MiAxLjQzNyAxLjUzMiAxLjg1Ny40LjIwNy44NC4zMzYgMS4zMi4zODcuNDg2LjA1LjkzLjAzNyAxLjMzNS0uMDM4bC42Mi0xLjIwNy0yLjE5LTEuMTMyem0tNjguODA3LTE3LjA2MmwxLjU1LTEwLjU3NCAzLjE4Mi40Ny44NTYgNy40OTQgMi45NDQtNi45MzMgMy4xOTIuNDctMS41NSAxMC41NzYtMS45NzYtLjI5IDEuMjIyLTguMzI1LTMuMzEyIDguMDE1LTIuMDQ3LS4zMDMtLjg2NS04LjYzMi0xLjIyIDguMzIzLTEuOTc3LS4yOXptLTEwLjc1Ny0xLjI1bC45OTUtMTAuNjQ0IDcuODYuNzQzLS4xNjYgMS44LTUuNzItLjU0LS4yMjMgMi4zNiA1LjMyLjUwMi0uMTY2IDEuNzkzLTUuMzIyLS41MDItLjI3IDIuODk3IDUuOTIuNTU3LS4xNjYgMS43OTUtOC4wNjItLjc2eiIgZmlsbD0iIzMwOWUzYSIvPiAgICA8ZyBzdHJva2Utb3BhY2l0eT0iLjUwMiI+ICAgICAgPHBhdGggZD0iTTE4MS4zNyAyMTguODVjLjAzLTEuMDg3LjIxNi0xLjk5Ny41Ni0yLjcyNi4yNTctLjUzOC42LTEuMDE3IDEuMDI3LTEuNDM4LjQzMi0uNDIuOS0uNzMgMS40MDctLjkyNC42Ny0uMjYzIDEuNDQtLjM4NCAyLjMwNC0uMzYgMS41Ny4wNDMgMi44MS41NjUgMy43MiAxLjU2Ny45MiAxLjAwMiAxLjM1NCAyLjM3MyAxLjMwNyA0LjExMi0uMDQ3IDEuNzI0LS41NSAzLjA2My0xLjUxMiA0LjAxNC0uOTYuOTQ2LTIuMjIyIDEuMzk4LTMuNzg0IDEuMzU1LTEuNTg1LS4wNDItMi44My0uNTYtMy43MzctMS41NTItLjkwOC0uOTk4LTEuMzQtMi4zNDctMS4yOTItNC4wNDd6IiBmaWxsPSIjMzA5ZTNhIi8+ICAgICAgPHBhdGggZD0iTTE4My41OTIgMjE4LjgzYy0uMDMzIDEuMjEuMjIgMi4xMzcuNzYgMi43NzguNTQuNjM4IDEuMjM4Ljk2OCAyLjA5NS45OS44NTYuMDI1IDEuNTY3LS4yNjUgMi4xMy0uODY2LjU2OC0uNjA4Ljg3LTEuNTMuOTAzLTIuNzcuMDMzLTEuMjI0LS4yMS0yLjE0NS0uNzMtMi43NjItLjUxOC0uNjE3LTEuMjE4LS45MzctMi4xMDQtLjk2Mi0uODg1LS4wMjQtMS42MDcuMjYzLTIuMTY3Ljg2LS41Ni41OTMtLjg1NiAxLjUwNC0uODg4IDIuNzMzeiIgZmlsbD0iI2Y3ZmZmZiIvPiAgICA8L2c+ICAgIDxnIHN0cm9rZS1vcGFjaXR5PSIuNTAyIj4gICAgICA8cGF0aCBkPSJNMTkzLjk5IDIyNC4zNjVsLjEyNS0xMC42ODggNC41MjQuMDU0YzEuMTM3LjAxNSAxLjk2LjEyIDIuNDcyLjMyMi41MTYuMTk1LjkyNi41NCAxLjIzIDEuMDM1cy40NTIgMS4wNTcuNDQ1IDEuNjljLS4wMS44LS4yNTIgMS40NjItLjcyOCAxLjk4LS40NzYuNTE2LTEuMTgyLjgzNS0yLjEyLjk2LjQ2My4yNzguODQ0LjU4MiAxLjE0LjkxLjMuMzMuNzAyLjkxMyAxLjIwNiAxLjc1bDEuMjc2IDIuMS0yLjU3LS4wMy0xLjUyOC0yLjM0NGMtLjU0LS44MzctLjkxNC0xLjM2NC0xLjExNC0xLjU4YTEuNjA3IDEuNjA3IDAgMCAwLS42NDItLjQ1M2MtLjIyNi0uMDg0LS41ODYtLjEzLTEuMDgtLjEzNWwtLjQzNS0uMDA2LS4wNTMgNC40Ni0yLjE1LS4wMjV6IiBmaWxsPSIjMzA5ZTNhIi8+ICAgICAgPHBhdGggZD0iTTE5Ni4yMiAyMTguMjIzbDEuNTkuMDJjMS4wMzIuMDEyIDEuNjc2LS4wMjUgMS45MzQtLjExLjI1Ny0uMDg0LjQ2LS4yMzIuNjA3LS40NDRzLjIyNC0uNDguMjMtLjhjLjAwMy0uMzYtLjA5LS42NS0uMjgyLS44Ny0uMTg2LS4yMjctLjQ1My0uMzcyLS44LS40MzQtLjE3NS0uMDI2LS43LS4wNDQtMS41Ny0uMDU1bC0xLjY3Ny0uMDE4LS4wMyAyLjcxeiIgZmlsbD0iI2ZmZiIvPiAgICA8L2c+ICAgIDxnIHN0cm9rZS1vcGFjaXR5PSIuNTAyIj4gICAgICA8cGF0aCBkPSJNMjA2LjE1MyAyMTQuMjA3bDMuOTI0LjJjLjg4NS4wNDUgMS41NTUuMTQ3IDIuMDEyLjMwNy42MTMuMjE2IDEuMTMyLjU3IDEuNTUyIDEuMDY1LjQyMi40OTIuNzMgMS4wODYuOTMgMS43ODMuMTk2LjY5Mi4yNyAxLjUzNy4yMiAyLjUzNi0uMDQ0Ljg3OC0uMTkyIDEuNjMtLjQ0IDIuMjU1LS4zMDcuNzY0LS43MTcgMS4zNzItMS4yMzYgMS44MjgtLjM5LjM0NS0uOTA3LjYwMy0xLjU1Ljc3NS0uNDgyLjEyNy0xLjEyLjE3LTEuOTEzLjEzbC00LjAzOC0uMjA2LjUzOC0xMC42NzV6IiBmaWxsPSIjMzA5ZTNhIi8+ICAgICAgPHBhdGggZD0iTTIwOC4yMTMgMjE2LjExbC0uMzU2IDcuMDcyIDEuNjAzLjA4Yy42LjAzMyAxLjAzNC4wMiAxLjMwMy0uMDM0LjM1Mi0uMDcuNjQ4LS4yMDQuODg2LS40LjI0Mi0uMTk4LjQ0Ny0uNTMuNjE1LTEgLjE3LS40Ny4yNzYtMS4xMi4zMTgtMS45NDVzMC0xLjQ2NC0uMTIyLTEuOTEzYy0uMTIyLS40NS0uMzA4LS44MDMtLjU1Ny0xLjA2NWEyLjA0MyAyLjA0MyAwIDAgMC0uOTY3LS41NTJjLS4yOTctLjA4NC0uODgzLS4xNDgtMS43NTgtLjE5MmwtLjk2NS0uMDV6IiBmaWxsPSIjZmZmIi8+ICAgIDwvZz4gICAgPGcgc3Ryb2tlLW9wYWNpdHk9Ii41MDIiPiAgICAgIDxwYXRoIGQ9Ik0yNTguNDc4IDIzMy4yOTNsMi40ODYtMTAuMzkzIDMuMzU1LjgxYzEuMjcuMzA1IDIuMDg2LjU1NyAyLjQ0Ny43NTUuNTU2LjI5OC45Ny43NTggMS4yNDYgMS4zOC4yNzUuNjE1LjMxMyAxLjMzNy4xMTYgMi4xNjQtLjE1My42MzctLjM5NiAxLjE0Ni0uNzMyIDEuNTI1LS4zMzMuMzgtLjcxLjY1LTEuMTI4LjgxNmEzLjA4IDMuMDggMCAwIDEtMS4xOTguMjNjLS41MjItLjAyMi0xLjI1Ny0uMTQ3LTIuMjAzLS4zNzVsLTEuMzYzLS4zMy0uOTM4IDMuOTIyLTIuMDkyLS41MDR6IiBmaWxsPSIjMzA5ZTNhIi8+ICAgICAgPHBhdGggZD0iTTI2Mi42NCAyMjUuMTZsLS43MDcgMi45NSAxLjE0NC4yNzVjLjgyNS4xOTggMS4zODguMjc3IDEuNjkuMjM0LjMwNi0uMDQzLjU2Mi0uMTYuNzczLS4zNTQuMjE1LS4xOTMuMzYtLjQ0My40MzMtLjc1LjA5LS4zOC4wNTUtLjcxNy0uMTA3LTEuMDE2LS4xNjQtLjMtLjQwNy0uNTItLjczLS42NjMtLjI0LS4xMDgtLjczNC0uMjUyLTEuNDg3LS40MzRsLTEuMDEtLjI0NHoiIGZpbGw9IiNmZmYiLz4gICAgPC9nPiAgICA8ZyBzdHJva2Utb3BhY2l0eT0iLjUwMiI+ICAgICAgPHBhdGggZD0iTTI2OC4zNzMgMjM2LjI1N2wzLjUzOC0xMC4wOCA0LjI3IDEuNTFjMS4wNzIuMzggMS44Mi43NDYgMi4yMzggMS4xLjQyNi4zNTMuNzAzLjgxLjgzMyAxLjM3OHMuMDkgMS4xNDgtLjEyIDEuNzQzYy0uMjY0Ljc1Ny0uNzA1IDEuMzAzLTEuMzIyIDEuNjQyLS42MTUuMzM0LTEuMzg2LjQxLTIuMzEyLjIyNi4zNDguNDEyLjYxLjgyLjc4NSAxLjIyOC4xODIuNDEuMzc1IDEuMDkyLjU4NSAyLjA0NmwuNTM2IDIuNC0yLjQyNC0uODU3LS42OTUtMi43MTJjLS4yNDUtLjk2Ny0uNDI4LTEuNTg1LS41NS0xLjg1NmExLjYyMyAxLjYyMyAwIDAgMC0uNDYyLS42MzVjLS4xODctLjE1NS0uNTEzLS4zMTMtLjk4LS40OGwtLjQxLS4xNDQtMS40NzcgNC4yMS0yLjAyNy0uNzJ6IiBmaWxsPSIjMzA5ZTNhIi8+ICAgICAgPHBhdGggZD0iTTI3Mi40MzggMjMxLjE2M2wxLjUuNTNjLjk3My4zNDQgMS41OTMuNTE4IDEuODY0LjUyLjI3LjAwMy41MS0uMDcuNzItLjIyNS4yMDctLjE1Mi4zNjMtLjM4LjQ3LS42ODMuMTE4LS4zNC4xMjMtLjY0NS4wMTMtLjkxNS0uMTA0LS4yNzQtLjMxLS40OTYtLjYyLS42NjgtLjE1Ny0uMDgtLjY0Ni0uMjY3LTEuNDY4LS41NTdsLTEuNTgyLS41Ni0uODk3IDIuNTU4eiIgZmlsbD0iI2ZmZiIvPiAgICA8L2c+ICAgIDxnIHN0cm9rZS1vcGFjaXR5PSIuNTAyIj4gICAgICA8cGF0aCBkPSJNMjgwLjg4IDIzNS44N2MuMzIzLTEuMDQuNzUtMS44NjMgMS4yNzYtMi40Ny4zOTQtLjQ1Ljg1LS44MTcgMS4zNzgtMS4xMDVhNC4xNjYgNC4xNjYgMCAwIDEgMS42MDItLjUwN2MuNzE4LS4wNzIgMS40OS4wMjIgMi4zMTcuMjggMS40OTguNDcgMi41NSAxLjMxIDMuMTU3IDIuNTI0LjYxMiAxLjIxNC42NiAyLjY1My4xNDQgNC4zMTQtLjUxIDEuNjQ4LTEuMzU4IDIuNzk4LTIuNTQgMy40NTItMS4xOC42NS0yLjUxNi43NC00LjAxLjI3Mi0xLjUxLS40NzItMi41Ny0xLjMxLTMuMTc0LTIuNTEyLS42MDUtMS4yMDgtLjY1NC0yLjYyMy0uMTUtNC4yNDd6IiBmaWxsPSIjMzA5ZTNhIi8+ICAgICAgPHBhdGggZD0iTTI4My4wMjcgMjM2LjQ3Yy0uMzYgMS4xNTQtLjM2NiAyLjExNC0uMDIgMi44OC4zNDguNzYuOTMgMS4yNjcgMS43NSAxLjUyNC44MTcuMjU1IDEuNTc4LjE3IDIuMjgzLS4yNTYuNzEyLS40MjggMS4yNTItMS4yMzUgMS42Mi0yLjQxOC4zNjItMS4xNy4zNzYtMi4xMjIuMDQtMi44Ni0uMzI4LS43MzMtLjkxNy0xLjIzMy0xLjc2Mi0xLjQ5Ny0uODQ2LS4yNjUtMS42MTgtLjE4Ni0yLjMxNy4yMzctLjY5Ny40MTgtMS4yMjggMS4yMTQtMS41OTMgMi4zOXoiIGZpbGw9IiNmZmYiLz4gICAgPC9nPiAgICA8ZyBzdHJva2Utb3BhY2l0eT0iLjUwMiI+ICAgICAgPHBhdGggZD0iTTMwMS42OTIgMjUwLjc1NGw0Ljg5LTkuNDk0IDQuMDIgMi4wODdjMS4wMS41MjYgMS43Ljk5MiAyLjA2NyAxLjQwMi4zNy40MDYuNTg0LjkuNjM0IDEuNDhzLS4wNyAxLjE0Ny0uMzU4IDEuNzFjLS4zNjcuNzEtLjg4IDEuMTkyLTEuNTM4IDEuNDQtLjY1NS4yNDctMS40MjcuMjE0LTIuMzItLjA5Ni4yODguNDU2LjQ5LjkuNjEgMS4zMjYuMTIuNDMuMjIgMS4xMzIuMjk1IDIuMTA3bC4yIDIuNDUtMi4yODMtMS4xODQtLjMxNi0yLjc4MmMtLjExLS45OTMtLjIwNi0xLjYzLS4yOS0xLjkxNGExLjYxMSAxLjYxMSAwIDAgMC0uMzctLjY5NGMtLjE2My0uMTc4LS40NjYtLjM4LS45MDQtLjYxbC0uMzg3LS4yLTIuMDQgMy45NjMtMS45MS0uOTl6IiBmaWxsPSIjMzA5ZTNhIi8+ICAgICAgPHBhdGggZD0iTTMwNi40MTggMjQ2LjI2bDEuNDEyLjczM2MuOTE2LjQ3NyAxLjUwOC43MzQgMS43NzYuNzc1LjI2Ny4wNC41MTYgMCAuNzQzLS4xMjMuMjI2LS4xMjMuNDEtLjMyNy41Ni0uNjEzLjE2NC0uMzIuMjEtLjYyLjEzOC0uOTAzLS4wNjUtLjI4Ny0uMjQtLjUzNy0uNTIyLS43NS0uMTQ0LS4xLS42MDMtLjM1My0xLjM3OC0uNzU1bC0xLjQ4OC0uNzc0LTEuMjQyIDIuNDF6IiBmaWxsPSIjZmZmIi8+ICAgIDwvZz4gICAgPGcgc3Ryb2tlLW9wYWNpdHk9Ii41MDIiPiAgICAgIDxwYXRoIGQ9Ik0zNDEuMTkgMjcwLjI2Yy42MDctLjkgMS4yNS0xLjU2NyAxLjkzMy0xLjk5NmE1LjAyNyA1LjAyNyAwIDAgMSAxLjYzNi0uNjU4IDQuMTcgNC4xNyAwIDAgMSAxLjY3OC0uMDJjLjcwOC4xNCAxLjQyLjQ1MyAyLjEzOC45NCAxLjMuODgzIDIuMDY1IDEuOTkzIDIuMjk4IDMuMzMuMjM3IDEuMzQtLjEzIDIuNzMtMS4xMDMgNC4xNzItLjk2MiAxLjQyOC0yLjEwMiAyLjI4Ni0zLjQyIDIuNTctMS4zMTguMjc4LTIuNjIzLS4wMjItMy45Mi0uOS0xLjMxLS44OTItMi4wODMtMi0yLjMxNy0zLjMyNy0uMjMyLTEuMzMuMTI3LTIuNyAxLjA3Ny00LjExeiIgZmlsbD0iIzMwOWUzYSIvPiAgICAgIDxwYXRoIGQ9Ik0zNDMuMDczIDI3MS40NDNjLS42NzUgMS4wMDMtLjk1OCAxLjkyLS44NDcgMi43NTIuMTE1LjgzLjUyNiAxLjQ4MyAxLjIzNSAxLjk2Ni43MTIuNDgzIDEuNDY1LjYyMiAyLjI2My40Mi44MDUtLjIwNiAxLjU1My0uODIgMi4yNDUtMS44NDguNjgzLTEuMDE0Ljk3LTEuOTIzLjg2LTIuNzI0LS4xMDQtLjgtLjUyMy0xLjQ0Ny0xLjI1Ny0xLjk0NnMtMS40OTUtLjY0Ny0yLjI4NS0uNDQ0Yy0uNzkuMTk4LTEuNTI1LjgwNy0yLjIxMiAxLjgyNXoiIGZpbGw9IiNmZmYiLz4gICAgPC9nPiAgICA8cGF0aCBkPSJNMjQ2LjQyNyAyMjguOTVsMS43MTQtNy41MDQgNS41NDMgMS4yNzgtLjI4OCAxLjI2Ny00LjAzMi0uOTI3LS4zODQgMS42NjMgMy43NTQuODY2LS4yOSAxLjI2Mi0zLjc1LS44NjMtLjQ3IDIuMDQyIDQuMTc2Ljk2Mi0uMjg4IDEuMjY1LTUuNjg1LTEuMzF6IiBmaWxsPSIjMzA5ZTNhIi8+ICA8L2c+PC9zdmc+); }\n  .flag.ru {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB3aWR0aD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+ICA8ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS13aWR0aD0iMXB0Ij4gICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGg1MTIuMDA1djUxMkgweiIvPiAgICA8cGF0aCBmaWxsPSIjMDAzOWE2IiBkPSJNMCAxNzAuNjY3aDUxMi4wMDVWNTEySDB6Ii8+ICAgIDxwYXRoIGZpbGw9IiNkNTJiMWUiIGQ9Ik0wIDM0MS4zMzNoNTEyLjAwNVY1MTJIMHoiLz4gIDwvZz48L3N2Zz4=); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// imports


// module
exports.push([module.i, "md-input-container {\n  width: 100%; }\n  md-input-container.income {\n    width: 50%;\n    font-size: 30px;\n    margin-top: 20px;\n    margin-left: 20px; }\n  md-input-container .mat-hint {\n    font-size: 60%; }\n\nmd-sidenav-container {\n  height: 650px;\n  margin: 5px 1vw; }\n  md-sidenav-container .mat-fab {\n    position: fixed;\n    left: 20px;\n    top: 10px;\n    z-index: 2;\n    -webkit-transform: translateZ(0);\n            transform: translateZ(0); }\n  md-sidenav-container .sidenav-result {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 20px;\n    -webkit-box-align: right;\n        -ms-flex-align: right;\n            align-items: right;\n    -webkit-box-pack: right;\n        -ms-flex-pack: right;\n            justify-content: right;\n    float: right;\n    text-align: right; }\n    md-sidenav-container .sidenav-result .result {\n      font-weight: bold;\n      color: grey; }\n      md-sidenav-container .sidenav-result .result .value {\n        color: black; }\n      md-sidenav-container .sidenav-result .result .positive {\n        color: #3366ff; }\n      md-sidenav-container .sidenav-result .result .negative {\n        color: #FF3366; }\n  md-sidenav-container .mat-sidenav {\n    max-width: 70vw; }\n    md-sidenav-container .mat-sidenav .mat-radio-group {\n      margin-left: 10px; }\n    md-sidenav-container .mat-sidenav .mat-radio-button {\n      margin: 10px;\n      display: block; }\n    md-sidenav-container .mat-sidenav .options {\n      font-size: 12px !important; }\n    md-sidenav-container .mat-sidenav .label {\n      height: 40px; }\n    md-sidenav-container .mat-sidenav .collapsible-item {\n      overflow: hidden; }\n      md-sidenav-container .mat-sidenav .collapsible-item .collapsible-heading {\n        cursor: pointer;\n        position: relative;\n        z-index: 100000000;\n        background: rgba(245, 245, 245, 0.9);\n        min-height: initial;\n        height: 40px;\n        margin: 4px 0; }\n        md-sidenav-container .mat-sidenav .collapsible-item .collapsible-heading:focus {\n          outline: none;\n          border: 0; }\n        md-sidenav-container .mat-sidenav .collapsible-item .collapsible-heading label {\n          cursor: pointer;\n          font-size: 16px;\n          margin: 0px; }\n        md-sidenav-container .mat-sidenav .collapsible-item .collapsible-heading.collapsed label {\n          font-weight: normal; }\n        md-sidenav-container .mat-sidenav .collapsible-item .collapsible-heading.expanded label {\n          font-weight: bold; }\n      md-sidenav-container .mat-sidenav .collapsible-item .slide-down {\n        height: 100%;\n        overflow: hidden;\n        position: relative;\n        display: block !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// imports


// module
exports.push([module.i, ".disclaimer {\n  font-size: 70%; }\n\nmd-card {\n  margin: 20px 1vw; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 212:
/***/ (function(module, exports) {

module.exports = "<md-toolbar class=\"toolbar\">\n  <div fxLayout=\"row\" fxFill fxLayoutAlign=\" center\">\n    <div fxFlex=\"none\" fxHide=\"false\" fxHide.gt-sm>\n      <button md-icon-button [mdMenuTriggerFor]=\"menu\">\n        <md-icon>more_vert</md-icon>\n      </button>\n      <md-menu #menu=\"mdMenu\">\n        <a md-menu-item href=\"https://github.com/eduardomourar/dutch-tax-income-calculator2\" mdTooltip=\"{{'GITHUB'|translate}}\" mdTooltipPosition=\"right\">\n          <md-icon class=\"github\"></md-icon>\n        </a>\n        <md-divider></md-divider>\n        <label class=\"language mat-tab-label\">{{'LANGUAGE'|translate}}</label>\n        <button md-menu-item *ngFor=\"let lang of translate.getLangs()\" (click)=\"translate.use(lang)\">\n          <md-icon class=\"flag {{lang}}\"></md-icon>\n          <span>{{lang}}</span>\n        </button>\n      </md-menu>\n    </div>\n    <div fxFlex=\"none\" class=\"title\">\n      {{'TITLE'|translate}}\n      <div fxFlex=\"none\" fxShow=\"false\" fxShow.gt-sm class=\"motto\">&nbsp;{{'MOTTO'|translate}} {{year - 2}}, {{year - 1}} {{'AND'|translate}} {{year}}</div>\n    </div>\n    <div fxFlex></div>\n    <div fxFlex=\"none\" fxShow=\"false\" fxShow.gt-sm>\n      <md-select placeholder=\"{{'LANGUAGE'|translate}}\" (change)=\"translate.use(selectedLang)\" [(ngModel)]=\"selectedLang\">\n        <md-option class=\"flags\" *ngFor=\"let lang of translate.getLangs()\" [value]=\"lang\">\n          <md-icon class=\"flag {{lang}}\"></md-icon>\n          {{lang}}\n        </md-option>\n      </md-select>\n      &nbsp;&nbsp;&nbsp;&nbsp;\n      <a class=\"github\" href=\"https://github.com/eduardomourar/dutch-tax-income-calculator2\">\n        <md-icon mdTooltip=\"{{'GITHUB'|translate}}\" mdTooltipPosition=\"left\"></md-icon>\n      </a>\n    </div>\n  </div>\n</md-toolbar>\n<app-content></app-content>\n<app-ruling></app-ruling>\n"

/***/ }),

/***/ 213:
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <md-tab-group [(selectedIndex)]=\"selectedTab\" (selectChange)=\"changeOption(true, choices[selectedTab])\">\n    <md-tab *ngFor=\"let choice of choices\">\n      <ng-template md-tab-label>\n        <label mdTooltip=\"{{rename(choice)+'_TITLE'|translate}}\" style=\"cursor: pointer;\">{{rename(choice)|translate}}</label>\n      </ng-template>\n      <md-input-container class=\"income\">\n        <span md-prefix>€&nbsp;</span>\n        <input mdInput type=\"number\" min=\"1\" autofocus required placeholder=\"{{'SALARY'|translate}}\"\n          [(ngModel)]=\"options.income\" (input)=\"changeOption(false, choice)\" align=\"end\">\n        <md-hint align=\"end\">{{rename(choice)+'_TITLE'|translate}}</md-hint>\n      </md-input-container>\n    </md-tab>\n  </md-tab-group>\n  <md-sidenav-container>\n    <button md-fab mdTooltip=\"{{'OPTIONS'|translate}}\" (click)=\"sidenav.open(); changeOption()\">\n      <md-icon>add</md-icon>\n    </button>\n    <div class=\"sidenav-result\">\n      <md-list class=\"result\" *ngIf=\"output\">\n        <md-list-item [ngClass]=\"{'hide': !options.output[key]}\" *ngFor=\"let key of getKeys(output)\">\n          <label md-line *ngIf=\"key == 'taxFree'\" [ngClass]=\"{'value': true, 'positive': output[key] > 0}\">\n            {{output[key] | number:0}}%\n          </label>\n          <label md-line *ngIf=\"key != 'taxFree'\"\n              [ngClass]=\"{'value': true, 'positive': getPositive(output[key], key), 'negative': output[key] < 0}\">\n            {{output[key] | euro:key}}\n          </label>\n          <p md-line><span>{{'OUTPUT.'+rename(key)|translate}}</span></p>\n        </md-list-item>\n      </md-list>\n    </div>\n    <md-sidenav #sidenav align=\"start\">\n      <md-list>\n        <md-list-item class=\"label\">\n          <label md-line>{{'YEAR'|translate}}:</label>\n        </md-list-item>\n        <md-list-item class=\"item-fill-height\">\n          <md-radio-group [(ngModel)]=\"options.year\" (change)=\"changeOption()\">\n            <md-radio-button value=\"{{year}}\" *ngFor=\"let year of years\">{{year}}</md-radio-button>\n          </md-radio-group>\n        </md-list-item>\n        <md-list-item>\n          <md-checkbox md-line [(ngModel)]=\"options.allowance\" (change)=\"changeOption()\"\n              aria-label=\"{{'ALLOWANCE_TITLE'|translate}}\" title=\"{{'ALLOWANCE_TITLE'|translate}}\">\n            {{'ALLOWANCE'|translate}}\n          </md-checkbox>\n        </md-list-item>\n        <md-list-item>\n          <md-checkbox md-line [(ngModel)]=\"options.social\" (change)=\"changeOption()\"\n              aria-label=\"{{'SOCIAL_TITLE'|translate}}\" title=\"{{'SOCIAL_TITLE'|translate}}\">\n            {{'SOCIAL'|translate}}\n          </md-checkbox>\n        </md-list-item>\n        <md-list-item>\n          <md-checkbox md-line [(ngModel)]=\"options.older\" (change)=\"changeOption()\"\n              aria-label=\"{{'OLDER_TITLE'|translate}}\" title=\"{{'OLDER_TITLE'|translate}}\">\n            {{'OLDER'|translate}}\n          </md-checkbox>\n        </md-list-item>\n        <md-list-item>\n          <md-checkbox md-line [(ngModel)]=\"ruling\" (change)=\"changeOption(true)\"\n              aria-label=\"{{'RULING_TITLE'|translate}}\" title=\"{{'RULING_TITLE'|translate}}\">\n            {{'RULING'|translate}}\n          </md-checkbox>\n        </md-list-item>\n        <md-list-item class=\"item-fill-height\">\n          <md-radio-group [(ngModel)]=\"options.ruling\" [disabled]=\"!ruling\" (change)=\"changeOption()\">\n            <md-radio-button value=\"research\" aria-label=\"{{'RESEARCH_TITLE'|translate}}\" title=\"{{'RESEARCH_TITLE'|translate}}\">\n              {{'RESEARCH'|translate}}\n            </md-radio-button>\n            <md-radio-button value=\"young\" aria-label=\"{{'YOUNG_TITLE'|translate}}\" title=\"{{'YOUNG_TITLE'|translate}}\">\n              {{'YOUNG'|translate}}\n            </md-radio-button>\n            <md-radio-button value=\"normal\" aria-label=\"{{'NORMAL_TITLE'|translate}}\" title=\"{{'NORMAL_TITLE'|translate}}\">\n              {{'NORMAL'|translate}}\n            </md-radio-button>\n          </md-radio-group>\n        </md-list-item>\n      </md-list>\n      <div class=\"collapsible-item\">\n        <md-toolbar class=\"collapsible-heading\" (click)=\"show = !show\"\n            [ngClass]=\"{'collapsed': !show, 'expanded': show}\">\n          <button md-icon-button type=\"button\" aria-hidden=\"false\" title=\"{{'EXPAND'|translate}}\">\n            <md-icon *ngIf=\"!show\">expand_more</md-icon>\n            <md-icon *ngIf=\"show\">expand_less</md-icon>\n          </button>\n          <label>{{'ADVANCED'|translate}}</label>\n        </md-toolbar>\n        <div class=\"slide-down\" [@slideDown]=\"show ? 'void' : 'up'\">\n          <md-list class=\"collapsible-content\">\n            <md-list-item>\n              <md-input-container md-line>\n                <input mdInput type=\"number\" min=\"1\" max=\"100\" placeholder=\"{{'HOURS'|translate}}\"\n                  [(ngModel)]=\"options.hours\" (input)=\"changeOption()\" align=\"end\">\n              </md-input-container>\n            </md-list-item>\n            <md-list-item class=\"label\">\n              <label md-line>{{'DISPLAY'|translate}}:</label>\n            </md-list-item>\n            <md-list-item *ngFor=\"let key of getKeys(options.output)\">\n              <md-checkbox md-line class=\"options\" [(ngModel)]=\"options.output[key]\" (change)=\"changeOption()\">\n                {{'OUTPUT.'+rename(key)|translate}}\n              </md-checkbox>\n            </md-list-item>\n          </md-list>\n        </div>\n      </div>\n    </md-sidenav>\n  </md-sidenav-container>\n<div>"

/***/ }),

/***/ 214:
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-title>{{'DISCLAIMER'|translate}}</md-card-title>\n  <md-card-content class=\"disclaimer\">\n    <p>{{'DISCLAIMER_DESC'|translate}}</p>\n  </md-card-content>\n</md-card>\n\n<md-card>\n  <md-card-title>{{'RULING'|translate}}</md-card-title>\n  <md-card-content>\n    <p>{{'RULING_DESC'|translate}}{{year}}:<br></p>\n    <ul>\n      <li>{{'RESEARCH_DESC'|translate}}</li>\n      <li>{{'YOUNG_DESC'|translate}}\n        <b>{{ruling[year].young | currency:'EUR':true:'1.0-0'}}</b> ({{year - 1}}: {{ruling[year - 1].young | currency:'EUR':true:'1.0-0'}}).\n      </li>\n      <li>{{'NORMAL_DESC'|translate}}\n        <b>{{ruling[year].normal | currency:'EUR':true:'1.0-0'}}</b> ({{year - 1}}: {{ruling[year - 1].normal | currency:'EUR':true:'1.0-0'}}).\n      </li>\n    </ul>\n  </md-card-content>\n</md-card>\n"

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(124);


/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONSTANTS; });

var CONSTANTS = {
    "years": [
        2017,
        2016,
        2015
    ],
    "workingWeeks": 52,
    "workingDays": 260,
    "default": {
        "input": {
            "grossYear": 36000.00,
            "grossMonth": 3000.00,
            "grossWeek": 692.31,
            "grossDay": 138.46,
            "grossHour": 17.31,
            "netMonth": 2228.57
        },
        "options": {
            "type": "grossYear",
            "income": 36000,
            "year": 2015,
            "allowance": false,
            "social": true,
            "older": false,
            "ruling": "",
            "hours": 40,
            "truncate": true,
            "output": {
                "grossAllowance": false,
                "grossYear": false,
                "grossMonth": false,
                "grossWeek": false,
                "grossDay": false,
                "grossHour": false,
                "taxFreeYear": false,
                "taxFree": false,
                "taxableYear": true,
                "payrollTax": true,
                "socialTax": true,
                "generalCredit": true,
                "labourCredit": true,
                "incomeTax": true,
                "netAllowance": false,
                "netYear": true,
                "netMonth": true,
                "netWeek": false,
                "netDay": false,
                "netHour": false
            }
        },
        "output": {
            "grossAllowance": 0,
            "grossYear": 0,
            "grossMonth": 0,
            "grossWeek": 0,
            "grossDay": 0,
            "grossHour": 0,
            "taxFreeYear": 0,
            "taxFree": 0,
            "taxableYear": 0,
            "payrollTax": 0,
            "socialTax": 0,
            "generalCredit": 0,
            "labourCredit": 0,
            "incomeTax": 0,
            "netAllowance": 0,
            "netYear": 0,
            "netMonth": 0,
            "netWeek": 0,
            "netDay": 0,
            "netHour": 0
        }
    },
    "rulingThreshold": {
        "2017": {
            "normal": 37000,
            "young": 28125,
            "research": 0
        },
        "2016": {
            "normal": 36889,
            "young": 28041,
            "research": 0
        },
        "2015": {
            "normal": 36705,
            "young": 27901,
            "research": 0
        }
    },
    "payrollTax": {
        "2017": [
            {
                "bracket": 1,
                "min": 0,
                "max": 19981,
                "rate": 0.089
            },
            {
                "bracket": 2,
                "min": 19982,
                "max": 33790,
                "rate": 0.1315
            },
            {
                "bracket": 3,
                "min": 33791,
                "max": 67071,
                "rate": 0.408
            },
            {
                "bracket": 4,
                "min": 67072,
                "rate": 0.52
            }
        ],
        "2016": [
            {
                "bracket": 1,
                "min": 0,
                "max": 19922,
                "rate": 0.0840
            },
            {
                "bracket": 2,
                "min": 19923,
                "max": 33715,
                "rate": 0.1225
            },
            {
                "bracket": 3,
                "min": 33716,
                "max": 66421,
                "rate": 0.404
            },
            {
                "bracket": 4,
                "min": 66422,
                "rate": 0.52
            }
        ],
        "2015": [
            {
                "bracket": 1,
                "min": 0,
                "max": 19822,
                "rate": 0.0835
            },
            {
                "bracket": 2,
                "min": 19823,
                "max": 33589,
                "rate": 0.1385
            },
            {
                "bracket": 3,
                "min": 33590,
                "max": 57585,
                "rate": 0.42
            },
            {
                "bracket": 4,
                "min": 57586,
                "rate": 0.52
            }
        ]
    },
    "socialPercent": {
        "2017": [
            {
                "bracket": 1,
                "min": 0,
                "max": 33791,
                "rate": 0.3655,
                "social": 0.2765,
                "older": 0.0975
            }
        ],
        "2016": [
            {
                "bracket": 1,
                "min": 0,
                "max": 33716,
                "rate": 0.3655,
                "social": 0.2815,
                "older": 0.1025
            }
        ],
        "2015": [
            {
                "bracket": 1,
                "min": 0,
                "max": 33590,
                "rate": 0.3650,
                "social": 0.2815,
                "older": 0.1025
            }
        ]
    },
    "generalCredit": {
        "2017": [
            {
                "bracket": 1,
                "min": 0,
                "max": 19982,
                "rate": 2254
            },
            {
                "bracket": 2,
                "min": 19983,
                "max": 67068,
                "rate": -0.04787
            },
            {
                "bracket": 3,
                "min": 67069,
                "rate": 0
            }
        ],
        "2016": [
            {
                "bracket": 1,
                "min": 0,
                "max": 19922,
                "rate": 2242
            },
            {
                "bracket": 2,
                "min": 19923,
                "max": 66417,
                "rate": -0.04822
            },
            {
                "bracket": 3,
                "min": 66418,
                "rate": 0
            }
        ],
        "2015": [
            {
                "bracket": 1,
                "min": 0,
                "max": 19822,
                "rate": 2203
            },
            {
                "bracket": 2,
                "min": 19823,
                "max": 56935,
                "rate": -0.02320
            },
            {
                "bracket": 3,
                "min": 56936,
                "rate": 1342
            }
        ]
    },
    "labourCredit": {
        "2017": [
            {
                "bracket": 1,
                "min": 0,
                "max": 9309,
                "rate": 0.01772
            },
            {
                "bracket": 2,
                "min": 9310,
                "max": 20108,
                "rate": 0.28317
            },
            {
                "bracket": 3,
                "min": 20109,
                "max": 32444,
                "rate": 3223
            },
            {
                "bracket": 4,
                "min": 32445,
                "max": 121972,
                "rate": -0.036
            },
            {
                "bracket": 5,
                "min": 121973,
                "rate": 0
            }
        ],
        "2016": [
            {
                "bracket": 1,
                "min": 0,
                "max": 9147,
                "rate": 0.01793
            },
            {
                "bracket": 2,
                "min": 9148,
                "max": 19758,
                "rate": 0.27698
            },
            {
                "bracket": 3,
                "min": 19759,
                "max": 34015,
                "rate": 3103
            },
            {
                "bracket": 4,
                "min": 34016,
                "max": 111590,
                "rate": -0.04
            },
            {
                "bracket": 5,
                "min": 111591,
                "rate": 0
            }
        ],
        "2015": [
            {
                "bracket": 1,
                "min": 0,
                "max": 9010,
                "rate": 0.0181
            },
            {
                "bracket": 2,
                "min": 9011,
                "max": 19463,
                "rate": 0.19679
            },
            {
                "bracket": 3,
                "min": 19464,
                "max": 49770,
                "rate": 2220
            },
            {
                "bracket": 4,
                "min": 49771,
                "max": 100670,
                "rate": -0.04
            },
            {
                "bracket": 5,
                "min": 100671,
                "rate": 184
            }
        ]
    },
    "specialRate": {
        "2017": [
            {
                "bracket": 1,
                "min": 0,
                "max": 6481,
                "rate": 0,
                "older": 0
            },
            {
                "bracket": 2,
                "min": 6482,
                "max": 10053,
                "rate": 0.3478,
                "older": 0
            },
            {
                "bracket": 3,
                "min": 10054,
                "max": 18619,
                "rate": 0.0823,
                "older": 0
            },
            {
                "bracket": 4,
                "min": 18620,
                "max": 19982,
                "rate": 0.3655,
                "older": 0
            },
            {
                "bracket": 5,
                "min": 19983,
                "max": 21410,
                "rate": 0.4559,
                "older": 0
            },
            {
                "bracket": 6,
                "min": 21411,
                "max": 32444,
                "rate": 0.4559,
                "older": 0.2534
            },
            {
                "bracket": 7,
                "min": 32445,
                "max": 33791,
                "rate": 0.4919,
                "older": 0.2718
            },
            {
                "bracket": 8,
                "min": 33792,
                "max": 67072,
                "rate": 0.4919,
                "older": 0.4508
            },
            {
                "bracket": 9,
                "min": 67073,
                "max": 131729,
                "rate": 0.556,
                "older": 0.5384
            },
            {
                "bracket": 10,
                "min": 131730,
                "rate": 0.52,
                "older": 0.52
            }
        ],
        "2016": [
            {
                "bracket": 1,
                "min": 0,
                "max": 6450,
                "rate": 0,
                "older": 0
            },
            {
                "bracket": 2,
                "min": 6451,
                "max": 9878,
                "rate": 0.3476,
                "older": 0
            },
            {
                "bracket": 3,
                "min": 9879,
                "max": 18295,
                "rate": 0.0885,
                "older": 0
            },
            {
                "bracket": 4,
                "min": 18296,
                "max": 19922,
                "rate": 0.3655,
                "older": 0
            },
            {
                "bracket": 5,
                "min": 19923,
                "max": 20737,
                "rate": 0.4522,
                "older": 0
            },
            {
                "bracket": 6,
                "min": 20732,
                "max": 33715,
                "rate": 0.4522,
                "older": 0.2496
            },
            {
                "bracket": 7,
                "min": 33716,
                "max": 34015,
                "rate": 0.4522,
                "older": 0.4286
            },
            {
                "bracket": 8,
                "min": 34016,
                "max": 66421,
                "rate": 0.4922,
                "older": 0.449
            },
            {
                "bracket": 9,
                "min": 66422,
                "max": 120517,
                "rate": 0.56,
                "older": 0.5404
            },
            {
                "bracket": 10,
                "min": 120518,
                "rate": 0.52,
                "older": 0.52
            }
        ],
        "2015": [
            {
                "bracket": 1,
                "min": 0,
                "max": 6350,
                "rate": 0,
                "older": 0
            },
            {
                "bracket": 2,
                "min": 6351,
                "max": 15696,
                "rate": 0.3650,
                "older": 0
            },
            {
                "bracket": 3,
                "min": 15697,
                "max": 19822,
                "rate": 0.3650,
                "older": 0.1860
            },
            {
                "bracket": 4,
                "min": 19823,
                "max": 33589,
                "rate": 0.4432,
                "older": 0.2528
            },
            {
                "bracket": 5,
                "min": 33590,
                "max": 49770,
                "rate": 0.4432,
                "older": 0.4318
            },
            {
                "bracket": 6,
                "min": 49771,
                "max": 56935,
                "rate": 0.4832,
                "older": 0.4522
            },
            {
                "bracket": 7,
                "min": 56936,
                "max": 57585,
                "rate": 0.46,
                "older": 0.4404
            },
            {
                "bracket": 8,
                "min": 57586,
                "max": 100670,
                "rate": 0.56,
                "older": 0.5404
            },
            {
                "bracket": 9,
                "min": 100671,
                "rate": 0.52,
                "older": 0.52
            }
        ]
    }
};
//# sourceMappingURL=calculate.const.js.map

/***/ })

},[269]);
//# sourceMappingURL=main.bundle.js.map