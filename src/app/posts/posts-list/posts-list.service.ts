import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export interface PostsListQuery {
  userUuid: string;
  token: string;
  postTypeUuid: string;
  postStatus?: string;
}

@Injectable({
  providedIn: "root"
})
export class PostsListService {
  private postsListUrl = "/api/posts";


  constructor(private http: HttpClient) { }

  getPosts(postListQuery: PostsListQuery) {
    return this.http.post(this.postsListUrl, postListQuery);
  }
}
