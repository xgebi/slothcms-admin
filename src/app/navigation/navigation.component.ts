import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { LoggedInDetails } from "../login/login.service";
import { NavigationService, MinimalUser } from "./navigation.service";

export interface PostTypes {
  postTypes: PostType[];
}

export interface PostType {
  uuid: string;
  displayName: string;
}

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
  @Input()
  postTypes: PostTypes;

  public user: LoggedInDetails;

  constructor(private router: Router, private navigationService: NavigationService) {
    this.user = JSON.parse(localStorage.getItem("sloth-user"));
    const minUser: MinimalUser = {
      uuid: this.user.uuid,
      token: this.user.token
    };

    this.navigationService.refreshLogin(minUser)
      .subscribe(
        (data) => {
          this.user.expiryTime = (new Date()).getTime().toString();
          console.log(this.user.expiryTime);
        },
        error => { console.log(error); }
      );
  }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log(this.postTypes);
  }

  logout() {
    this.user = JSON.parse(localStorage.getItem("sloth-user"));
    const minUser: MinimalUser = {
      uuid: this.user.uuid,
      token: this.user.token
    };
    this.navigationService.logout(minUser)
      .subscribe();
    this.user = null;

    localStorage.removeItem("sloth-user");
    this.router.navigateByUrl("/login");
  }

}
