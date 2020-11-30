import { SprintModule } from './components/sprint/sprint.module';
import { EmptyStateModule } from './components/empty-state/empty-state.module';
import { MenuModule } from './components/menu/menu.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { TaskModule } from './components/tasks/task.module';
import { BoardModule } from './components/board/board.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    BrowserAnimationsModule,
    EmptyStateModule,
    MatButtonModule,
    SprintModule,
    TaskModule,
    BoardModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
