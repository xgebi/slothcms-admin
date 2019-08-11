import { Component, OnInit } from "@angular/core";
import { PostTypes } from "src/app/navigation/navigation.component";
import { PostTypeEditService } from "./post-type-edit.service";
import { ActivatedRoute, Params } from "@angular/router";
import { PostType } from "src/app/models/post-type";

@Component({
  selector: "app-post-type-edit",
  templateUrl: "./post-type-edit.component.html",
  styleUrls: ["./post-type-edit.component.scss"],
  providers: [PostTypeEditService]
})
export class PostTypeEditComponent implements OnInit {
  public postTypes: PostTypes;
  public postTypeId: string;
  public postType: PostType;

  constructor(private postTypeEditService: PostTypeEditService, private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params): void => {
      this.postTypeId = params["postTypeID"];
    });
  }

  ngOnInit() {
    this.postTypeEditService.getPostTypeDetail(this.postTypeId)
      .subscribe(
        (data: any) => {
          this.postTypes = data.postTypes;
        }
      );
  }

}
