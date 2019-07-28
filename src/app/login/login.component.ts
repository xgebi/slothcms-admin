import { Component, OnInit } from '@angular/core';
import { LoginService, UserDetails } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  public userDetails: UserDetails;

  constructor(private loginService: LoginService) {
    this.userDetails = {
      username: "",
      password: ""
    }
  }

  ngOnInit() {
  }

  onSubmit() {
    this.loginService.login(this.userDetails)
      .subscribe(resp => { console.log(resp); });

  }

}
