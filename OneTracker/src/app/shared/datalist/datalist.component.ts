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
  {ticketid: '2', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '3', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '4', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '5', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '6', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '7', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '8', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '9', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '10', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '11', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '12', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '13', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '14', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '15', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '16', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '17', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '18', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '19', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '20', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '21', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '22', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '23', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '24', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '25', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '26', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '27', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  {ticketid: '28', department: 'Dep1', category:'cat1', subCategory: 'sub1',status:'open',customer:'cust1',issueTime:'27/06/2022',age:'5 Hr', lastModifiedDate:'24/06/2020'},
  
];