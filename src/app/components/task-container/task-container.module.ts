import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TaskContainerComponent } from './task-container.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [TaskContainerComponent],
  exports: [TaskContainerComponent]
})
export class TaskContainerModule {}
