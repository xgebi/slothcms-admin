import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RegistrationService, RegistrationDetails } from "./registration.service";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"],
  providers: [RegistrationService]
})
export class RegistrationComponent implements OnInit {
  public formError: boolean;
  public error: string;
  public username: string;
  public password: string;
  public email: string;
  public sitename: string;
  public description: string;
  public url: string;

  constructor(private registrationService: RegistrationService, private router: Router) {
    this.formError = false;
  }

  ngOnInit() {
  }

  onSubmit() {
    const details: RegistrationDetails = {
      username: this.username,
      password: this.password,
      email: this.email,
      sitename: this.sitename,
      siteDescription: this.description,
      siteUrl: this.url
    };
    this.registrationService.register(details)
      .subscribe(resp => {
        if (resp.status === 201) {
          this.router.navigateByUrl("/login");
          return;
        } else {
          this.formError = true;
          this.error = resp.body["error"];
        }
      });
  }

}
