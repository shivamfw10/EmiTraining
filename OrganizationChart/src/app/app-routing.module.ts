import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CeoComponent } from './component/ceo/ceo.component';
import { EngineerinManagerComponent } from './component/engineerin-manager/engineerin-manager.component';
import { EngineeringDirectorComponent } from './component/engineering-director/engineering-director.component';
import { FinanceManagerComponent } from './component/finance-manager/finance-manager.component';
import { HeadOfSEComponent } from './component/head-of-se/head-of-se.component';
import { HomeComponent } from './component/home/home.component';
import { HrManagerComponent } from './component/hr-manager/hr-manager.component';
import { Level1Component } from './component/level1/level1.component';
import { Level2Component } from './component/level2/level2.component';
import { OrganizationComponent } from './component/organization/organization.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { VaTechnicalLead1Component } from './component/va-technical-lead1/va-technical-lead1.component';
import { VaTechnicalLead2Component } from './component/va-technical-lead2/va-technical-lead2.component';
import { VaTechnicalLead3Component } from './component/va-technical-lead3/va-technical-lead3.component';
import { VaTechnicalLead4Component } from './component/va-technical-lead4/va-technical-lead4.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'chart',component:OrganizationComponent,children:[
    {path:'ceo',component:CeoComponent,children:[
      {path:'engdirector',component:EngineeringDirectorComponent,children:[
        {path:'level1',component:Level1Component,children:[
          {path:'vatl1',component:Level2Component,children:[
            {path:'level2',component:Level2Component,children:[
              {path:'vatl1',component:VaTechnicalLead1Component},
              {path:'vatl2',component:VaTechnicalLead2Component},
              {path:'vatl3',component:VaTechnicalLead3Component},
              {path:'vatl4',component:VaTechnicalLead4Component}
            ]}
          ]},
          {path:'headofse',component:HeadOfSEComponent},
          {path:'financemng',component:FinanceManagerComponent},
          {path:'hrmanager',component:HrManagerComponent}
        ]},
      ]}
    ]}
  ]},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
