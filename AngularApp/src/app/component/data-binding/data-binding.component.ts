import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  message:string="Enter Name";
  twoWay:string="";
  constructor() { }
  
  ngOnInit(): void {
  }
  public showData(){
    alert("Hey I'm here");
  }

}
