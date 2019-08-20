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

  uploadFile(type: string) {

  }
  /*
  let files = event.target.files;

    for (var i = 0, f; f = files[i]; i++) {
      var reader = new FileReader();

      reader.onload = ((theFile) => {
        return (e) => {
          let data = JSON.parse(e.target.result);
          if (!data.words) {
            this.setState({ wordsFormatError: true });
            return;
          }

          this.setState({
            words: data.words,
            original: data.originalLanguage,
            target: data.targetLanguage,
            wordsFormatError: false
          });
        };
      })(f);

      reader.readAsText(f);
    }
  */

}
