import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTypeEditComponent } from './post-type-edit.component';

describe('PostTypeEditComponent', () => {
  let component: PostTypeEditComponent;
  let fixture: ComponentFixture<PostTypeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTypeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
