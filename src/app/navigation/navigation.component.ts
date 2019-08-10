import { Component, OnInit, Input } from "@angular/core";
import { Router, Params, ActivatedRoute } from "@angular/router";
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
  public pathname = window.location.pathname;

  constructor(private router: Router, private navigationService: NavigationService, private route: ActivatedRoute) {
    this.user = JSON.parse(localStorage.getItem("sloth-user"));
    const minUser: MinimalUser = {
      uuid: this.user.uuid,
      token: this.user.token
    };

    this.navigationService.refreshLogin(minUser)
      .subscribe(
        (data) => {
          this.user.expiryTime = (new Date()).getTime().toString();
        },
        error => { console.log(error); }
      );
  }

  ngOnInit() {
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
