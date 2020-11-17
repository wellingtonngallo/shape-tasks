import { CreateSprintModule } from './../create-sprint/create-sprint.model';
import { MatDialogModule } from '@angular/material/dialog';
import { SprintComponent } from './sprint.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        CreateSprintModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        ReactiveFormsModule
    ],
    declarations: [SprintComponent],
    exports: [SprintComponent]
})
export class SprintModule {}