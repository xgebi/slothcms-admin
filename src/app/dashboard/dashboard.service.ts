import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoggedInDetails } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private dashboardUrl = "/api/dashboard-information";

  constructor(private http: HttpClient) { }

  getDashboardInformation() {
    const user: LoggedInDetails = JSON.parse(localStorage.getItem("sloth-user"));
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: user.uuid + ":" + user.token
      })
    };
    return this.http.get(this.dashboardUrl, httpOptions);
  }
}