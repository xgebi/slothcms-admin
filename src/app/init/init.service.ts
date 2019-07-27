import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Initialized {
  initialized: boolean
}

@Injectable({
  providedIn: 'root'
})
export class InitService {
  private initUrl = '/api/init';

  constructor(private http: HttpClient) { }

  getInitializationState() {
    return this.http.get(this.initUrl);
  }
}
