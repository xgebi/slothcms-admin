import { Component, OnInit } from "@angular/core";
import { SiteSettingsService } from "./site-settings.service";
import { PostTypes } from "src/app/navigation/navigation.component";
import { Setting } from "src/app/models/setting";

@Component({
  selector: "app-site-settings",
  templateUrl: "./site-settings.component.html"
})
export class SiteSettingsComponent implements OnInit {
  public postTypes: PostTypes;
  public settings: Setting[];

  constructor(private siteSettingsService: SiteSettingsService) { }

  ngOnInit() {
    this.siteSettingsService.getSettingsPage()
      .subscribe(
        (data: any) => {
          this.postTypes = data.postTypes;
          this.settings = data.settings;
        },
        (error) => { console.log(error); }
      );
  }

  onSubmit(form: any) {
    this.siteSettingsService.saveSettings(this.settings)
      .subscribe(
        (data: any) => {
          this.settings = data.settings;
        },
        (error) => { console.log(error); }
      );
  }

}
