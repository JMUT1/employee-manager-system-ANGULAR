import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/shared/task-models';
import {TaskService} from '../../services/task.service'

@Component({
  selector: 'app-employee-manager',
  templateUrl: './employee-manager.component.html',
  styleUrls: ['./employee-manager.component.css']
})
export class EmployeeManagerComponent implements OnInit {

form: FormGroup;
userInfo: Employee;

  constructor(private formBuilder : FormBuilder, private employeeService: TaskService ) {
    this.buildForm()
  }

  ngOnInit(): void {}

  private buildForm(){
    this.form = this.formBuilder.group({
      name: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      designation: ["", [Validators.required]],
      salary: ["", [Validators.required]],
    })
  }



AddEmployee(event:Event){
event.preventDefault()
if(this.form.valid){
  this.employeeService.addUser(this.form.value)
  this.form.reset()

setTimeout(()=>{
  window.location.reload()
}, 1500)
}}
}
