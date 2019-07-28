import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface MinimalUser {
  uuid: string;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private loginRefreshUrl = "/api/login-refresh";
  private logoutUrl = "/api/logout";

  constructor(private http: HttpClient) { }

  refreshLogin(user: MinimalUser) {
    return this.http.put(this.loginRefreshUrl, user);
  }

  logout(user: MinimalUser) {
    return this.http.put(this.logoutUrl, user);
  }
}
