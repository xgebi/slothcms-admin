import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { PostEditService } from "./post-edit.service";
import { PostTypes } from "src/app/navigation/navigation.component";
import PostItem from "src/app/models/post-item";
import { Actions } from "src/app/models/actions";
import { LoggedInDetails } from 'src/app/login/login.service';

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
  public publishDate?: Date;
  public galleryList: string[];
  public thumbnailFile: any;
  private user: LoggedInDetails;
  private afuConfig: any;
  public imageToUpload: any;
  private uploadedImage;

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
            this.galleryList = data.galleryList;
          }),
          (error: any) => { console.log(error); }
        );
    }

    if (this.action === Actions.new) {
      this.postEditService.getNewPostInfo(this.uuid)
        .subscribe(
          ((data: any) => {
            this.postTypes = data.postTypes;
            this.postInformation = {
              uuid: data.newPostUuid,
              postType: this.uuid
            };
            this.galleryList = data.galleryList;
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

    this.postInformation.publishDate = this.publishDate ? this.publishDate.getMilliseconds().toString() : "";

    if (this.action === Actions.edit) {
      this.postEditService.savePost(this.postInformation, publish)
        .subscribe(
          (data: any) => {
            this.postInformation = data.postInformation;
            this.tags = this.postInformation.tags.join(", ");
            this.categories = this.postInformation.categories.join(", ");
            this.publishDate = new Date(this.postInformation.publishDate);
          },
          error => console.log(error)
        );
    }

    if (this.action === Actions.new) {
      this.postEditService.createNewPost(this.postInformation, publish)
        .subscribe(
          (data: any) => {
            this.postInformation = data.postInformation;
            this.tags = this.postInformation.tags.join(", ");
            this.categories = this.postInformation.categories.join(", ");
          },
          error => console.log(error)
        );
    }
  }

  blurred() {
    if (this.postInformation.title.length > 0 && (!this.postInformation.slug || this.postInformation.slug.length === 0)) {
      this.regenareteSlug();
    }
  }
  uploadImage(event: any) {
    this.imageToUpload = null;
    this.postEditService.uploadFile(this.uploadedImage)
      .subscribe(
        (data: any) => {
          this.galleryList = data.galleryList;
        },
        error => console.log(error)
      )
  }

  fileWasAdded(event: any) {
    let files = event.target.files;

    for (var i = 0, f; f = files[i], i < 1; i++) {
      let reader: any = new FileReader();

      reader.onload = ((theFile) => {
        this.uploadedImage = theFile;
      })(f);

      reader.readAsBinaryString(f);
    }
  }

}
