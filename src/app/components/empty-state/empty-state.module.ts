import { EmptyStateComponent } from './empty-state.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [
    EmptyStateComponent
  ],
  exports: [
    EmptyStateComponent
  ]
})
export class EmptyStateModule {}
