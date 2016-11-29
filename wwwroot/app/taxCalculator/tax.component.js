"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var TaxComponent = (function () {
    function TaxComponent(_fb) {
        this._fb = _fb;
    }
    ;
    TaxComponent.prototype.ngOnInit = function () {
        this.hiddenincome = false;
        this.MarginalTaxRate = 3;
        this.myForm = this._fb.group({
            Age: [0, forms_1.Validators.required],
            TotalIncome: ['', forms_1.Validators.required],
            TotalExpense: [''],
            residentofAustralia: [true],
            SalaryIncome: ['', forms_1.Validators.pattern('[0-9]+')],
            RentalIncome: [''],
            InvestmentIncome: [''],
            OtherIncome: [''],
            InvestmentExpense: [''],
            DepreciationExpense: [''],
            TaxDiductibleExpense: [''],
            OtherExpense: [''],
            WorkRelExpense: ['']
        });
    };
    TaxComponent.prototype.calculateExpense = function () {
        debugger;
        var val = this.myForm.value;
        this.myForm.value.TotalExpense = parseFloat(this.getnumber(val.InvestmentExpense)) + parseFloat(this.getnumber(val.DepreciationExpense)) + parseFloat(this.getnumber(val.TaxDiductibleExpense)) + parseFloat(this.getnumber(val.OtherExpense)) + parseFloat(this.getnumber(val.WorkRelExpense));
    };
    ;
    TaxComponent.prototype.calculateIncome = function () {
        debugger;
        var val = this.myForm.value;
        this.myForm.value.TotalIncome = parseFloat(this.getnumber(val.SalaryIncome)) + parseFloat(this.getnumber(val.RentalIncome)) + parseFloat(this.getnumber(val.InvestmentIncome)) + parseFloat(this.getnumber(val.OtherIncome));
        this.disableScroll = false;
    };
    ;
    TaxComponent.prototype.doLogin = function () {
        debugger;
        console.log(this.myForm);
    };
    TaxComponent.prototype.emptyIncome = function () {
        debugger;
        this.myForm.controls['TotalIncome'].setValue('');
        this.myForm.value.TotalIncome = '';
        this.disableScroll = true;
    };
    TaxComponent.prototype.emptyExpense = function () {
        this.myForm.controls['TotalExpense'].setValue('');
        this.myForm.value.TotalExpense = '';
    };
    TaxComponent.prototype.setScroll = function () {
        return this.disableScroll;
    };
    TaxComponent.prototype.getnumber = function (num) {
        if (num == "" || isNaN(num) == true) {
            return 0;
        }
        else {
            return num;
        }
        ;
    };
    TaxComponent.prototype.enableScroll = function () {
        this.disableScroll = false;
    };
    // FilterInput(event){
    //   debugger;
    //         var keyCode = ('which' in event) ? event.which : event.keyCode;
    //        let isNumeric = (keyCode >= 48 /* KeyboardEvent.DOM_VK_0 */ && keyCode <= 57 /* KeyboardEvent.DOM_VK_9 */) ||
    //                     (keyCode >= 96 /* KeyboardEvent.DOM_VK_NUMPAD0 */ && keyCode <= 105 /* KeyboardEvent.DOM_VK_NUMPAD9 */);
    //         let modifiers = (event.altKey || event.ctrlKey || event.shiftKey);
    //         if(!isNumeric || modifiers){
    //           this.myForm.value.SalaryIncome = event.replace(/[!$%^&*()+|~=`{}\[\]:";#@'<>?,.\/\\]/gi, '');
    //         };
    //     }
    TaxComponent.prototype.setPosition = function () {
        var obj = document.getElementById('test');
        var body = document.body.getBoundingClientRect();
        var topSide = obj.getBoundingClientRect();
        console.log(topSide.top, topSide.right, topSide.bottom, topSide.left);
        var styles = {
            'position': 'fixed',
            'left': topSide.left + body.left,
            'top': topSide.top + body.top
        };
        return styles;
    };
    TaxComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tax-app',
            templateUrl: 'taxCalculator.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], TaxComponent);
    return TaxComponent;
}());
exports.TaxComponent = TaxComponent;
//# sourceMappingURL=tax.component.js.map