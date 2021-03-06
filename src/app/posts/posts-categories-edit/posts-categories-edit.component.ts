import { Component, OnInit } from "@angular/core";
import { PostTypes } from "src/app/navigation/navigation.component";
import { ActivatedRoute, Params } from "@angular/router";
import { Actions } from "src/app/models/actions";
import { PostsCategoriesEditService } from "./posts-categories-edit.service";
import Category from "src/app/models/category";

@Component({
  selector: "app-posts-categories-edit",
  templateUrl: "./posts-categories-edit.component.html",
  providers: [PostsCategoriesEditService]
})
export class PostsCategoriesEditComponent implements OnInit {
  public postTypes: PostTypes;
  private action: Actions;
  public category: Category;

  constructor(private route: ActivatedRoute, private postsCategoriesEditService: PostsCategoriesEditService) {
    this.route
      .data
      .subscribe(v => this.action = v.action);
    this.route.params.subscribe((params: Params): void => {
      console.log(params);
    });
  }

  ngOnInit() {
  }

}
