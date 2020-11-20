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
    return this.httpClient.get(`${this.apiService.getUrl()}/sprint`).pipe(
      map(response => response as ISprint[])
    );
  }

  saveSprints(data: ISprint): Observable<ISprint> {
    return this.httpClient.post(`${this.apiService.getUrl()}/sprint`, data).pipe(
      map(response => response as ISprint)
    );
  }

  deleteSprint(idSprint: string): Observable<ISprint> {
    return this.httpClient.delete(`${this.apiService.getUrl()}/sprint/${idSprint}`).pipe(
      map(response => response as ISprint)
    );
  }
}
