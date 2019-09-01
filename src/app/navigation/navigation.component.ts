import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { LoggedInDetails } from "../login/login.service";
import { NavigationService, MinimalUser } from "./navigation.service";
import { PostType } from "../models/post-type";

export interface PostTypes {
  postTypes: PostType[];
}

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html"
})
export class NavigationComponent implements OnInit {
  @Input()
  postTypes: PostTypes;

  public user: LoggedInDetails;
  public pathname = window.location.pathname;
  private loginInterval: any;

  constructor(private router: Router, private navigationService: NavigationService) {
    this.user = JSON.parse(localStorage.getItem("sloth-user"));
    const minUser: MinimalUser = {
      uuid: this.user.uuid,
      token: this.user.token
    };

    this.loginInterval = setInterval(() => {
      this.navigationService.refreshLogin(minUser)
        .subscribe(
          (data: any) => {
            this.user.expiryTime = (new Date()).getTime().toString();
          },
          (error: any) => { console.log(error); }
        );
    }, 30000);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    clearInterval(this.loginInterval);
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
