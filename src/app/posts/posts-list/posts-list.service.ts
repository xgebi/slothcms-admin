import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PostTypes } from 'src/app/navigation/navigation.component';

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
  private postsListUrl = "/api/posts";


  constructor(private http: HttpClient) { }

  getPosts(postListQuery: PostsListQuery) {
    return this.http.post(this.postsListUrl, postListQuery);
  }
}
