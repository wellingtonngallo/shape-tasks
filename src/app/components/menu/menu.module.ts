import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
    MatIconModule,
    MatButtonModule

  ],
  declarations: [MenuComponent],
  exports: [MenuComponent]
})
export class MenuModule {}
