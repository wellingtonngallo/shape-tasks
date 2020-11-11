import { SprintService } from './../../services/sprint.service';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-sprint',
    templateUrl: './sprint.component.html',
    styleUrls: ['./sprint.component.scss']
})
export class SprintComponent implements OnInit {
    constructor(
        private sprintService: SprintService
    ) {}

    ngOnInit() {
        this.getSprints();
    }

    getSprints() {
        this.sprintService.getSprints().subscribe(sprint => {
            debugger;
        })
    }
}