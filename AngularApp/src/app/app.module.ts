import { AboutusComponent } from './component/aboutus/aboutus.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ContactusComponent } from './component/contactus/contactus.component';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { EmployeeAddComponent } from './component/employee-add/employee-add.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { EmployeeDeleteComponent } from './component/employee-delete/employee-delete.component';
import { EmployeeDetailComponent } from './component/employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './component/employee-edit/employee-edit.component';
import { FormsModule } from '@angular/forms';
import { GalleryComponent } from './component/gallery/gallery.component';
import { HomeComponent } from './component/home/home.component';
import { MenuComponent } from './component/menu/menu.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ServicesComponent } from './component/services/services.component';
import { TrainingComponent } from './component/training/training.component';
import { OrganizationComponent } from './component/organization/organization.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    GalleryComponent,
    ServicesComponent,
    ContactusComponent,
    PageNotFoundComponent,
    DataBindingComponent,
    MenuComponent,
    TrainingComponent,
    EmployeeDetailComponent,
    EmployeeEditComponent,
    EmployeeDeleteComponent,
    EmployeeAddComponent,
    EmployeeComponent,
    OrganizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
