import { TestBed } from '@angular/core/testing';

import { PostsCategoriesEditService } from './posts-categories-edit.service';

describe('PostsCategoriesEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostsCategoriesEditService = TestBed.get(PostsCategoriesEditService);
    expect(service).toBeTruthy();
  });
});
