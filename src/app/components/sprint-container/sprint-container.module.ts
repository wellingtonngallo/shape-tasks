import { NgModule } from '@angular/core';
import { SprintContainerComponent } from './sprint-container.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [SprintContainerComponent],
  exports: [SprintContainerComponent]
})
export class SprintContainerModule {}
