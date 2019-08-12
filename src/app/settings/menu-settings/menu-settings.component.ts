import { Component, OnInit } from "@angular/core";
import { MenuSettingsService } from "./menu-settings.service";
import { PostTypes } from "src/app/navigation/navigation.component";

@Component({
  selector: "app-menu-settings",
  templateUrl: "./menu-settings.component.html",
  styleUrls: ["./menu-settings.component.scss"],
  providers: [MenuSettingsService]
})
export class MenuSettingsComponent implements OnInit {
  public postTypes: PostTypes;

  constructor(private menuSettingsService: MenuSettingsService) { }

  ngOnInit() {
    this.menuSettingsService.getMenuPageInformation()
      .subscribe(
        (data: any) => {
          this.postTypes = data.postTypes;
        },
        error => console.log(error)
      );
  }

}
