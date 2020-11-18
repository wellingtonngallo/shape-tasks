import { SprintService } from './../../services/sprint.service';
import { Component } from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

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

    saveSprint() {
        if (this.createSprintForm.valid) {
            this.sprintServce.saveSprints(this.getEntityFromForm()).subscribe(item => {
                this.dialogRef.close(item);
            });
        }
    }

    private getEntityFromForm() {
        const name = this.createSprintForm.get('name')!.value;
        const description = this.createSprintForm.get('description')!.value;
    
        return {
            name,
            description
        };
      }
}