import { Injectable } from '@angular/core';
import { Task } from 'app/models/task';
import { 
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class TaskcrudService {
  tasksRef!: AngularFireList<any>
  taskRef!: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}

  // Create task
  AddTask(task: Task) {
    this.tasksRef.push({
        name: task.name,
        input: task.input,
    });
  }
  // Fetch Single task Object
  GetTask(id: string) {
    this.taskRef = this.db.object('tasks-list/' + id);
    return this.taskRef;
  }
  // Fetch tasks List
  GetTasksList() {
    this.tasksRef = this.db.list('tasks-list');
    return this.tasksRef;
  }
  // Update task Object
  UpdateTask(task: Task) {
    this.taskRef.update({
        name: task.name,
        input: task.input,
    });
  }
  // Delete task Object
  DeleteTask(id: string) {
    this.taskRef = this.db.object('tasks-list/' + id);
    this.taskRef.remove();
  }
}
