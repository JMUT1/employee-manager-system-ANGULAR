import { Injectable } from '@angular/core';
import { Employee } from '../shared/task-models';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  userInfo : Employee[]

  constructor(){
    this.userInfo = []
  }


  getUser(){
    if(localStorage.getItem === null){
      return this.userInfo
    } else {
      this.userInfo = JSON.parse(localStorage.getItem('Users')!)
      return this.userInfo
    }
  }

  addUser(info: Employee){
    this.userInfo = [];
    if(localStorage.getItem('Users') === null){
      this.userInfo.push(info);
      localStorage.setItem('Users', JSON.stringify(this.userInfo))
    }else{
      this.userInfo = JSON.parse(localStorage.getItem('Users')!)
      this.userInfo.push(info)
      localStorage.setItem('Users', JSON.stringify(this.userInfo))
    }
  }

deleteTask(task: Employee){
for(let i = 0; i< this.userInfo.length; i++ ){
  if(task == this.userInfo[i]){
    this.userInfo.splice(i,1)
  }
}
}


}
