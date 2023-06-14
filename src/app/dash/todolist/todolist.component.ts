import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { TaskcrudService } from 'src/app/service/taskcrud.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  taskObj: Task = new Task();
  taskArr: Task[] = [];

  addTaskValue: string = '';

  constructor(private crudService: TaskcrudService) {}

  ngOnInit(): void {
    this.taskObj = new Task();
    this.taskArr = [];
    this.getAllTasks();
  }
 
  getAllTasks() {
    this.crudService.getAllTasks().subscribe(
      {
      next: (res) => {
        this.taskArr = res;
      },
      error: (err) => {
        alert("Unable to get list of tasks.");
      }
    })
  }

  addTask() {
    this.taskObj.task_message = this.addTaskValue; 
    this.crudService.addTask(this.taskObj).subscribe(
      {
        next: () => {
          this.ngOnInit();
          this.addTaskValue = '';
        },
        error: (err) => {
          alert("Unable to add task to list");
        }
      })
  }

  editTask() {
    this.crudService.editTask(this.taskObj).subscribe(res => {
      next: () => this.ngOnInit();
      error: () => alert("Failed to update task");
    })
  }

  deleteTask(etask: Task) {
    this.crudService.deleteTask(etask).subscribe(res => {
      next: () => this.ngOnInit();
      error: () => alert("Failed to delete task");
    })
  }

}//end of todolist component class