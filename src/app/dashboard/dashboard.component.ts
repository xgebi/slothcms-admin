import { Component, OnInit } from "@angular/core";
import Draft, { DashboardService } from "./dashboard.service";
import { PostTypes } from "../navigation/navigation.component";
import PostList from "../models/post-list";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html"
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
      text: "",
      postType: null
    };
  }

  ngOnInit() {
    this.dashboardService.getDashboardInformation()
      .subscribe(
        (data: any) => {
          this.postTypes = data.postTypes;
          this.draft.postType = data.postTypes[0].uuid;
          this.recentPosts.postList = data.recentPosts;
          this.upcomingPosts.postList = data.upcomingPosts;
          this.drafts.postList = data.drafts;
        },
        error => { console.log(error); }
      );
  }

  onSubmit(form) {
    this.dashboardService.createDraft(this.draft)
      .subscribe(
        (data: any) => {
          this.drafts.postList = data.drafts;
        },
        error => {
          console.log(error);
        }
      );
    this.draft = {
      title: "",
      text: "",
      postType: null
    };
  }

}
