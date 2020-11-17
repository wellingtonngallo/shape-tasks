import { NgModule } from '@angular/core';
import { CreateSprintComponent } from './create-sprint.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [CreateSprintComponent],
    exports: [CreateSprintComponent]
})
export class CreateSprintModule {}