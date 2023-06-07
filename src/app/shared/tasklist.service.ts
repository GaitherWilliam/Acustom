import { Injectable } from '@angular/core';
import { Tasklist, Task } from '../shared/tasklist';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class TasklistService {
  tasklistRef: AngularFireList<any>;
  taskRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) { }

 
  
  AddTask(task: Task) {
    this.tasklistRef.push({
      text: task.text,
    });
  }

  GetTask(id:string) {
    this.taskRef = this.db.object('task-list/' + id);
    return this.taskRef;
  }

  GetTaskList() {
    this.tasklistRef = this.db.list('task-list');
    return this.tasklistRef;
  }

  UpdateTask(task: Task) {
    this.taskRef.update({
      text: task.text,
    })
  }

  DeleteTask(id: string) {
    this.taskRef = this.db.object('task-list/' + id);
    this.taskRef.remove();
  }
}
