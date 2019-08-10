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

  constructor(private dashboardService: DashboardService) {
    this.recentPosts = {
      postList: []
    };
    this.upcomingPosts = {
      postList: []
    };
    this.drafts = {
      postList: []
    };
    this.draft = {
      title: "",
      text: ""
    }
  }

  ngOnInit() {
    this.dashboardService.getDashboardInformation()
      .subscribe(
        (data: any) => {
          this.postTypes = data.postTypes;
          this.recentPosts.postList = data.recentPosts;
          this.upcomingPosts.postList = data.upcomingPosts;
          this.drafts.postList = data.drafts;
        },
        error => { console.log(error); }
      );
  }

}
