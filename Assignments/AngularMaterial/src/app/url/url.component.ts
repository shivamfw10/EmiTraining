import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.css']
})
export class UrlComponent implements OnInit, OnChanges {
  @Input() permanantLink:string | undefined;
  displayUrl:string | undefined;
  constructor() { }

 
  ngOnChanges(){
    if(this.permanantLink=='true'){
      this.displayUrl='Yes';
    }
    else{
      this.displayUrl="No";
    }
  }
  ngOnInit(): void {
  }
}
