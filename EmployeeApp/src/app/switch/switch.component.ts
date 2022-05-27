import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  emp:any=[];
  employees=[
    {id:1,name:'Shivam',location:'Bangalore'},
    {id:2,name:'Rambhu',location:'Pune'},
    {id:3,name:'Aniket',location:'Delhi'},
    {id:4,name:'Vishnu',location:'Kerala'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
