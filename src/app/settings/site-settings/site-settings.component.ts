import { Component, OnInit } from '@angular/core';
import { SiteSettingsService } from './site-settings.service';
import { PostTypes } from 'src/app/navigation/navigation.component';

@Component({
  selector: 'app-site-settings',
  templateUrl: './site-settings.component.html',
  styleUrls: ['./site-settings.component.scss']
})
export class SiteSettingsComponent implements OnInit {
  public postTypes: PostTypes;

  constructor(private siteSettingsService: SiteSettingsService) { }

  ngOnInit() {
    this.siteSettingsService.getSettingsPage()
      .subscribe(
        (data: any) => { this.postTypes = data.postTypes; console.log(data); },
        (error) => { console.log(error); }
      );
  }

}
