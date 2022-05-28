import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CeoComponent } from './component/ceo/ceo.component';
import { EngineerinManagerComponent } from './component/engineerin-manager/engineerin-manager.component';
import { EngineeringDirectorComponent } from './component/engineering-director/engineering-director.component';
import { FinanceManagerComponent } from './component/finance-manager/finance-manager.component';
import { HeadOfSEComponent } from './component/head-of-se/head-of-se.component';
import { HomeComponent } from './component/home/home.component';
import { HrManagerComponent } from './component/hr-manager/hr-manager.component';
import { Level1Component } from './component/level1/level1.component';
import { Level2Component } from './component/level2/level2.component';
import { NgModule } from '@angular/core';
import { OrganizationComponent } from './component/organization/organization.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { TechnicalLead1Component } from './component/technical-lead1/technical-lead1.component';
import { TechnicalLead2Component } from './component/technical-lead2/technical-lead2.component';
import { TechnicalLead3Component } from './component/technical-lead3/technical-lead3.component';
import { TechnicalLead4Component } from './component/technical-lead4/technical-lead4.component';
import { VaTechnicalLead1Component } from './component/va-technical-lead1/va-technical-lead1.component';
import { VaTechnicalLead2Component } from './component/va-technical-lead2/va-technical-lead2.component';
import { VaTechnicalLead3Component } from './component/va-technical-lead3/va-technical-lead3.component';
import { VaTechnicalLead4Component } from './component/va-technical-lead4/va-technical-lead4.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    OrganizationComponent,
    CeoComponent,
    EngineeringDirectorComponent,
    EngineerinManagerComponent,
    HeadOfSEComponent,
    FinanceManagerComponent,
    HrManagerComponent,
    TechnicalLead1Component,
    TechnicalLead2Component,
    TechnicalLead3Component,
    TechnicalLead4Component,
    Level1Component,
    Level2Component,
    VaTechnicalLead1Component,
    VaTechnicalLead2Component,
    VaTechnicalLead3Component,
    VaTechnicalLead4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
