import { Injectable } from '@angular/core';
import { ApiService } from './../api/api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBoard } from '../interface/board.interface';
import { map } from 'rxjs/operators';
import { ITask } from '../interface/task.interface';
import { IApiRequest } from '../interface/api-request.interface';

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

  saveTask(data: ITask, idBoard: number): Observable<IApiRequest> {
    return this.httpClient.post(`${this.apiService.getUrl()}/tasks/${idBoard}`, data).pipe(
      map(response => response as IApiRequest)
    );
  }

  updateTask(data: ITask, idBoard: number | string, idTask: number): Observable<ITask> {
    return this.httpClient.put(`${this.apiService.getUrl()}/tasks/${idBoard}/${idTask}`, data).pipe(
      map(response => response as ITask)
    );
  }

  deleteTask(idTask: number): Observable<IApiRequest> {
    return this.httpClient.delete(`${this.apiService.getUrl()}/tasks/${idTask}`).pipe(
      map(response => response as IApiRequest)
    );
  }
}
