import { Component, OnInit } from '@angular/core';
import { CreateSprintComponent } from './../create-sprint/create-sprint.component';
import { ISprint } from './../../interface/sprint.interface';
import { SprintService } from './../../services/sprint.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.scss']
})
export class SprintComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description', 'date', 'config'];
  sprints: ISprint[] = [];
  dataSource: any;
  loading = false;
  repeatLoad = 5;

  constructor(
    private sprintService: SprintService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getSprints();
  }

  getSprints(): void {
    this.sprints = [];
    this.loading = true;
    this.sprintService.getSprints().subscribe((sprints: ISprint[]) => {
      sprints.map((sprint: ISprint) => {
        this.loading = false;
        this.sprints.push(sprint);
        this.generateTableSource();
      });
    });
  }

  generateTableSource(): void {
    this.dataSource = new MatTableDataSource<ISprint>(this.sprints);
  }

  editSprint(idSprint: string): void {
    console.log(idSprint);
  }

  deleteSprint(idSprint: number): void {
    this.sprints = this.sprints.filter(item => {
      return item.id !== idSprint;
    });

    this.generateTableSource();
    this.sprintService.deleteSprint(idSprint).subscribe();
  }

  openSprintDialog(): void {
    this.dialog.open(CreateSprintComponent).afterClosed().subscribe(() => {
      this.getSprints();
    });
  }
}
