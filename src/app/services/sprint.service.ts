import { ApiService } from './../api/api.service';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ISprint } from '../interface/sprint.interface';

@Injectable({providedIn: 'root'})
export class SprintService {
    
    constructor(
        private httpClient: HttpClient,
        private apiService: ApiService
    ) {}

    getSprints() {
        return this.httpClient.get(`${this.apiService.getUrl()}/sprint`);
    }

    saveSprints(data: ISprint) {
        return this.httpClient.post(`${this.apiService.getUrl()}/sprint`, data);
    }

    deleteSprint(idSprint: string) {
        return this.httpClient.delete(`${this.apiService.getUrl()}/sprint/${idSprint}`);
    } 
}