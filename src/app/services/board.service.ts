import { Injectable } from '@angular/core';
import { ApiService } from './../api/api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBoard } from '../interface/board.interface';
import { IApiRequest } from '../interface/api-request.interface';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class BoardService {
  constructor(
    private httpClient: HttpClient,
    private apiService: ApiService
  ) {}

  getBoard(idSprint: string): Observable<IBoard[]> {
    return this.httpClient.get(`${this.apiService.getUrl()}/boards/${idSprint}`).pipe(
      map(response => response as IBoard[])
    );
  }

  saveBoard(data: IBoard, idSprint: string): Observable<IApiRequest> {
    return this.httpClient.post(`${this.apiService.getUrl()}/boards/${idSprint}`, data).pipe(
      map(response => response as IApiRequest)
    );
  }

  updateBoard(data: IBoard, idBoard: number): Observable<IBoard> {
    return this.httpClient.put(`${this.apiService.getUrl()}/boards/${idBoard}`, data).pipe(
      map(response => response as IBoard)
    );
  }

  deleteBoard(idBoard: number): Observable<IApiRequest> {
    return this.httpClient.delete(`${this.apiService.getUrl()}/boards/${idBoard}`).pipe(
      map(response => response as IApiRequest)
    );
  }
}
