import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { TaskcrudService } from 'src/app/service/taskcrud.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  
  taskObj : Task = new Task();
  taskArr : Task[] = [];
  
  addTaskValue : string = '';

  constructor(private crudService: TaskcrudService) {}

  ngOnInit(): void {
    this.taskObj = new Task();
    this.taskArr = [];
    this.getAllTasks();
  }
  getAllTasks() {
    this.crudService.getAllTasks().subscribe(
      {
        next:res =>this.taskArr = res,
        error:err =>alert("Unable to get the list of tasks")
      }
    );
  }

  addTask() {
    this.taskObj.task_message = this.addTaskValue;
    this.crudService.addTask(this.taskObj).subscribe(
      {
        next:res => {
          this.ngOnInit(),
          this.addTaskValue = ''
        }, 
        error: err =>alert(err)
      }
    )
  }

  editTask() {
    this.crudService.editTask(this.taskObj).subscribe(
    { 
      next: res =>this.ngOnInit(), 
      error: err =>alert("Failed to update task")
    }
    );
  }

  deleteTask() {
    this.crudService.deleteTask(this.taskObj).subscribe(
      {
        next: res =>this.ngOnInit(), 
        error: err =>alert("Failed to delete task")
      }
    );
  }

}//end of todolist component class

  function editTask() {
    throw new Error('Function not implemented.');
  }


  function deleteTask() {
    throw new Error('Function not implemented.');
  }

