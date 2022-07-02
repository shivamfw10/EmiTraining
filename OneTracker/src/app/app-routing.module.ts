import { RouterModule, Routes } from '@angular/router';

import { AddTicketComponent } from './components/ticket/add-ticket/add-ticket.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GenerateReportComponent } from './components/generate-report/generate-report.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './../../../OrganizationChart/src/app/component/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:"landingpage", component:LandingPageComponent},
  {path:"add",component:AddTicketComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:'report',component:GenerateReportComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }