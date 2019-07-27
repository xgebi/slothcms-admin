import { Component, OnInit } from '@angular/core';

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

  constructor(private initService: InitService) { }

  ngOnInit() {
    this.initService.getInitializationState()
      .subscribe(
        (data: Initialized) => { this.response = data; }, // success path
        error => this.error = error // error path
      )
  }

}
