import { MenuComponent } from './menu.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule

    ],
    declarations: [MenuComponent],
    exports: [MenuComponent]
})
export class MenuModule {}