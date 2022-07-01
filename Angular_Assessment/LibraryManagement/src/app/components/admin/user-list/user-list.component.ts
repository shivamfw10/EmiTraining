import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements AfterViewInit {

  displayedColumns: string[] = ['userId', 'userName', 'userEmail','userBooks','pickupDate','returnDate'];
  dataSource = new MatTableDataSource<UserElement>(USER_RECORD);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
export interface UserElement {
  userId:Number
  userName: string;
  userEmail:string;
  userBooks:string;
  pickupDate: string;
  returnDate:string
}

const USER_RECORD: UserElement[] = [
  {userId: 1, userName: 'Aniket', userEmail:'aniket@gmail.com', userBooks:'3',pickupDate:'30/06/2022',returnDate:'02/07/2022'},
  {userId: 2, userName: 'Aditya', userEmail:'aditya@gmail.com', userBooks:'2',pickupDate:'30/06/2022',returnDate:'02/07/2022'},
  {userId: 3, userName: 'Vishnu', userEmail:'vishnu@gmail.com', userBooks:'3',pickupDate:'30/06/2022',returnDate:'02/07/2022'},
  {userId: 4, userName: 'Rambhu', userEmail:'rambhu@gmail.com', userBooks:'2',pickupDate:'30/06/2022',returnDate:'02/07/2022'},
  {userId: 5, userName: 'Rushikesh', userEmail:'rushikesh@gmail.com', userBooks: '1',pickupDate:'30/06/2022',returnDate:'02/07/2022'},
];
