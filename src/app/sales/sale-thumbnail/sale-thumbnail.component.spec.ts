import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleThumbnailComponent } from './sale-thumbnail.component';

describe('SaleThumbnailComponent', () => {
  let component: SaleThumbnailComponent;
  let fixture: ComponentFixture<SaleThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
