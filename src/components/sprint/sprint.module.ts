import { SprintComponent } from './sprint.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [SprintComponent],
    exports: [SprintComponent]
})
export class SprintModule {}