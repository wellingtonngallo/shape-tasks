import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SprintContainerModule } from '../sprint-container/sprint-container.module';
import { SprintComponent } from './sprint.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { EmptyStateModule } from '../empty-state/empty-state.module';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        SprintContainerModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        ReactiveFormsModule,
        RouterModule,
        NgxSkeletonLoaderModule,
        MatTooltipModule,
        EmptyStateModule
    ],
    declarations: [SprintComponent],
    exports: [SprintComponent]
})
export class SprintModule {}
