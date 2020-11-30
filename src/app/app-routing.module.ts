import { SprintComponent } from './components/sprint/sprint.component';
import { BoardComponent } from './components/board/board.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: SprintComponent},
  {path: 'boards/:id', component: BoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
