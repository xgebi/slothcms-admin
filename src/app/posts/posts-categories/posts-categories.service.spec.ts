import { TestBed } from "@angular/core/testing";

import { PostsCategoriesService } from "./posts-categories.service";

describe("PostsCategoriesService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: PostsCategoriesService = TestBed.get(PostsCategoriesService);
    expect(service).toBeTruthy();
  });
});
