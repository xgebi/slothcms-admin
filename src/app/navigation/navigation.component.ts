import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedInDetails } from '../login/login.service';
import { NavigationService, MinimalUser } from './navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public user: LoggedInDetails;

  constructor(private router: Router, private navigationService: NavigationService) {
    this.user = JSON.parse(localStorage.getItem('sloth-user'));
    let minUser: MinimalUser = {
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
      )
  }

  ngOnInit() {
  }

  logout() {
    debugger;
    console.log("this is a bugger");
    this.user = JSON.parse(localStorage.getItem('sloth-user'));
    const minUser: MinimalUser = {
      uuid: this.user.uuid,
      token: this.user.token
    };
    this.navigationService.logout(minUser)
      .subscribe();
    this.user = null;

    localStorage.removeItem('sloth-user');
    this.router.navigateByUrl('/login');
  }

}
