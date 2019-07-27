import { Component, OnInit } from '@angular/core';
import { RegistrationService, RegistrationDetails } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: [RegistrationService]
})
export class RegistrationComponent implements OnInit {
  public formError: boolean;
  public username: string;
  public password: string;
  public email: string;
  public sitename: string;

  constructor(private registrationService: RegistrationService) {
    this.formError = true;
  }

  ngOnInit() {
  }

  onSubmit() {
    const details: RegistrationDetails = {
      username: this.username,
      password: this.password,
      email: this.email,
      sitename: this.sitename
    };
    this.registrationService.register(details)
      .subscribe(resp => {
        console.log(resp);
      });
  }

}
