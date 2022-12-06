import { Injectable } from '@angular/core';
import { Employee } from '../shared/task-models';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  userInfo : Employee[]

  constructor(){
    this.userInfo = [{
      name: 'Chema', lastName: 'Torres', designation: 'Frontend', salary: 1000, hide: true
    }]
  }

  getUser(){
    return this.userInfo
  }

addUser(info: Employee){
  this.userInfo.push(info);
}

deleteTask(task: Employee){
for(let i = 0; i< this.userInfo.length; i++ ){
  if(task == this.userInfo[i]){
    this.userInfo.splice(i,1)
  }
}
}


}
