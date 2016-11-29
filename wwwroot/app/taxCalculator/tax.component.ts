import { Component } from '@angular/core';
import {FormControl, FormBuilder,Validators, FormGroup, FormGroupName, FormGroupDirective} from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'tax-app',
  templateUrl:'taxCalculator.html'
})
export class TaxComponent { 
  public hiddenincome:boolean;
public BaseIncome:any;
public TaxOnIncome:any;
public MarginalTaxRate:any;
public disableScroll:boolean;
   public myForm: FormGroup;
 
   constructor(public _fb: FormBuilder) {};
 
   ngOnInit(): void {
     this.hiddenincome=false;
     this.MarginalTaxRate=3;
   this.myForm = this._fb.group({
     Age:['',Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(2),Validators.pattern('[0-9]+')])],
     TotalIncome:['',Validators.required],
     TotalExpense:['',Validators.required],
     residentofAustralia:[true],
             SalaryIncome: ['',Validators.pattern('[0-9]+')],
             RentalIncome: [''],
             InvestmentIncome: [''],
             OtherIncome: [''],
            InvestmentExpense: [''],
             DepreciationExpense: [''],
             TaxDiductibleExpense: [''],
             OtherExpense: [''],
             WorkRelExpense:['']
            
        });
  }

calculateExpense():void{
debugger;

var val=this.myForm.value;
this.myForm.value.TotalExpense= parseFloat(this.getnumber(val.InvestmentExpense))+parseFloat(this.getnumber(val.DepreciationExpense))+parseFloat(this.getnumber(val.TaxDiductibleExpense))+parseFloat(this.getnumber(val.OtherExpense))+parseFloat(this.getnumber(val.WorkRelExpense));
};
calculateIncome():void{
debugger;

var val=this.myForm.value;
this.myForm.value.TotalIncome= parseFloat(this.getnumber(val.SalaryIncome))+parseFloat(this.getnumber(val.RentalIncome))+parseFloat(this.getnumber(val.InvestmentIncome))+parseFloat(this.getnumber(val.OtherIncome));
this.disableScroll = false;
};
  doLogin(): void {
   debugger;
    console.log(this.myForm);
          
  }
  emptyIncome():void
  {
    debugger;
    this.myForm.controls['TotalIncome'].setValue('');
  this.myForm.value.TotalIncome='';
  this.disableScroll = true;
  }
  emptyExpense():void
  {
   this.myForm.controls['TotalExpense'].setValue('');
   this.myForm.value.TotalExpense='';
  }
  setScroll(): boolean {
    return this.disableScroll;
  }
  getnumber(num:any):any
  {
   if(num=="" ||  isNaN(num)==true)
   {
     return 0;
   }
   else {return num};

  }
enableScroll(){
  this.disableScroll= false;
} 
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

setPosition(){
  let obj = document.getElementById('test');
 let body = document.body.getBoundingClientRect();
  let topSide = obj.getBoundingClientRect();
 console.log(topSide.top, topSide.right, topSide.bottom, topSide.left);
   let styles = {
     'position': 'fixed',
      'left':  topSide.left + body.left,
      'top':  topSide.top + body.top
    };
    return styles;
  }
 }

