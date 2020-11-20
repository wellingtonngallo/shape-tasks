import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ApiService {
    getUrl(): string {
        return 'https://shape-tasks-api.herokuapp.com/api';
    }
}