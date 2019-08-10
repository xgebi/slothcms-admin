import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoggedInDetails } from 'src/app/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class SiteSettingsService {
  private siteSettingsUrl = "/api/settings";
  private saveSiteSettingsUrl = "/api/settings/save";

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

  saveSettings(settings) {
    const user: LoggedInDetails = JSON.parse(localStorage.getItem("sloth-user"));
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: user.uuid + ":" + user.token
      })
    };
    return this.http.post(this.saveSiteSettingsUrl, settings, httpOptions);
  }
}
