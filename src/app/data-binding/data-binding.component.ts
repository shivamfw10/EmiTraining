import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  message:string="Enter name";
  constructor() { }
  twoway:string="";
  ngOnInit(): void {
  }
  public showData(){
    alert("clicked on button");
  }

}
