import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddTicketComponent } from './ticket/add-ticket/add-ticket.component';
import { ViewTicketComponent } from './ticket/view-ticket/view-ticket.component';
import { EditTicketComponent } from './ticket/edit-ticket/edit-ticket.component';
import { GenerateReportComponent } from './generate-report/generate-report.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    LandingPageComponent,
    PageNotFoundComponent,
    AddTicketComponent,
    ViewTicketComponent,
    EditTicketComponent,
    GenerateReportComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
