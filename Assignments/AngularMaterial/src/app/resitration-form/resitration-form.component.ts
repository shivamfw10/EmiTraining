import { MatDialog } from '@angular/material/dialog';
import { CommunicateService } from './../communicate.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resitration-form',
  templateUrl: './resitration-form.component.html',
  styleUrls: ['./resitration-form.component.css']
})
export class ResitrationFormComponent implements OnInit {
  creationDate:any = new Date();
  UrlListData!: FormGroup;
  formData:any=[];
  constructor(private formbuilder:FormBuilder, private service:CommunicateService, private MatDialog:MatDialog) { }

  ngOnInit(): void {
    this.UrlListData= this.formbuilder.group({
      id:['',[Validators.required]],
      from:['',[Validators.required]],
      to:['',[Validators.required]],
      crDate:['',[Validators.required]],
      url:['',[Validators.required]]
    });
  }
  onSubmit(){
    this.formData.push(this.UrlListData.value);
    this.service.sharedata(this.formData);
  }
}
