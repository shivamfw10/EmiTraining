import { RouterModule, Routes } from '@angular/router';

import { AboutusComponent } from './component/aboutus/aboutus.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { EmployeeAddComponent } from './component/employee-add/employee-add.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { EmployeeDeleteComponent } from './component/employee-delete/employee-delete.component';
import { EmployeeDetailComponent } from './component/employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './component/employee-edit/employee-edit.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ServicesComponent } from './component/services/services.component';
import { TrainingComponent } from './component/training/training.component';

const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutusComponent},
  {path:"gallery",component:GalleryComponent},
  {path:"services",component:ServicesComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"databinding",component:DataBindingComponent},
  {path:"training",component:TrainingComponent},
  {path:"employee",component:EmployeeComponent,children:[
    {path:"details",component:EmployeeDetailComponent,children:[
      {path:"add",component:EmployeeAddComponent},
      {path:"delete",component:EmployeeDeleteComponent},
      {path:"update",component:EmployeeEditComponent}
    ]},
  ]},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
