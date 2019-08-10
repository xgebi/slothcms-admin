import { Component, OnInit } from "@angular/core";
import { DashboardService } from "./dashboard.service";
import { PostTypes } from "../navigation/navigation.component";
import PostList from "../models/post-list";

interface Draft {
  title: string;
  text: string;
}

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  public postTypes: PostTypes;
  public draft: Draft;
  public recentPosts: PostList;
  public upcomingPosts: PostList;
  public drafts: PostList;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getDashboardInformation()
      .subscribe(
        (data: any) => {
          this.postTypes = data.postTypes;
          this.recentPosts = data.recentPosts;
          this.upcomingPosts = data.upcomingPosts;
          this.drafts = data.drafts;
        },
        error => { console.log(error); }
      );
  }

}
