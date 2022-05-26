import { RouterModule, Routes } from '@angular/router';

import { AboutusComponent } from './component/aboutus/aboutus.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ServicesComponent } from './component/services/services.component';
import { TrainingComponent } from './component/training/training.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutusComponent},
  {path:"gallery",component:GalleryComponent},
  {path:"services",component:ServicesComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"training",component:TrainingComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
