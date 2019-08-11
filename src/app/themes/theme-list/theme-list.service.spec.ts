import { TestBed } from '@angular/core/testing';

import { ThemeListService } from './theme-list.service';

describe('ThemeListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThemeListService = TestBed.get(ThemeListService);
    expect(service).toBeTruthy();
  });
});
