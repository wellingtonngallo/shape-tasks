import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from './../../services/board.service';
import { TaskService } from './../../services/task.service';
import { IBoard } from '../../interface/board.interface';
import { MatDialog } from '@angular/material/dialog';
import { CreateBoardComponent } from '../create-board/create-board.component';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ITask } from 'src/app/interface/task.interface';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  boards: IBoard[] = [];
  loading = false;

  constructor(
    private boardService: BoardService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.getBoards();
  }

  getBoards(): void {
    this.loading = true;
    this.boardService.getBoard(this.route.snapshot.params.id).subscribe((board: IBoard[]) => {
      this.boards = board;
      this.loading = false;
    });
  }

  createBoard(): void {
    this.dialog.open(CreateBoardComponent, { data: {
      idSprint: this.route.snapshot.params.id
    }}).afterClosed().subscribe(() => {
      this.getBoards();
    });
  }

  dropTask(event: CdkDragDrop<ITask[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);

      event.container.data.map((item: any) => {
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
