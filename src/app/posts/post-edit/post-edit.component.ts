import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostEditService, PostActions } from './post-edit.service';
import { PostTypes } from 'src/app/navigation/navigation.component';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss'],
  providers: [PostEditService]
})
export class PostEditComponent implements OnInit {
  public uuid: string;
  private action: PostActions;
  public postTypes: PostTypes;

  constructor(private route: ActivatedRoute, private postEditService: PostEditService) {
    this.route
      .data
      .subscribe(v => this.action = v.action);
    this.route.params.subscribe((params: Params): void => {
      console.log(params);
      this.uuid = params["id"];
    });
  }

  ngOnInit() {
    if (this.action === PostActions.edit) {
      this.postEditService.getEditedPostInfo(this.uuid)
        .subscribe(
          ((data: any) => { console.log(data); this.postTypes = data.postTypes; }),
          (error: any) => { console.log(error); }
        );
    }

    if (this.action === PostActions.edit) {
      this.postEditService.getNewPostInfo(this.uuid)
        .subscribe(
          ((data: any) => { console.log(data); this.postTypes = data.postTypes; }),
          (error: any) => { console.log(error); }
        );
    }
  }

}
