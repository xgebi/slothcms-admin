import { Component, OnInit } from '@angular/core';
import { LoginService, UserDetails, LoggedInDetails } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  public userDetails: UserDetails;
  public error: any;
  private data: any;

  constructor(private loginService: LoginService, private router: Router) {
    this.userDetails = {
      username: "",
      password: ""
    }
  }

  ngOnInit() {
  }

  onSubmit() {
    this.loginService.login(this.userDetails)
      .subscribe(
        (data) => {
          const loggedInDetails: LoggedInDetails = {
            uuid: data["uuid"],
            displayName: data["displayName"],
            token: data["token"],
            expiryTime: data["expiryTime"]
          }
          localStorage.setItem('sloth-user', JSON.stringify(loggedInDetails));
          this.router.navigateByUrl('/dashboard');
        }, // success path
        error => this.error = error // error path
      );

  }

}
