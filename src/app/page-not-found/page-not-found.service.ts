import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LoggedInDetails } from "../login/login.service";

@Injectable({
  providedIn: "root"
})
export class PageNotFoundService {
  private pageNotFoundInfoUrl = "/api/page-not-found-information";

  private httpOptions: any;

  constructor(private http: HttpClient) {
    const user: LoggedInDetails = JSON.parse(localStorage.getItem("sloth-user"));
    this.httpOptions = {
      headers: new HttpHeaders({
        authorization: user.uuid + ":" + user.token
      })
    };
  }

  getPageNotFoundInformation() {
    return this.http.get(this.pageNotFoundInfoUrl, this.httpOptions);
  }
}
