import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[]; 
}
@Component({
  selector: 'app-post-production',
  templateUrl: './post-production.component.html',
  styleUrls: ['./post-production.component.css']
})
export class PostProductionComponent {
  task: Task = {
    name: 'Inventory',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Gloves', completed: false, color: 'primary'},
      {name: 'Gel Polish', completed: false, color: 'accent'},
      {name: 'Nail Lamp', completed: false, color: 'warn'},
    ],
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }
  
}
