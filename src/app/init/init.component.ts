import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Initialized, InitService } from './init.service';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss'],
  providers: [InitService]
})
export class InitComponent implements OnInit {
  private error: any;
  private response: Initialized;

  constructor(private initService: InitService, private router: Router) {
    console.log("bbbb");
  }

  ngOnInit() {
    this.initService.getInitializationState()
      .subscribe(
        (data: Initialized) => {
          this.response = data;
          //console.log(this.router.url);
          if (this.response.initialized) {
            this.router.navigateByUrl('/login');
          } else {
            this.router.navigateByUrl('/register');
          }
        }, // success path
        error => this.error = error // error path
      );
  }

}
