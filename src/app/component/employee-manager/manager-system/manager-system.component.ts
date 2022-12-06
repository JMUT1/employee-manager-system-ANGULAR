import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/task-models';
import {TaskService} from '../../../services/task.service'

@Component({
  selector: 'app-manager-system',
  templateUrl: './manager-system.component.html',
  styleUrls: ['./manager-system.component.css']
})
export class ManagerSystemComponent implements OnInit {
    tasks: Employee[]


  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getUser();
  }

}
