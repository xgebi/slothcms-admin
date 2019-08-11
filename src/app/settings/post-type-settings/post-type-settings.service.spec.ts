import { TestBed } from '@angular/core/testing';

import { PostTypeSettingsService } from './post-type-settings.service';

describe('PostTypeSettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostTypeSettingsService = TestBed.get(PostTypeSettingsService);
    expect(service).toBeTruthy();
  });
});
