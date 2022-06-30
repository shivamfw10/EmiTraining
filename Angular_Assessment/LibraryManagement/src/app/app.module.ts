import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/shared/login/login.component';
import { RegistrationComponent } from './components/shared/registration/registration.component';
import { AddBookComponent } from './components/admin/add-book/add-book.component';
import { EditBookComponent } from './components/admin/edit-book/edit-book.component';
import { BookListComponent } from './components/admin/book-list/book-list.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { ViewBookComponent } from './components/admin/view-book/view-book.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ViewCartComponent } from './components/user/view-cart/view-cart.component';
import { LandingPageComponent } from './components/user/landing-page/landing-page.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';

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
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
