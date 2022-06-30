import { CommonModule } from '@angular/common';
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
  MatMenuModule
  
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
