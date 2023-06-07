import { Component, OnInit } from '@angular/core';
import { TasklistService} from 'app/shared/tasklist.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

interface Task {
  text: string;
} 

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent implements OnInit {
  public addTaskForm: FormGroup;
  constructor(
    public taskApi: TasklistService,
    public fb: FormBuilder,
    public toastr: ToastrService
  ){}
  ngOnInit() {
    this.taskApi.GetTaskList();
    this._tasklistForm();
  }
  _tasklistForm() {
    this.addTaskForm = this.fb.group({
      text: ['', [Validators.required, Validators.minLength(2)]],
    })
  }
  get text() {
    return this.addTaskForm.get('text');
  }
  resetForm() {
    this.addTaskForm.reset();
  }
  submitTaskData() {
    this.taskApi.AddTask(this.addTaskForm.value);
    this.toastr.success(
      this.addTaskForm.controls['text'].value + 'successfully added to list!'
    );
    this.resetForm();
  }
}
