import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsCategoriesEditComponent } from './posts-categories-edit.component';

describe('PostsCategoriesEditComponent', () => {
  let component: PostsCategoriesEditComponent;
  let fixture: ComponentFixture<PostsCategoriesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsCategoriesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsCategoriesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
