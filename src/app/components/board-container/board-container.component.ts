import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IBoard } from '../../interface/board.interface';
import { IForm } from '../../interface/form.interface';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-create-board',
  templateUrl: './board-container.component.html',
  styleUrls: ['./board-container.component.scss']
})
export class BoardContainerComponent implements OnInit {
  createBoardForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    idSprint: [this.data.idSprint]
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { idSprint: string, board: IBoard },
    private formBuilder: FormBuilder,
    private boardService: BoardService,
    private dialogRef: MatDialogRef<BoardContainerComponent>,
  ) {}

  ngOnInit(): void {
    this.verifyIfEditRegister();
  }

  verifyIfEditRegister(): void {
    if (this.data.board) {
      this.createBoardForm.get('name')?.setValue(this.data.board.name);
      this.createBoardForm.get('description')?.setValue(this.data.board.description);
    }
  }

  saveBoard(): void {
    if (this.createBoardForm.valid && !this.data.board) {
      this.boardService.saveBoard(this.getEntityFromForm(), this.data.idSprint).subscribe(item => {
        this.dialogRef.close(item);
      });
    }

    if (this.createBoardForm.valid && this.data.board) {
      this.boardService.updateBoard(this.getEntityFromForm(), this.data.board.id as number).subscribe(item => {
        this.dialogRef.close(item);
      });
    }
  }

  private getEntityFromForm(): IForm {
    const getFormName = this.createBoardForm.get('name');
    const getFormDescription = this.createBoardForm.get('description');
    const name = getFormName?.value;
    const description = getFormDescription?.value;

    return {
        name,
        description,
      };
  }
}
