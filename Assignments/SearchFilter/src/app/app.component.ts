import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SearchFilter';
  filter!:string;
  userRecords=[
    {
      id:1,
      name:'Aditya',
      age:25,
      location:'Pune',
      email:'aditya@gmail.com'
    },
    {
      id:2,
      name:'Aniket',
      age:22,
      location:'Delhi',
      email:'aniket@gmail.com'
    },
    {
      id:3,
      name:'Vishnu',
      age:26,
      location:'Kerala',
      email:'vishnu@gmail.com'
    },
    {
      id:4,
      name:'Sachin',
      age:24,
      location:'Karnataka',
      email:'sachin@gmail.com'
    },
    {
      id:5,
      name:'Saurabh',
      age:25,
      location:'Pune',
      email:'saurabh@gmail.com'
    }
  ]
}
