import { Component, OnInit } from "@angular/core";
import { PostsListService } from "./posts-list.service";

@Component({
  selector: "app-posts-list",
  templateUrl: "./posts-list.component.html",
  styleUrls: ["./posts-list.component.scss"],
  providers: [PostsListService]
})
export class PostsListComponent implements OnInit {
  public error: any;

  constructor(private postsListService: PostsListService) { }

  ngOnInit() {
    this.postsListService.getPosts(null)
      .subscribe(
        (data) => {
          console.log(data);
        },
        error => this.error = error
      );
  }

}
