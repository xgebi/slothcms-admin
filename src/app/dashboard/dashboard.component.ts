import { Component, OnInit } from "@angular/core";
import { DashboardService } from "./dashboard.service";
import { PostTypes } from '../navigation/navigation.component';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  public postTypes: PostTypes;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getDashboardInformation()
      .subscribe(
        (data: any) => { this.postTypes = data.postTypes; },
        error => { console.log(error); }
      )
  }

}
