import { Injectable } from '@angular/core';
import { ApiService } from './../api/api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBoard } from '../interface/board.interface';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class TaskService {
  constructor(
    private httpClient: HttpClient,
    private apiService: ApiService
  ) {}

  getTask(idBoard: string): Observable<any[]> {
    return this.httpClient.get(`${this.apiService.getUrl()}/task/${idBoard}`).pipe(
      map(response => response as any[])
    );
  }

}
