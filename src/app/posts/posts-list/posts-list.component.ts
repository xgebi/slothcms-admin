import { Component, OnInit } from "@angular/core";
import { PostsListService } from "./posts-list.service";
import { ActivatedRoute, Params } from "@angular/router";
import { PostTypes } from "src/app/navigation/navigation.component";
import PostList from "src/app/models/post-list";
import { PostType } from "src/app/models/post-type";



@Component({
  selector: "app-posts-list",
  templateUrl: "./posts-list.component.html",
  providers: [PostsListService]
})
export class PostsListComponent implements OnInit {
  public error: any;
  public postTypeId: string;
  public postList: PostList;
  public postTypes: PostTypes;
  public currentPostType: PostType;

  constructor(private postsListService: PostsListService, private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params): void => {
      this.postTypeId = params["id"];
    });
    this.currentPostType = {
      uuid: "",
      displayName: ""
    };
  }

  ngOnInit() {
    this.postsListService.getPosts(this.postTypeId, null)
      .subscribe(
        (data: any) => {
          this.postList = data.posts;
          this.postTypes = data.postTypes;
          this.currentPostType = data.currentPostType;
        },
        error => this.error = error
      );
  }

  deletePost(id) {
    this.postsListService.deletePost(id)
      .subscribe(
        (data: any) => {
          this.postList = data.posts;
        },
        error => console.log(error)
      );
  }

  resetFilters() {
    this.postsListService.getPostsByStatus(this.currentPostType.uuid, "all")
      .subscribe(
        (data: any) => {
          this.postList = data.posts;
        },
        error => console.log(error)
      );
  }

  getPublishedPosts() {
    this.postsListService.getPostsByStatus(this.currentPostType.uuid, "published")
      .subscribe(
        (data: any) => {
          this.postList = data.posts;
        },
        error => console.log(error)
      );
  }

  getScheduledPosts() {
    this.postsListService.getPostsByStatus(this.currentPostType.uuid, "scheduled")
      .subscribe(
        (data: any) => {
          this.postList = data.posts;
        },
        error => console.log(error)
      );
  }

  getDraftedPosts() {
    this.postsListService.getPostsByStatus(this.currentPostType.uuid, "draft")
      .subscribe(
        (data: any) => {
          this.postList = data.posts;
        },
        error => console.log(error)
      );
  }

  getDeletedPosts() {
    this.postsListService.getPostsByStatus(this.currentPostType.uuid, "deleted")
      .subscribe(
        (data: any) => {
          this.postList = data.posts;
        },
        error => console.log(error)
      );
  }

}
