import { Component, OnInit } from "@angular/core";
import Category from "src/app/models/category";
import { PostTypes } from "src/app/navigation/navigation.component";
import { PostsCategoriesService } from "./posts-categories.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-posts-categories",
  templateUrl: "./posts-categories.component.html",
  styleUrls: ["./posts-categories.component.scss"],
  providers: [PostsCategoriesService]
})
export class PostsCategoriesComponent implements OnInit {
  public categories: Category[];
  public postTypes: PostTypes;
  public postTypeUuid: string;

  constructor(private postsCategoriesService: PostsCategoriesService, private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params): void => {
      this.postTypeUuid = params["id"];
    });
  }

  ngOnInit() {
    this.postsCategoriesService.getCategoriesInformation(this.postTypeUuid)
      .subscribe(
        (data: any) => {
          this.postTypes = data.postTypes;
          this.categories = data.categories;
        },
        error => console.log(error)
      );
  }

  deleteCategory(categoryUuid) {

  }

}
