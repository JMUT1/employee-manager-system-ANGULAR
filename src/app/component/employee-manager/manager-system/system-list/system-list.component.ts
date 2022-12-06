import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/task-models';
import {TaskService} from '../../../../services/task.service'


@Component({
  selector: 'app-system-list',
  templateUrl: './system-list.component.html',
  styleUrls: ['./system-list.component.css']
})
export class SystemListComponent implements OnInit {

@Input() task: Employee

  constructor( public taskService : TaskService) { }

  ngOnInit(): void {
  }

  showInfo(){
    this.task.hide = !this.task.hide
  }
  deleteInfo(task: Employee){
    if(confirm('Are you sure you want to delete it?')){
      this.taskService.deleteTask(task)
    }
  }

}
