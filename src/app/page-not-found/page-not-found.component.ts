import { Component, OnInit } from "@angular/core";
import { PageNotFoundService } from "./page-not-found.service";
import { PostTypes } from "../navigation/navigation.component";

@Component({
  selector: "app-page-not-found",
  templateUrl: "./page-not-found.component.html",
  styleUrls: ["./page-not-found.component.scss"],
  providers: [PageNotFoundService]
})
export class PageNotFoundComponent implements OnInit {
  public postTypes: PostTypes;

  constructor(private pnpService: PageNotFoundService) {
  }

  ngOnInit() {
    this.pnpService.getPageNotFoundInformation()
      .subscribe(
        (data: any) => {
          this.postTypes = data.postTypes;
        },
        error => console.log(error)
      );
  }

}
