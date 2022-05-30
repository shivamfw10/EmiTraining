import { RouterModule, Routes } from '@angular/router';

import { CeoComponent } from './component/ceo/ceo.component';
import { EngineeringDirectorComponent } from './component/engineering-director/engineering-director.component';
import { HomeComponent } from './component/home/home.component';
import { Level1Component } from './component/level1/level1.component';
import { Level2Component } from './component/level2/level2.component';
import { Level3Component } from './component/level3/level3.component';
import { NgModule } from '@angular/core';
import { OrganizationComponent } from './component/organization/organization.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'chart',component:OrganizationComponent,children:[
    {path:'ceo',component:CeoComponent,children:[
      {path:'engdirector',component:EngineeringDirectorComponent,children:[
        {path:'level1',component:Level1Component,children:[
          {path:'level2',component:Level2Component,children:[
            {path:'level3',component:Level3Component}
          ]}
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
