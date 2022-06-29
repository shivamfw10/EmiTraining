import { CommunicateService } from './../communicate.service';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ResitrationFormComponent} from '../resitration-form/resitration-form.component'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns: string[] = ['id', 'from', 'to', 'crDate','url'];
  dataSource = new MatTableDataSource<UrlList>(UrlListData);
  url:boolean | undefined;
  constructor(public dialog:MatDialog, private service:CommunicateService){}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.service.subject.subscribe((data:any)=>{
      const records = Object.assign({},...data);
      UrlListData.push(records);
      console.log(records)
    })
  }
  openDialog(){
    this.dialog.open(ResitrationFormComponent,{
      width:'350px',
      data:'right click'
    })
  }
}

export interface UrlList {
  id:number;
  from: string;
  to: string;
  crDate:string;
  url:string;
}

const UrlListData: UrlList[] = [
  {id: 1, from: 'https://material.angular.io/components/form-field/api', to:'http://localhost:4205/', crDate:'1 Jan, 1970',url:'true'},
  {id: 2, from: 'https://material.angular.io/components/form-field/api',to: 'http://localhost:4205/', crDate:'1 Jan, 1970',url:'true'},
  {id: 3, from: 'https://material.angular.io/components/form-field/api',to:'http://localhost:4205/', crDate:'1 Jan, 1970',url:'true'},
  {id: 4, from: 'https://material.angular.io/components/form-field/api', to: 'http://localhost:4205/', crDate:'1 Jan, 1970',url:'true'},
  {id: 5, from: 'https://material.angular.io/components/form-field/api',to:'http://localhost:4205/', crDate:'1 Jan, 1970',url:'true'},
];