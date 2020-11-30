import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IBoardForm } from '../../interface/board-form.interface';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.scss']
})
export class CreateBoardComponent {
  createBoardForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    idSprint: [this.data.idSprint]
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { idSprint: string },
    private formBuilder: FormBuilder,
    private boardService: BoardService,
    private dialogRef: MatDialogRef<CreateBoardComponent>,
  ) {}

  saveBoard(): void {
    if (this.createBoardForm.valid) {
      this.boardService.saveBoard(this.getEntityFromForm(), this.data.idSprint).subscribe(item => {
        this.dialogRef.close(item);
      });
    }
  }

  private getEntityFromForm(): any {
    const getFormName = this.createBoardForm.get('name');
    const getFormDescription = this.createBoardForm.get('description');
    const name = getFormName?.value;
    const description = getFormDescription?.value;

    return {
        name,
        description
      };
  }
}
