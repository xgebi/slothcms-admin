import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoggedInDetails } from 'src/app/login/login.service';
import PostItem from 'src/app/models/post-item';

export enum PostActions {
  new,
  edit
}

@Injectable({
  providedIn: 'root'
})
export class PostEditService {
  private newPostInfoUrlPrefix = "/api/posts/";
  private newPostInfoUrlSuffix = "/new";

  private editPostInfoUrlPrefix = "/api/post/";
  private editPostInfoUrlSuffix = "/edit";
  private httpOptions: any;

  constructor(private http: HttpClient) {
    const user: LoggedInDetails = JSON.parse(localStorage.getItem("sloth-user"));
    this.httpOptions = {
      headers: new HttpHeaders({
        authorization: user.uuid + ":" + user.token
      })
    };
  }

  getNewPostInfo(postTypeId: string) {
    return this.http.get(this.newPostInfoUrlPrefix + postTypeId + this.newPostInfoUrlSuffix, this.httpOptions);
  }

  getEditedPostInfo(postId: string) {
    return this.http.get(this.editPostInfoUrlPrefix + postId + this.editPostInfoUrlSuffix, this.httpOptions);
  }

  savePost(postInfo: PostItem) {
    return this.http.put("/api/post/save", postInfo, this.httpOptions);
  }

  createNewPost(postInfo: PostItem) {
    return this.http.post("/api/post/create", postInfo, this.httpOptions);
  }
}
