import { AddBookComponent } from './components/admin/add-book/add-book.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BookListComponent } from './components/admin/book-list/book-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { EditBookComponent } from './components/admin/edit-book/edit-book.component';
import { LandingPageComponent } from './components/user/landing-page/landing-page.component';
import { LoginComponent } from './components/shared/login/login.component';
import { MaterialModule } from './module/material/material.module';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './components/shared/registration/registration.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { ViewBookComponent } from './components/admin/view-book/view-book.component';
import { ViewCartComponent } from './components/user/view-cart/view-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    AddBookComponent,
    EditBookComponent,
    BookListComponent,
    UserListComponent,
    ViewBookComponent,
    NavbarComponent,
    ViewCartComponent,
    LandingPageComponent,
    PageNotFoundComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
