import { Injectable } from '@angular/core';
import { ApiService } from './../api/api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBoard } from '../interface/board.interface';
import { map } from 'rxjs/operators';
import { ITask } from '../interface/task.interface';

@Injectable({providedIn: 'root'})
export class TaskService {
  constructor(
    private httpClient: HttpClient,
    private apiService: ApiService
  ) {}

  getTask(idBoard: number): Observable<any[]> {
    return this.httpClient.get(`${this.apiService.getUrl()}/task/${idBoard}`).pipe(
      map(response => response as any[])
    );
  }


  updateTask(data: ITask, idBoard: number | string, idTask: number): Observable<ITask> {
    return this.httpClient.put(`${this.apiService.getUrl()}/tasks/${idBoard}/${idTask}`, data).pipe(
      map(response => response as ITask)
    );
  }
}
