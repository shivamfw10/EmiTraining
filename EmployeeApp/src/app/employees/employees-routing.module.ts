import { RouterModule, Routes } from '@angular/router';

import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path:'',redirectTo:'employee',pathMatch:'full'},
  {path:'employee',component:EmployeeComponent,children:[
    {path:'edit',component:EditEmployeeComponent},
    {path:'add',component:AddEmployeeComponent},
    {path:'detail',component:EmployeeDetailComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
