import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';

import { BoardService } from './../../services/board.service';
import { TaskService } from './../../services/task.service';
import { IBoard } from '../../interface/board.interface';
import { BoardContainerComponent } from '../board-container/board-container.component';
import { ITask } from 'src/app/interface/task.interface';
import { TaskContainerComponent } from '../task-container/task-container.component';
import { SprintService } from 'src/app/services/sprint.service';
import { ISprint } from 'src/app/interface/sprint.interface';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  boards: IBoard[] = [];
  loading = false;
  sprintName = '';

  constructor(
    private boardService: BoardService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private taskService: TaskService,
    private sprintService: SprintService
  ) {}

  ngOnInit(): void {
    this.getBoards();
    this.getNameSprint();
  }

  getBoards(): void {
    this.loading = true;
    this.boardService.getBoard(this.route.snapshot.params.id).subscribe((board: IBoard[]) => {
      this.boards = board;
      this.loading = false;
    });
  }

  getNameSprint(): void {
    this.sprintService.getSprintById(this.route.snapshot.params.id).subscribe((sprint: ISprint) => {
      this.sprintName = sprint.name;
    });
  }

  createBoard(): void {
    this.dialog.open(BoardContainerComponent, { data: {
      idSprint: this.route.snapshot.params.id
    }}).afterClosed().subscribe(result => {
      if (result) {
        this.getBoards();
      }
    });
  }

  editBoard(board: IBoard): void {
    this.dialog.open(BoardContainerComponent, { data: {board} }).afterClosed().subscribe(result => {
      if (result) {
        this.getBoards();
      }
    });
  }

  deleteBoard(boardId: number): void {
    this.boards = this.boards.filter(item => item.id !== boardId);
    this.boardService.deleteBoard(boardId).subscribe();
  }

  createTask(boardId: number): void {
    this.dialog.open(TaskContainerComponent, { data: { boardId } }).afterClosed().subscribe(result => {
      if (result) {
        this.getBoards();
      }
    });
  }

  deleteTask(task: ITask, boardId: number): void {
    const findBoard = this.boards.find(item => item.id === boardId);

    if (findBoard?.tasks) {
      findBoard.tasks = findBoard.tasks.filter(item => item.id !== task.id);
    }
  }

  editTask($event: boolean): void {
    if ($event) {
      this.getBoards();
    }
  }

  // tslint:disable-next-line: no-any
  dropTask(event: CdkDragDrop<ITask[] | any>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);

      event.container.data.map((item: ITask) => {
        const newObject = {
          id: item.id,
          description: item.description,
          name: item.name
        };

        this.taskService.updateTask(newObject, event.container.id, item.id as number).subscribe();
      });
    }
  }
}
