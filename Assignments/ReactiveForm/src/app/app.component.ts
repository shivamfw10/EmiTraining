import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ReactiveForm';
  reactiveForm:FormGroup;

 ngOnInit(){
  this.reactiveForm = new FormGroup({
    personalDetails : new FormGroup({
      firstName : new FormControl(null,Validators.required),
    lastName : new FormControl(null,Validators.required),
    }),
    email : new FormControl(null,[Validators.required,Validators.email]),
    gender : new FormControl('male'),
    skills: new FormArray([
      new FormControl(null),
    ])
  })
 }
 onSubmit(){
  console.log(this.reactiveForm);
 }
 addSkills(){
  (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null,Validators.required))
 }
}
