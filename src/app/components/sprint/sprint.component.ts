import { CreateSprintComponent } from './../create-sprint/create-sprint.component';
import { ISprint } from './../../interface/sprint.interface';
import { SprintService } from './../../services/sprint.service';
import { Component, OnInit } from "@angular/core";
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

    constructor(
        private sprintService: SprintService,
        private dialog: MatDialog
    ) {}

    ngOnInit() {
        this.getSprints();
    }

    getSprints() {
        this.sprintService.getSprints().subscribe((sprints: any) => {
            sprints.map((sprint: ISprint) => {
                this.sprints.push(sprint);
                this.generateTableSource();
            });
        });
    }

    generateTableSource() {
        this.dataSource = new MatTableDataSource<ISprint>(this.sprints);
    }

    editSprint(idSprint: string) {
        console.log(idSprint);
    }

    deleteSprint(idSprint: string) {
        this.sprints = this.sprints.filter(item => {
            return item._id !== idSprint
        });

        this.generateTableSource();
        this.sprintService.deleteSprint(idSprint).subscribe();
    }

    openSprintDialog() {
        this.dialog.open(CreateSprintComponent).afterClosed().subscribe((sprint: ISprint) => {
            if (sprint) {
                this.sprints.push(sprint);
                this.generateTableSource();
            }
        });
    }
}