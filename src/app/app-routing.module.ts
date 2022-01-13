import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalenderComponent } from './calender/calender.component';
import { CronaComponent } from './crona/crona.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
const routes: Routes = [
  {path:"", component:DashboardComponent},
  {path: "calender" ,component:CalenderComponent},
  {path:"forms" , component:FormsComponent},
  {path:"crona", component:CronaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
