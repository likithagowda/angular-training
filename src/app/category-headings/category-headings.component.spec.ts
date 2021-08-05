import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryHeadingsComponent } from './category-headings.component';

describe('CategoryHeadingsComponent', () => {
  let component: CategoryHeadingsComponent;
  let fixture: ComponentFixture<CategoryHeadingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryHeadingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryHeadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
