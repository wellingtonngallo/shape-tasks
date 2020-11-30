import { Injectable } from '@angular/core';
import { ApiService } from './../api/api.service';
import { HttpClient } from '@angular/common/http';
import { ISprint } from '../interface/sprint.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  saveSprints(data: ISprint): Observable<ISprint> {
    return this.httpClient.post(`${this.apiService.getUrl()}/sprints`, data).pipe(
      map(response => response as ISprint)
    );
  }

  deleteSprint(idSprint: number): Observable<ISprint> {
    return this.httpClient.delete(`${this.apiService.getUrl()}/sprints/${idSprint}`).pipe(
      map(response => response as ISprint)
    );
  }
}
