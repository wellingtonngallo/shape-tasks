import { TaskComponent } from './task.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
        CommonModule,
        MatIconModule
    ],
    declarations: [TaskComponent],
    exports: [TaskComponent]
})
export class TaskModule {}
