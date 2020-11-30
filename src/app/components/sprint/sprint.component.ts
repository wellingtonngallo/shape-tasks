import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { SprintContainerComponent } from '../sprint-container/sprint-container.component';
import { ISprint } from './../../interface/sprint.interface';
import { SprintService } from './../../services/sprint.service';

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.scss']
})
export class SprintComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description', 'date', 'config'];
  sprints: ISprint[] = [];
  dataSource = new MatTableDataSource<ISprint>(this.sprints);
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
        this.sprints.push(sprint);
        this.generateTableSource();
      });
      this.loading = false;
    });
  }

  generateTableSource(): void {
    this.dataSource = new MatTableDataSource<ISprint>(this.sprints);
  }

  deleteSprint(idSprint: number): void {
    this.sprints = this.sprints.filter(item => {
      return item.id !== idSprint;
    });

    this.generateTableSource();
    this.sprintService.deleteSprint(idSprint).subscribe();
  }

  openSprintDialog(): void {
    this.dialog.open(SprintContainerComponent).afterClosed().subscribe(result => {
      if (result) {
        this.getSprints();
      }
    });
  }

  editSprint(data: ISprint): void {
    this.dialog.open(SprintContainerComponent, {data}).afterClosed().subscribe(result => {
      if (result) {
        this.getSprints();
      }
    });
  }
}
