import { Component, OnInit } from "@angular/core";
import { PostsListService } from "./posts-list.service";
import { ActivatedRoute, Params } from '@angular/router';
import { PostTypes } from 'src/app/navigation/navigation.component';
import PostItem from 'src/app/models/post-item';

interface PostList {
  postList: PostItem[];
}


@Component({
  selector: "app-posts-list",
  templateUrl: "./posts-list.component.html",
  styleUrls: ["./posts-list.component.scss"],
  providers: [PostsListService]
})
export class PostsListComponent implements OnInit {
  public error: any;
  public postTypeId: string;
  public postList: PostList;
  public postTypes: PostTypes;

  constructor(private postsListService: PostsListService, private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params): void => {
      this.postTypeId = params["id"];
    });
  }

  ngOnInit() {
    this.postsListService.getPosts(this.postTypeId, null)
      .subscribe(
        (data: any) => {
          this.postList = data.posts;
          this.postTypes = data.postTypes;
        },
        error => this.error = error
      );
  }

}
