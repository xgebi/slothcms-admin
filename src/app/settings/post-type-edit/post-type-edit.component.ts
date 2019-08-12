import { Component, OnInit } from "@angular/core";
import { PostTypes } from "src/app/navigation/navigation.component";
import { PostTypeEditService } from "./post-type-edit.service";
import { ActivatedRoute, Params } from "@angular/router";
import { PostType } from "src/app/models/post-type";
import { Actions } from "src/app/models/actions";

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
  public action: Actions;

  constructor(private postTypeEditService: PostTypeEditService, private route: ActivatedRoute) {
    this.route
      .data
      .subscribe(v => this.action = v.action);

    this.route.params.subscribe((params: Params): void => {
      this.postTypeId = params["postTypeId"];
    });
  }

  ngOnInit() {
    this.postTypeEditService.getPostTypeDetail(this.postTypeId)
      .subscribe(
        (data: any) => {
          this.postTypes = data.postTypes;
          this.postType = data.postTypeDetail;
        }
      );
  }

  onSubmit(form: any) {
    this.postTypeEditService.savePostTypeDetail(this.postType, this.action)
      .subscribe(
        (data: any) => {
          this.postType = data.postType;
        },
        error => console.log(error)
      );
  }

  regenareteSlug() {
    let temp: string = this.postType.displayName.toLocaleLowerCase();
    temp = temp.replace(/\s+/, "-").replace(/[^0-9a-zA-Z\-]+/, "");
    this.postType.slug = temp;
  }

}
