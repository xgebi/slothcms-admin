import { TestBed } from '@angular/core/testing';

import { MenuSettingsService } from './menu-settings.service';

describe('MenuSettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuSettingsService = TestBed.get(MenuSettingsService);
    expect(service).toBeTruthy();
  });
});
