import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LoggedInDetails } from "src/app/login/login.service";

@Injectable({
  providedIn: "root"
})
export class MenuSettingsService {
  private httpOptions: any;

  private menuUrlPrefix = "/api/content/";
  private menuInformationUrlSuffix = "information";

  constructor(private http: HttpClient) {
    const user: LoggedInDetails = JSON.parse(localStorage.getItem("sloth-user"));
    this.httpOptions = {
      headers: new HttpHeaders({
        authorization: user.uuid + ":" + user.token
      })
    };
  }

  getMenuPageInformation() {
    return this.http.get(this.menuUrlPrefix + this.menuInformationUrlSuffix, this.httpOptions);
  }
}
