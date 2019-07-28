import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface UserDetails {
  username: string;
  password: string;
}

export interface LoggedInDetails {
  uuid: string;
  displayName: string;
  token: string;
  expiryTime: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = "/api/login";

  constructor(private http: HttpClient) { }

  login(user: UserDetails) {
    return this.http.post(this.loginUrl, user, { observe: 'response' });
  }
}
