import { CommonModule } from '@angular/common';
import {MatBadgeModule} from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
const MatModule =[
  MatGridListModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatBadgeModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatModule
  ],
  exports:[
    MatModule
  ]
})
export class MaterialModule { }
