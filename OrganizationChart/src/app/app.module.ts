import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CeoComponent } from './component/ceo/ceo.component';
import { EngineeringDirectorComponent } from './component/engineering-director/engineering-director.component';
import { HomeComponent } from './component/home/home.component';
import { Level1Component } from './component/level1/level1.component';
import { Level2Component } from './component/level2/level2.component';
import { Level3Component } from './component/level3/level3.component';
import { NgModule } from '@angular/core';
import { OrganizationComponent } from './component/organization/organization.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    OrganizationComponent,
    CeoComponent,
    EngineeringDirectorComponent,
    Level1Component,
    Level2Component,
    Level3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
