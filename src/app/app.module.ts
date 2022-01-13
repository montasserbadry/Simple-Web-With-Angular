import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalenderComponent } from './calender/calender.component';
import { DollarPipe } from './dollar.pipe';
import { CutPipe } from './cut.pipe';
import { FormsComponent } from './forms/forms.component';
import { CronaComponent } from './crona/crona.component';
import {HttpClientModule} from '@angular/common/http';
import { CoronahomeComponent } from './coronahome/coronahome.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CalenderComponent,
    DollarPipe,
    CutPipe,
    FormsComponent,
    CronaComponent,
    CoronahomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
