import { Component, OnInit } from "@angular/core";
import { PostTypes } from "src/app/navigation/navigation.component";
import { ActivatedRoute, Params } from "@angular/router";
import { Actions } from "src/app/models/actions";
import Category, { PostsCategoriesEditService } from "./posts-categories-edit.service";

@Component({
  selector: "app-posts-categories-edit",
  templateUrl: "./posts-categories-edit.component.html",
  styleUrls: ["./posts-categories-edit.component.scss"],
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
