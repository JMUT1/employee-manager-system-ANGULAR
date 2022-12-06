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
userInfo: Employee

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



// userData(): Employee{
//   return this.userInfo = {
//     name: this.nameField.value,
//     lastName: this.lastNameField.value,
//     designation: this.designationField.value,
//     salary: this.salaryField.value
//   }
// }

AddEmployee(event:Event){
event.preventDefault()
const value = this.form.value
console.log(value);
this.employeeService.addUser({name: 'Jose', lastName: 'Ureña', designation: 'Abogado', salary: 1500, hide:true})
}
}

// get nameField(){
//   return this.form.get('name')
// }

// get lastNameField(){
//   return this.form.get('lastName')
// }

// get designationField(){
//   return this.form.get('designation')
// }

// get salaryField(){
//   return this.form.get('salary')
// }


// }
