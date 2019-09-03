import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LoggedInDetails } from "src/app/login/login.service";
import PostItem from "src/app/models/post-item";

@Injectable({
  providedIn: "root"
})
export class PostEditService {
  private newPostInfoUrlPrefix = "/api/posts/";
  private newPostInfoUrlSuffix = "/new";

  private editPostInfoUrlPrefix = "/api/post/";
  private editPostInfoUrlSuffix = "/edit";
  private httpOptions: any;
  private user: LoggedInDetails;

  constructor(private http: HttpClient) {
    this.user = JSON.parse(localStorage.getItem("sloth-user"));
    this.httpOptions = {
      headers: new HttpHeaders({
        authorization: this.user.uuid + ":" + this.user.token
      })
    };
  }

  getNewPostInfo(postTypeId: string) {
    return this.http.get(this.newPostInfoUrlPrefix + postTypeId + this.newPostInfoUrlSuffix, this.httpOptions);
  }

  getEditedPostInfo(postId: string) {
    return this.http.get(this.editPostInfoUrlPrefix + postId + this.editPostInfoUrlSuffix, this.httpOptions);
  }

  savePost(postInfo: PostItem, publish: boolean) {
    return this.http.put("/api/post/save", { postInfo, publish }, this.httpOptions);
  }

  createNewPost(postInfo: PostItem, publish: boolean) {
    postInfo.author = this.user.uuid;
    return this.http.post("/api/post/create", { postInfo, publish }, this.httpOptions);
  }

  uploadImage(image: FormData) {
    this.httpOptions.headers.append("Content-Type", "multipart/form-data");
    this.httpOptions.headers.append("Accept", "application/json");
    return this.http.post("/api/upload-image", image, this.httpOptions);
  }
}
