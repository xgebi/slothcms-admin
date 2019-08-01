import { Component, OnInit } from "@angular/core";
import { PostsListService } from "./posts-list.service";
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: "app-posts-list",
  templateUrl: "./posts-list.component.html",
  styleUrls: ["./posts-list.component.scss"],
  providers: [PostsListService]
})
export class PostsListComponent implements OnInit {
  public error: any;
  private postTypeId: string;

  constructor(private postsListService: PostsListService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params): void => {
      this.postTypeId = params["id"];
    });
    this.postsListService.getPosts(this.postTypeId, null)
      .subscribe(
        (data) => {
          console.log(data);
        },
        error => this.error = error
      );
  }

}
