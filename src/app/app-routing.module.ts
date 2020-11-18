import { SprintModule } from './components/sprint/sprint.module';
import { SprintComponent } from './components/sprint/sprint.component';
import { BoardModule } from './components/board/board.module';
import { BoardComponent } from './components/board/board.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: SprintComponent},
  {path: 'board', component: BoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
