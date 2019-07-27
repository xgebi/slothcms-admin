import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface RegistrationDetails {
  username: string;
  password: string;
  email: string;
  sitename: string;
}

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private registrationUrl = "/api/register";

  constructor(private http: HttpClient) { }

  register(details: RegistrationDetails) {
    return this.http.post(this.registrationUrl, details);
  }
}
