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
  private createPostTypeUrlSuffix = "create";
  private newPostTypeUrlSuffix = "new";

  private user: LoggedInDetails;
  private httpOptions: any;

  constructor(private http: HttpClient) {
    this.user = JSON.parse(localStorage.getItem("sloth-user"));
    this.httpOptions = {
      headers: new HttpHeaders({
        authorization: this.user.uuid + ":" + this.user.token
      })
    };
  }

  getEditedPostTypeDetail(postTypeId: string) {
    return this.http.get(this.postTypeUrlPrefix + postTypeId + this.postTypeUrlSuffix, this.httpOptions);
  }

  savePostTypeDetail(postType: PostType, action: Actions) {
    if (action === Actions.edit) {
      return this.http.put(this.postTypeUrlPrefix + this.savePostTypeUrlSuffix, postType, this.httpOptions);
    }
    return this.http.put(this.postTypeUrlPrefix + this.createPostTypeUrlSuffix, postType, this.httpOptions);
  }

  getNewPostTypeInfo() {
    return this.http.get(this.postTypeUrlPrefix + this.newPostTypeUrlSuffix, this.httpOptions);
  }
}
