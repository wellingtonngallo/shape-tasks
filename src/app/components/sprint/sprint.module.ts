import { NgModule } from '@angular/core';
import { CreateSprintModule } from '../create-sprint/create-sprint.module';
import { MatDialogModule } from '@angular/material/dialog';
import { SprintComponent } from './sprint.component';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        CreateSprintModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        ReactiveFormsModule,
        RouterModule,
        NgxSkeletonLoaderModule,
        MatTooltipModule
    ],
    declarations: [SprintComponent],
    exports: [SprintComponent]
})
export class SprintModule {}
