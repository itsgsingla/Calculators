import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }   from './app/app.component';
import { TaxComponent }      from './taxCalculator/tax.component';

const routes: Routes = [
  // { path: '', redirectTo: '/app', pathMatch: 'full' },
  { path: 'app',  component: AppComponent },
  { path: 'Tax', component: TaxComponent }
 
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
