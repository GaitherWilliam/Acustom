import { Component, OnInit } from '@angular/core';
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
  this.taskCrud.firestoreCollection.valueChanges({idField: 'id'})
  .subscribe(item =>{
    this.tasks = item.sort((a:any,b:any) => 
    {return a.isDone -b.isDone } ) //comparison method
  })
 }

 onClick(taskInput: HTMLInputElement) {
  if(taskInput.value) {
   this.taskCrud.addTask(taskInput.value);
    taskInput.value = '';
  }
  this.ngOnInit();
 }

 onStatusChange(id: string, newStatus: boolean) {
  this.taskCrud.updateTaskStatus(id, newStatus);
 }

 onDelete(id: string) {
  this.taskCrud.deleteTask(id);
 }

}//end of Todolist Service component 
