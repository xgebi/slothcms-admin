import { Component, OnInit } from "@angular/core";
import { ContentManagementService } from "./content-management.service";
import { PostTypes } from "src/app/navigation/navigation.component";

@Component({
  selector: "app-content-management",
  templateUrl: "./content-management.component.html",
  providers: [ContentManagementService]
})
export class ContentManagementComponent implements OnInit {
  public postTypes: PostTypes;
  public wordpressFile: any;
  public wpFile: any;

  constructor(private contentManagementService: ContentManagementService) { }

  ngOnInit() {
    this.contentManagementService.getContentManagementInformation()
      .subscribe(
        (data: any) => {
          this.postTypes = data.postTypes;
        },
        error => console.log(error)
      );
  }

  fileToUpload(event: any) {
    const files = event.target.files;

    for (var i = 0, f; f = files[i], i < 1; i++) {
      const reader: any = new FileReader();

      reader.onload = ((theFile) => {
        this.wordpressFile = theFile;
      })(f);

      reader.readAsText(f);
    }
  }

  uploadFile() {
    this.contentManagementService.uploadWordpressFile(this.wordpressFile)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.wpFile = null;
        },
        error => console.log(error)
      );
  }
}
