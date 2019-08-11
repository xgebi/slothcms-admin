import { Component, OnInit } from "@angular/core";
import { PostTypes } from "src/app/navigation/navigation.component";
import { ThemeListService } from "./theme-list.service";
import ThemeInformation from "src/app/models/theme-information";

@Component({
  selector: "app-theme-list",
  templateUrl: "./theme-list.component.html",
  styleUrls: ["./theme-list.component.scss"],
  providers: [ThemeListService]
})
export class ThemeListComponent implements OnInit {
  public postTypes: PostTypes;
  public themes: ThemeInformation[];

  constructor(private themeListService: ThemeListService) { }

  ngOnInit() {
    this.themeListService.getThemesListInformation()
      .subscribe(
        (data: any) => {
          this.postTypes = data.postTypes;
          this.themes = data.themes;
        },
        error => {
          console.log(error);
        }
      );
  }

  useTheme(themeName: string) {
    this.themeListService.useTheme(themeName)
      .subscribe(
        (data: any) => {
          console.log(data);
        },
        error => console.log(error)
      );
  }

}
