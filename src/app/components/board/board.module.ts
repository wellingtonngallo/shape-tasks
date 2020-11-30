import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { TaskModule } from '../tasks/task.module';
import { EmptyStateModule } from '../empty-state/empty-state.module';
import { CreateBoardModule } from '../create-board/create-board.module';
import { MatButtonModule } from '@angular/material/button';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    TaskModule,
    EmptyStateModule,
    CreateBoardModule,
    MatButtonModule,
    NgxSkeletonLoaderModule,
    DragDropModule,
    MatIconModule,
    MatTooltipModule
  ],
  declarations: [BoardComponent],
  exports: [BoardComponent]
})
export class BoardModule {}
