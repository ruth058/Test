import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { AboutComponent } from './components/about/about.component';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';
import { NavComponent } from './components/nav/nav.component';
import { TaskBoardComponent } from './task-board/task-board.component';


const routes: Routes = [
  {path:'CurrencyConverter',component:CurrencyConverterComponent},
  {path:'About',component:AboutComponent},
  {path:'TaskBoard',component:TaskBoardComponent},
  {path:'Blogs', component:BlogsComponent},
  {path:'**',component:CurrencyConverterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
