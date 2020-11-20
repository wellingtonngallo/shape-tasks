import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from './../../services/board.service';
import { IBoard } from '../../interface/board.interface';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  boards: IBoard[] = [];

  constructor(
    private boardService: BoardService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getBoards();
  }

  getBoards(): void {
    this.boardService.getBoard(this.route.snapshot.params.id).subscribe((board: IBoard[]) => {
      this.boards = board;
    });
  }
}
