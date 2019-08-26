import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { PostEditService } from "./post-edit.service";
import { PostTypes } from "src/app/navigation/navigation.component";
import PostItem from "src/app/models/post-item";
import { Actions } from "src/app/models/actions";

@Component({
  selector: "app-post-edit",
  templateUrl: "./post-edit.component.html",
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
            this.publishDate = new Date(data.postInformation.publishDate);
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
              uuid: data.newPostUuid,
              postType: this.uuid
            };
          }),
          (error: any) => { console.log(error); }
        );
    }
  }

  regenareteSlug() {
    let temp: string = this.postInformation.title.toLocaleLowerCase();
    temp = temp.replace(/\s+/g, "-").replace(/[^0-9a-zA-Z\-]+/, "");
    this.postInformation.slug = temp;
  }

  savePost(publish: boolean) {
    this.postInformation.tags = this.tags.split(",");
    for (let i = 0; i < this.postInformation.tags.length; i++) {
      this.postInformation.tags[i] = this.postInformation.tags[i].trim();
    }

    this.postInformation.categories = this.categories.split(",");
    for (let i = 0; i < this.postInformation.categories.length; i++) {
      this.postInformation.categories[i] = this.postInformation.categories[i].trim();
    }

    if (this.action === Actions.edit) {
      this.postEditService.savePost(this.postInformation, publish)
        .subscribe(
          (data: any) => {
            console.log(data);
          },
          error => console.log(error)
        );
    }

    if (this.action === Actions.new) {
      this.postEditService.createNewPost(this.postInformation, publish)
        .subscribe(
          (data: any) => {
            console.log(data);
          },
          error => console.log(error)
        );
    }
  }

  blurred() {
    if (this.postInformation.title.length > 0) {
      this.regenareteSlug();
    }
  }

}
