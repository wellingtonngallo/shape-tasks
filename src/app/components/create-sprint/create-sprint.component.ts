import { Component } from '@angular/core';
import { SprintService } from './../../services/sprint.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ISprintForm } from '../../interface/sprint-form.interface';

@Component({
    selector: 'app-create-sprint',
    templateUrl: './create-sprint.component.html',
    styleUrls: ['./create-sprint.component.scss']
})
export class CreateSprintComponent {
  createSprintForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private sprintServce: SprintService,
    private dialogRef: MatDialogRef<CreateSprintComponent>
  ) {}

  saveSprint(): void {
    if (this.createSprintForm.valid) {
      this.sprintServce.saveSprints(this.getEntityFromForm()).subscribe(item => {
        this.dialogRef.close(item);
      });
    }
  }

  private getEntityFromForm(): ISprintForm {
    const getFormName = this.createSprintForm.get('name');
    const getFormDescription = this.createSprintForm.get('description');
    const name = getFormName?.value;
    const description = getFormDescription?.value;

    return {
        name,
        description
    };
  }
}
