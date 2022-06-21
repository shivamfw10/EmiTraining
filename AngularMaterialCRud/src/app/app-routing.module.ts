import { RouterModule, Routes } from '@angular/router';

import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './../../../EmployeeApp/src/app/employees/edit-employee/edit-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path:'list',component:EmployeeListComponent
  },

  { path:'details/:id',component:EmployeeDetailsComponent},
  {path:'add',component:AddEmployeeComponent},
  {path:'details/:id/edit/:id',component:EditEmployeeComponent},
  {path:'',redirectTo:'/list',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
