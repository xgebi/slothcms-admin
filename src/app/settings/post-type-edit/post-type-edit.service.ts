import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LoggedInDetails } from "src/app/login/login.service";
import { PostType } from "src/app/models/post-type";
import { Actions } from "src/app/models/actions";

@Injectable({
  providedIn: "root"
})
export class PostTypeEditService {
  private postTypeUrlPrefix = "/api/post-type/";
  private postTypeUrlSuffix = "/detail";
  private savePostTypeUrlSuffix = "save";
  private createPostTypeUrlSuffix = "new";

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

  savePostTypeDetail(postType: PostType, action: Actions) {
    const user: LoggedInDetails = JSON.parse(localStorage.getItem("sloth-user"));
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: user.uuid + ":" + user.token
      })
    };
    if (action === Actions.edit) {
      return this.http.put(this.postTypeUrlPrefix + this.savePostTypeUrlSuffix, postType, httpOptions);
    }
    return this.http.put(this.postTypeUrlPrefix + this.createPostTypeUrlSuffix, postType, httpOptions);
  }
}
