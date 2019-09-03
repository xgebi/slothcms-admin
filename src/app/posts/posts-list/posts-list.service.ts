import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { PostTypes } from "src/app/navigation/navigation.component";
import { LoggedInDetails } from "src/app/login/login.service";

export interface PostsListQuery {
  postTypes: PostTypes;
  userUuid: string;
  token: string;
  postTypeUuid: string;
  postStatus?: string;
}

@Injectable({
  providedIn: "root"
})
export class PostsListService {
  private postsListUrlPrefix = "/api/posts/";
  private postsListUrlSuffix = "/list";
  private deletePostSuffix = "/delete";


  constructor(private http: HttpClient) { }

  getPosts(id: string, postListQuery: PostsListQuery) {
    const user: LoggedInDetails = JSON.parse(localStorage.getItem("sloth-user"));
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: user.uuid + ":" + user.token
      })
    };
    return this.http.get(this.postsListUrlPrefix + id + this.postsListUrlSuffix, httpOptions);
  }

  getPostsByStatus(id: string, status: string) {
    const user: LoggedInDetails = JSON.parse(localStorage.getItem("sloth-user"));
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: user.uuid + ":" + user.token
      })
    };
    return this.http.get(this.postsListUrlPrefix + id + this.postsListUrlSuffix + "/" + status, httpOptions);
  }

  deletePost(id: string) {
    const user: LoggedInDetails = JSON.parse(localStorage.getItem("sloth-user"));
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: user.uuid + ":" + user.token
      })
    };
    return this.http.delete(this.postsListUrlPrefix + id + this.deletePostSuffix, httpOptions);
  }
}
