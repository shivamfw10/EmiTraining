import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  emp = new Employee();
  empForm:FormGroup;
isDataLoading=false;
 disabled = false;



  constructor(private empService:EmployeeService,private router:Router,private fb:FormBuilder,private route:ActivatedRoute) { }
  public getEmployee(id:any)
  {
    this.empService.getEmployeeById(id).subscribe(response=>{
      this.isDataLoading=false;
      this.emp=response;
      console.log(this.emp);
    })
  }

  ngOnInit(): void {
    this.empForm=this.fb.group({
      name:['',this.disabled!= this.disabled ],
      designation:['',Validators.required],
      department:['',Validators.required],
      Gender:['',Validators.required]
    });
    this.getEmployee(this.route.snapshot.params['id']);
    this.empForm.get('name').disable()
    this.empForm.get('Gender').disable();

  }

  OnFormSubmit(empForm:any)
  {
     this.isDataLoading=false;

     this.empService.EditEmployee(this.route.snapshot.params['id'],this.empForm.value).subscribe(response=>{
      const id=response['id'];

      this.router.navigate(['/list']);
     },error=>{
      console.log(error);
     })
  }
}



