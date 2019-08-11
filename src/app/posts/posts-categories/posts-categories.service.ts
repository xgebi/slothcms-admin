import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LoggedInDetails } from "src/app/login/login.service";

@Injectable({
  providedIn: "root"
})
export class PostsCategoriesService {
  private categoriesUrlPrefix = "/api/posts/";
  private categoriesUrlMidfix = "/categories-information";

  constructor(private http: HttpClient) { }

  getCategoriesInformation(postTypeUuid: string) {
    const user: LoggedInDetails = JSON.parse(localStorage.getItem("sloth-user"));
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: user.uuid + ":" + user.token
      })
    };
    return this.http.get(this.categoriesUrlPrefix + postTypeUuid + this.categoriesUrlMidfix, httpOptions);
  }
}
