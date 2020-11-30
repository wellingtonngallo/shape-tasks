import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { BoardComponent } from './board.component';
import { TaskModule } from '../tasks/task.module';
import { EmptyStateModule } from '../empty-state/empty-state.module';
import { BoardContainerModule } from '../board-container/board-container.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { TaskContainerModule } from '../task-container/task-container.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    TaskModule,
    EmptyStateModule,
    BoardContainerModule,
    MatButtonModule,
    NgxSkeletonLoaderModule,
    DragDropModule,
    MatIconModule,
    MatTooltipModule,
    TaskContainerModule,
    ReactiveFormsModule
  ],
  declarations: [BoardComponent],
  exports: [BoardComponent]
})
export class BoardModule {}
