import { Component, OnInit } from "@angular/core";
import { PostTypeSettingsService } from "./post-type-settings.service";
import { PostTypes } from "src/app/navigation/navigation.component";

@Component({
  selector: "app-post-type-settings",
  templateUrl: "./post-type-settings.component.html",
  providers: [PostTypeSettingsService]
})
export class PostTypeSettingsComponent implements OnInit {
  public postTypes: PostTypes;

  constructor(private postTypeSettingsService: PostTypeSettingsService) { }

  ngOnInit() {
    this.postTypeSettingsService.getPostTypePageInformation()
      .subscribe(
        (data: any) => {
          this.postTypes = data.postTypes;
        },
        error => console.log(error)
      );
  }

  deletePostType(postTypeID) {

  }
}
