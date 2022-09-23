import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { NavComponent } from './nav/nav.component';


const routes: Routes = [
  {path:'CurrencyConverter',component:CurrencyConverterComponent},
  {path:'About',component:AboutComponent},
  {path:'**',component:CurrencyConverterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
