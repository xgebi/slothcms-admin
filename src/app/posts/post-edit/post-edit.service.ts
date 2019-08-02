import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoggedInDetails } from 'src/app/login/login.service';

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

  private editPostInfoUrlPrefix = "/api/post/edit/";
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
    return this.http.get(this.editPostInfoUrlPrefix + postId, this.httpOptions);
  }
}
