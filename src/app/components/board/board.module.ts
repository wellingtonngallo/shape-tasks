import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { TaskModule } from '../tasks/task.module';

@NgModule({
  imports: [
    CommonModule,
    TaskModule
  ],
  declarations: [BoardComponent],
  exports: [BoardComponent]
})
export class BoardModule {}
