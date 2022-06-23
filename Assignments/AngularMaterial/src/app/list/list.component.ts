import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ResitrationFormComponent} from '../resitration-form/resitration-form.component'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements AfterViewInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns: string[] = ['id', 'from', 'to', 'crDate','url'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  constructor(public dialog:MatDialog){}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  openDialog(){
    this.dialog.open(ResitrationFormComponent,{
      width:'350px',
      data:'right click'
    })
  }
}

export interface PeriodicElement {
  id:number;
  from: string;
  to: string;
  crDate:string;
  url:boolean
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, from: 'https://material.angular.io/components/form-field/api', to:'http://localhost:4205/', crDate:'1 Jan, 1970',url:true},
  {id: 2, from: 'https://material.angular.io/components/form-field/api',to: 'http://localhost:4205/', crDate:'1 Jan, 1970',url:true},
  {id: 3, from: 'https://material.angular.io/components/form-field/api',to:'http://localhost:4205/', crDate:'1 Jan, 1970',url:true},
  {id: 4, from: 'https://material.angular.io/components/form-field/api', to: 'http://localhost:4205/', crDate:'1 Jan, 1970',url:true},
  {id: 5, from: 'https://material.angular.io/components/form-field/api',to:'http://localhost:4205/', crDate:'1 Jan, 1970',url:true},
  {id: 6, from: 'https://material.angular.io/components/form-field/api',to: 'http://localhost:4205/', crDate:'1 Jan, 1970',url:true},
  {id: 7, from: 'https://material.angular.io/components/form-field/api',to: 'http://localhost:4205/', crDate:'1 Jan, 1970',url:true},
  {id: 8, from: 'https://material.angular.io/components/form-field/api',to: 'http://localhost:4205/', crDate:'1 Jan, 1970',url:true},
  {id: 9, from: 'https://material.angular.io/components/form-field/api',to: 'http://localhost:4205/', crDate:'1 Jan, 1970',url:true},
  {id: 10, from: 'https://material.angular.io/components/form-field/api',to: 'http://localhost:4205/', crDate:'1 Jan, 1970',url:true},
  {id: 11, from: 'https://material.angular.io/components/form-field/api',to: 'http://localhost:4205/', crDate:'1 Jan, 1970',url:true},
  {id: 12, from: 'https://material.angular.io/components/form-field/api', to: 'http://localhost:4205/', crDate:'1 Jan, 1970',url:true},
  {id: 13, from: 'https://material.angular.io/components/form-field/api',to: 'http://localhost:4205/', crDate:'1 Jan, 1970',url:true},
  {id: 14, from: 'https://material.angular.io/components/form-field/api',to: 'http://localhost:4205/', crDate:'1 Jan, 1970',url:true},
  {id: 15, from: 'https://material.angular.io/components/form-field/api', to: 'http://localhost:4205/', crDate:'1 Jan, 1970',url:true},
  {id: 16, from: 'https://material.angular.io/components/form-field/api',to:'http://localhost:4205/', crDate:'1 Jan, 1970',url:true},
  {id: 17, from: 'https://material.angular.io/components/form-field/api',to: 'http://localhost:4205/', crDate:'1 Jan, 1970',url:true},
  {id: 18, from: 'https://material.angular.io/components/form-field/api',to: 'http://localhost:4205/', crDate:'1 Jan, 1970',url:true},
  {id: 19, from: 'https://material.angular.io/components/form-field/api', to: 'http://localhost:4205/', crDate:'1 Jan, 1970',url:true},
  {id: 20, from: 'https://material.angular.io/components/form-field/api',to: 'http://localhost:4205/', crDate:'1 Jan, 1970',url:true},
];