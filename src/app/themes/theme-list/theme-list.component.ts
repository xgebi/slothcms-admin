import { Component, OnInit } from "@angular/core";
import { PostTypes } from "src/app/navigation/navigation.component";

@Component({
  selector: "app-theme-list",
  templateUrl: "./theme-list.component.html",
  styleUrls: ["./theme-list.component.scss"]
})
export class ThemeListComponent implements OnInit {
  public postTypes: PostTypes;

  constructor() { }

  ngOnInit() {
  }

}
