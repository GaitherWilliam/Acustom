import { Component,OnInit } from '@angular/core';
import { TasklistService } from 'app/shared/tasklist.service';
import { Task } from 'app/shared/tasklist';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  p: number = 1;
  Task: Task[];
  hideWhenNoTask: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(
    public taskApi: TasklistService,
    public toastr: ToastrService
  ){}
  ngOnInit() {
    this.dataState();
    let t = this.taskApi.GetTaskList();
    t.snapshotChanges().subscribe(data => {
      this.Task = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.Task.push(a as Task);
      })
    })
}
  dataState() {
    this.taskApi.GetTaskList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if(data.length <= 0){
        this.hideWhenNoTask = true;
        this.noData = false;
      }
    })
  }
  deleteTask(task) {
    if (window.confirm('Are you sure you want to delete this task?')) {
      this.taskApi.DeleteTask(task.$key)
      this.toastr.success(task.text + ' successfully deleted!');
    }
  }
}
