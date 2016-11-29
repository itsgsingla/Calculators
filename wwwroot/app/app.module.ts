import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';

import { AppComponent }  from './app/app.component';
import { TaxComponent } from './taxCalculator/tax.component';
import { AppRoutingModule } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        MaterialModule.forRoot(),
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        TaxComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }