import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';
import { AboutComponent } from './components/about/about.component';
import { ConverterService } from './converter.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { TaskBoardComponent } from './task-board/task-board.component';
import { BlogsComponent } from './blogs/blogs.component';
import { DialogPostComponent } from './dialog-post/dialog-post.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogUserDetilesComponent } from './dialog-user-detiles/dialog-user-detiles.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CurrencyConverterComponent,
    AboutComponent,
    TaskBoardComponent,
    BlogsComponent,
    DialogPostComponent,
    DialogUserDetilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDialogModule
 
  ],
  providers: [ConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
