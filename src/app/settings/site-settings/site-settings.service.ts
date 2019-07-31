import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoggedInDetails } from 'src/app/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class SiteSettingsService {
  private siteSettingsUrl = "/api/settings";

  constructor(private http: HttpClient) { }

  getSettingsPage() {
    const user: LoggedInDetails = JSON.parse(localStorage.getItem("sloth-user"));
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: user.uuid + ":" + user.token
      })
    };
    return this.http.get(this.siteSettingsUrl, httpOptions);
  }
}
