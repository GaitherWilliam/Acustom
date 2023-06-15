import { Component, OnInit } from '@angular/core';
import { Task } from 'app/models/task';
import { TaskcrudService } from 'app/services/taskcrud.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
 
  constructor(private taskCrud: TaskcrudService) {}

  tasks: any[] = [];

 ngOnInit(): void {
  this.taskCrud.firestoreCollection.valueChanges().subscribe(item =>{
    this.tasks = item;
  })
 }

 onClick(taskInput: HTMLInputElement) {
  if(taskInput.value) {
   this.taskCrud.addTask(taskInput.value);
    taskInput.value = '';
  }
  this.ngOnInit();
 }

}//end of Todolist Service component 
