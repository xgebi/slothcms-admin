import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LoggedInDetails } from "src/app/login/login.service";

@Injectable({
  providedIn: "root"
})
export class PostTypeSettingsService {
  private postTypeList = "/api/post-type-information";

  constructor(private http: HttpClient) { }

  getPostTypePageInformation() {
    const user: LoggedInDetails = JSON.parse(localStorage.getItem("sloth-user"));
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: user.uuid + ":" + user.token
      })
    };
    return this.http.get(this.postTypeList, httpOptions);
  }
}
