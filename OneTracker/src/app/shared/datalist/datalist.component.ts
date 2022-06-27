import {AfterViewInit, Component, ViewChild} from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.css']
})
export class DatalistComponent implements AfterViewInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns: string[] = ['ticketid', 'department', 'category', 'subCategory','status','customer','issueTime','age','lastModifiedDate'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  ticketid: string;
  department: string;
  category: string;
  subCategory: string;
  status:string;
  customer:string;
  issueTime:string;
  age:string;
  lastModifiedDate:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {ticketid: '1', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '1', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '1', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '1', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '1', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '1', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '1', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '1', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '1', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '1', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '1', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '1', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '1', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '1', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '1', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '1', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '1', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '1', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '1', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '1', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '1', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '1', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '1', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '1', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '1', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '1', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '1', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '1', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  
];