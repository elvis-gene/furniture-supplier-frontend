import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreProductThumbnailComponent } from './store-product-thumbnail.component';

describe('StoreProductThumbnailComponent', () => {
  let component: StoreProductThumbnailComponent;
  let fixture: ComponentFixture<StoreProductThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreProductThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreProductThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
