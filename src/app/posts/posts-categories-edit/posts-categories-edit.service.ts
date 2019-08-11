import { Injectable } from "@angular/core";
import { Actions } from "src/app/models/actions";

export default interface Category {
  name: string;
  uuid: string;
  slug: string;
  postTypeUuid: string;
}

@Injectable({
  providedIn: "root"
})
export class PostsCategoriesEditService {
  private action: Actions;

  constructor() { }
}
