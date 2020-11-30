import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IForm } from 'src/app/interface/form.interface';
import { ITask } from 'src/app/interface/task.interface';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss']
})
export class TaskContainerComponent implements OnInit {
  createTaskForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { boardId: number, task: ITask },
    private formBuilder: FormBuilder,
    private taskService: TaskService,
    private dialogRef: MatDialogRef<TaskContainerComponent>
  ) {}

  ngOnInit(): void {
    this.verifyIfEditRegister();
  }

  verifyIfEditRegister(): void {
    if (this.data.task) {
      this.createTaskForm.get('name')?.setValue(this.data.task.name);
      this.createTaskForm.get('description')?.setValue(this.data.task.description);
    }
  }

  saveTask(): void {
    if (this.createTaskForm.valid && !this.data.task) {
      this.taskService.saveTask(this.getEntityFromForm(), this.data.boardId as number).subscribe(result => {
        this.dialogRef.close(result);
      });
    }

    if (this.createTaskForm.valid && this.data.task) {
      this.taskService.updateTask(this.getEntityFromForm(), this.data.boardId, this.data.task.id as number)
        .subscribe(result => {
          this.dialogRef.close(result);
        });
    }
  }

  private getEntityFromForm(): IForm {
    const getFormName = this.createTaskForm.get('name');
    const getFormDescription = this.createTaskForm.get('description');
    const name = getFormName?.value;
    const description = getFormDescription?.value;

    return {
        name,
        description
    };
  }
}
