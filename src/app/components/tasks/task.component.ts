import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ITask } from 'src/app/interface/task.interface';
import { TaskService } from 'src/app/services/task.service';
import { TaskContainerComponent } from '../task-container/task-container.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() boardId = 0;
  @Input() task!: ITask;
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();

  constructor(
    private taskService: TaskService,
    private dialog: MatDialog,
  ) {}

  deleteEmit(task: ITask): void {
    this.taskService.deleteTask(task.id as number).subscribe();
    this.delete.emit(task);
  }

  editEmit(task: ITask): void {
    this.dialog.open(TaskContainerComponent, {data: {boardId: this.boardId, task}}).afterClosed().subscribe(result => {
      if (result) {
        this.edit.emit(true);
      }
    });
  }
}
