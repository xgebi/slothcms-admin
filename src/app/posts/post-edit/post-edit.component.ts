import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostEditService, PostActions } from './post-edit.service';
import { PostTypes } from 'src/app/navigation/navigation.component';
import PostItem from 'src/app/models/post-item';

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
  public postInformation: PostItem;
  public categories = "";
  public tags = "";
  public publishDate: Date;

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
          ((data: any) => {
            this.postTypes = data.postTypes;
            this.postInformation = data.postInformation;
            this.categories = data.postInformation.categories.join(", ") || "";
            this.tags = data.postInformation.tags.join(", ") || "";
            this.publishDate = new Date(data.postInformation.publishDate * 1000);
          }),
          (error: any) => { console.log(error); }
        );
    }

    if (this.action === PostActions.new) {
      this.postEditService.getNewPostInfo(this.uuid)
        .subscribe(
          ((data: any) => {
            console.log(data);
            this.postTypes = data.postTypes;
            this.postInformation = {
              uuid: data.newPostUuid
            }
          }),
          (error: any) => { console.log(error); }
        );
    }
  }

}
