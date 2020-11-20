import { EmptyStateComponent } from './empty-state.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    EmptyStateComponent
  ],
  exports: [
    EmptyStateComponent
  ]
})
export class EmptyStateModule {}
