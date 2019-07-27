import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTypeSettingsComponent } from './post-type-settings.component';

describe('PostTypeSettingsComponent', () => {
  let component: PostTypeSettingsComponent;
  let fixture: ComponentFixture<PostTypeSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTypeSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTypeSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
