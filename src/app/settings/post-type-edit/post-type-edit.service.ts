import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LoggedInDetails } from "src/app/login/login.service";

@Injectable({
  providedIn: "root"
})
export class PostTypeEditService {
  private postTypeUrlPrefix = "/api/post-type/";
  private postTypeUrlSuffix = "/detail";

  constructor(private http: HttpClient) { }

  getPostTypeDetail(postTypeId: string) {
    const user: LoggedInDetails = JSON.parse(localStorage.getItem("sloth-user"));
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: user.uuid + ":" + user.token
      })
    };
    return this.http.get(this.postTypeUrlPrefix + postTypeId + this.postTypeUrlSuffix, httpOptions);
  }
}
