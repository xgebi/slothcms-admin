import { TestBed } from '@angular/core/testing';

import { PostEditService } from './post-edit.service';

describe('PostEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostEditService = TestBed.get(PostEditService);
    expect(service).toBeTruthy();
  });
});
