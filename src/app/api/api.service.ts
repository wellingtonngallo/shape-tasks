import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ApiService {
  getUrl(): string {
    return 'http://localhost:3333';
  }
}
