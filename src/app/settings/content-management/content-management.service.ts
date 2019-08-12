import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LoggedInDetails } from "src/app/login/login.service";

@Injectable({
  providedIn: "root"
})
export class ContentManagementService {
  private httpOptions: any;

  private contentManagementUrlPrefix = "/api/content/";
  private contentManagementInformationUrlSuffix = "information";

  constructor(private http: HttpClient) {
    const user: LoggedInDetails = JSON.parse(localStorage.getItem("sloth-user"));
    this.httpOptions = {
      headers: new HttpHeaders({
        authorization: user.uuid + ":" + user.token
      })
    };
  }

  getContentManagementInformation() {
    return this.http.get(this.contentManagementUrlPrefix + this.contentManagementInformationUrlSuffix, this.httpOptions);
  }

}
