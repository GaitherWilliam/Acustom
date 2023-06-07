import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TasklistService } from 'app/shared/tasklist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  editForm: FormGroup;
  constructor(
    private taskApi: TasklistService,
    private fb: FormBuilder,
    private location: Location,
    private actRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}
  ngOnInit() {
    this.updateTaskData();
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.taskApi
      .GetTask(id)
      .valueChanges()
      .subscribe((data) => {
        this.editForm.setValue(data);
      });
  }
  get text() {
    return this.editForm.get('text');
  }
  updateTaskData() {
    this.editForm = this.fb.group({
      text: ['', [Validators.required, Validators.minLength(2)]],
    });
  }
  goBack() {
    this.location.back();
  }
  updateForm() {
    this.taskApi.UpdateTask(this.editForm.value);
    this.toastr.success(
      this.editForm.controls['text'].value + ' updated successfully'
    );
    this.router.navigate(['view-tasklist']);
  }
}
