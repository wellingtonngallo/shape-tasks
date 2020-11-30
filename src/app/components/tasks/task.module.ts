import { TaskComponent } from './task.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [TaskComponent],
    exports: [TaskComponent]
})
export class TaskModule {}
