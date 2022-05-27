import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { CommonModule } from '@angular/common';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    EmployeeDetailComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { 
  public constructor(){
    console.log("Employee loaded")
  }
}
