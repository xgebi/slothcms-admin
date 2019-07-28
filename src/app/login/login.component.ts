import { Component, OnInit } from "@angular/core";
import { LoginService, UserDetails, LoggedInDetails } from "./login.service";
import { Router } from "@angular/router";

@Component({
  providers: [LoginService],
  selector: "app-login",
  styleUrls: ["./login.component.scss"],
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  public userDetails: UserDetails;
  public error: any;
  private data: any;

  constructor(private loginService: LoginService, private router: Router) {
    this.userDetails = {
      password: "",
      username: ""
    };
  }

  ngOnInit() {
  }

  onSubmit() {
    this.loginService.login(this.userDetails)
      .subscribe(
        (data) => {
          const loggedInDetails: LoggedInDetails = {
            displayName: data["body"]["displayName"],
            expiryTime: data["body"]["expiryTime"],
            permissionsLevel: data["body"]["permissionsLevel"],
            token: data["body"]["token"],
            uuid: data["body"]["uuid"]
          };

          localStorage.setItem("sloth-user", JSON.stringify(loggedInDetails));
          this.router.navigateByUrl("/dashboard");
        }, // success path
        error => this.error = error // error path
      );

  }

}
