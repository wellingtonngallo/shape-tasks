import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BoardContainerComponent } from './board-container.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [BoardContainerComponent],
  exports: [BoardContainerComponent]
})
export class BoardContainerModule {}
