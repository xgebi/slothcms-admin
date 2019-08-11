import { TestBed } from '@angular/core/testing';

import { PostTypeEditService } from './post-type-edit.service';

describe('PostTypeEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostTypeEditService = TestBed.get(PostTypeEditService);
    expect(service).toBeTruthy();
  });
});
