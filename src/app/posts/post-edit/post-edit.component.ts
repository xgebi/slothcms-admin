import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { PostEditService } from "./post-edit.service";
import { PostTypes } from "src/app/navigation/navigation.component";
import PostItem from "src/app/models/post-item";
import { Actions } from "src/app/models/actions";

@Component({
  selector: "app-post-edit",
  templateUrl: "./post-edit.component.html",
  styleUrls: ["./post-edit.component.scss"],
  providers: [PostEditService]
})
export class PostEditComponent implements OnInit {
  public uuid: string;
  private action: Actions;
  public postTypes: PostTypes;
  public postInformation: PostItem;
  public categories = "";
  public tags = "";
  public publishDate: Date;

  constructor(private route: ActivatedRoute, private postEditService: PostEditService) {
    this.route
      .data
      .subscribe(v => this.action = v.action);
    this.route.params.subscribe((params: Params): void => {
      console.log(params);
      this.uuid = params["id"];
    });
  }

  ngOnInit() {
    if (this.action === Actions.edit) {
      this.postEditService.getEditedPostInfo(this.uuid)
        .subscribe(
          ((data: any) => {
            this.postTypes = data.postTypes;
            this.postInformation = data.postInformation;
            this.categories = data.postInformation.categories.join(", ") || "";
            this.tags = data.postInformation.tags.join(", ") || "";
            this.publishDate = new Date(data.postInformation.publishDate * 1000);
          }),
          (error: any) => { console.log(error); }
        );
    }

    if (this.action === Actions.new) {
      this.postEditService.getNewPostInfo(this.uuid)
        .subscribe(
          ((data: any) => {
            console.log(data);
            this.postTypes = data.postTypes;
            this.postInformation = {
              uuid: data.newPostUuid
            };
          }),
          (error: any) => { console.log(error); }
        );
    }
  }

  regenareteSlug() {
    let temp: string = this.postInformation.title.toLocaleLowerCase();
    temp = temp.replace(/\s+/, "-").replace(/[^0-9a-zA-Z\-]+/, "");
    this.postInformation.slug = temp;
  }

}
