import { Component, OnInit } from "@angular/core";
import { ContentManagementService } from "./content-management.service";
import { PostTypes } from "src/app/navigation/navigation.component";

@Component({
  selector: "app-content-management",
  templateUrl: "./content-management.component.html",
  styleUrls: ["./content-management.component.scss"],
  providers: [ContentManagementService]
})
export class ContentManagementComponent implements OnInit {
  public postTypes: PostTypes;

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

  getExportedContent(type: string) {

  }

}
