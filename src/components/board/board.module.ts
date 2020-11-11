import { BoardComponent } from './board.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [BoardComponent],
    exports: [BoardComponent]
})
export class BoardModule {}