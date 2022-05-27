import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { SwitchComponent } from './switch/switch.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutUsComponent},
  {path:"switch",component:SwitchComponent},
  {path:'emp',loadChildren:()=>import('./employees/employees.module').then(m=>m.EmployeesModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
