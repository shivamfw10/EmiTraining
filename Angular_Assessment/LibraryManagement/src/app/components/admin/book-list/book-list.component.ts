import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements AfterViewInit {

  displayedColumns: string[] = ['bookId', 'title', 'author','category','quantity'];
  dataSource = new MatTableDataSource<Books>(BOOKS_RECORD);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
export interface Books {
  bookId:Number
  title: string;
  author:string;
  category: string;
  quantity:Number;
}

const BOOKS_RECORD: Books[] = [
  {bookId: 1, title: 'ASP.NET Core', author:'Brian Travis', category:'Programming',quantity:20},
  {bookId: 2, title: 'Java Programing', author:'Thiru Thangarathinam', category:'Programming',quantity:20},
  {bookId: 3, title: 'SQL Server 2008', author:'Mark Collins', category:'Programming',quantity:20},
  {bookId: 4, title: 'MYSQL', author:'Bill Evjen', category:'Programming',quantity:20},
  {bookId: 5, title: 'Civil Drawing', author:'Mario Szpuszta', category: 'Civil',quantity:20},
];