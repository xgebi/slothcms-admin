import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoggedInDetails } from '../login/login.service';
import { PostType } from '../navigation/navigation.component';

export default interface Draft {
  title: string;
  text?: string;
  postType: string;
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private dashboardUrl = "/api/dashboard-information";
  private dashboardCreateDraftUrl = "/api/dashboard-information/create-draft";

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

  createDraft(draft: Draft) {
    const user: LoggedInDetails = JSON.parse(localStorage.getItem("sloth-user"));
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: user.uuid + ":" + user.token
      })
    };
    return this.http.post(this.dashboardCreateDraftUrl, draft, httpOptions);
  }
}
