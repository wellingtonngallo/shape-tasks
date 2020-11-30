import { Component, Inject, OnInit } from '@angular/core';
import { SprintService } from './../../services/sprint.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IForm } from '../../interface/form.interface';
import { ISprint } from '../../interface/sprint.interface';
import { IApiRequest } from '../../interface/api-request.interface';

@Component({
    selector: 'app-create-sprint',
    templateUrl: './sprint-container.component.html',
    styleUrls: ['./sprint-container.component.scss']
})
export class SprintContainerComponent implements OnInit {
  createSprintForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required]
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public sprint: ISprint,
    private formBuilder: FormBuilder,
    private sprintServce: SprintService,
    private dialogRef: MatDialogRef<SprintContainerComponent>
  ) {}

  ngOnInit(): void {
    this.verifyIfEditRegister();
  }

  verifyIfEditRegister(): void {
    if (this.sprint) {
      this.createSprintForm.get('name')?.setValue(this.sprint.name);
      this.createSprintForm.get('description')?.setValue(this.sprint.description);
    }
  }

  saveSprint(): void {
    if (this.createSprintForm.valid && !this.sprint) {
      this.sprintServce.saveSprints(this.getEntityFromForm()).subscribe((result: IApiRequest) => {
        this.dialogRef.close(result);
      });
    }

    if (this.createSprintForm.valid && this.sprint) {
      this.sprintServce.updateSprints(this.getEntityFromForm(), this.sprint.id as number).subscribe((result: IApiRequest) => {
        this.dialogRef.close(result);
      });
    }
  }

  private getEntityFromForm(): IForm {
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
