import { Injectable } from '@angular/core';
import { ApiService } from './../api/api.service';
import { HttpClient } from '@angular/common/http';
import { ISprint } from '../interface/sprint.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IApiRequest } from '../interface/api-request.interface';

@Injectable({providedIn: 'root'})
export class SprintService {
  constructor(
    private httpClient: HttpClient,
    private apiService: ApiService
  ) {}

  getSprints(): Observable<ISprint[]> {
    return this.httpClient.get(`${this.apiService.getUrl()}/sprints`).pipe(
      map(response => response as ISprint[])
    );
  }

  getSprintById(idSprint: number): Observable<ISprint> {
    return this.httpClient.get(`${this.apiService.getUrl()}/sprints/${idSprint}`).pipe(
      map(response => response as ISprint)
    );
  }

  saveSprints(data: ISprint): Observable<IApiRequest> {
    return this.httpClient.post(`${this.apiService.getUrl()}/sprints`, data).pipe(
      map(response => response as IApiRequest)
    );
  }

  updateSprints(data: ISprint, sprintId: number): Observable<IApiRequest> {
    return this.httpClient.put(`${this.apiService.getUrl()}/sprints/${sprintId}`, data).pipe(
      map(response => response as IApiRequest)
    );
  }

  deleteSprint(idSprint: number): Observable<IApiRequest> {
    return this.httpClient.delete(`${this.apiService.getUrl()}/sprints/${idSprint}`).pipe(
      map(response => response as IApiRequest)
    );
  }
}
